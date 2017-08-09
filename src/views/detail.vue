<template>
  <div class="book-detail">
    <el-row>
      <el-col :md="14" :sm="24" :offset="2">
        <el-row class="book-intr">
          <img :src="book.images.large" />
          <div class="desc">
            <h3><router-link :to="{path: '/book/' + book.id}">{{book.title}}</router-link></h3>
            <p>作者：{{author()}}</p>
            <el-rate :value="setRating(book.rating.average)" disabled show-text text-color="#ff9900" text-template="{value}"></el-rate>
            <p>出版社：{{book.publisher}}</p>
            <p class="time">出版时间：{{ book.pubdate }}</p>
            <p>页数：{{book.pages}}</p>
            <p>装订：{{book.binding}}</p>
            <p>定价：{{book.price}}</p>
          </div>
        </el-row>
        <el-tabs class="book-info" v-model="activeTab">
          <el-tab-pane label="内容简介" name="bookdetail">
            {{book.summary}}
          </el-tab-pane>
          <el-tab-pane label="作者介绍" name="author_intro">
            {{book.author_intro}}
          </el-tab-pane>
          <el-tab-pane label="书本目录" name="catalog" v-html="bookCatalog()"></el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :md="6" :sm="24">
        <el-card class="box-card author-books">
          <div slot="header" class="clearfix">
            <span style="line-height: 36px;">作者作品TOP5</span>
          </div>
          <div class="books-list">
            <el-card :body-style="{ 'margin-top':'15px',padding: '0px' }" v-for="(book, index) in $store.state.book.authorBooks" :key="index">
              <router-link class="img-a" :to="{path: '/book/' + book.id}"><img :src="book.image" class="image"></router-link>
              <div class="intron">
                <h3><router-link :to="{path: '/book/' + book.id}">{{book.title}}</router-link></h3>
                <el-rate :value="setRating(book.rating.average)" disabled show-text text-color="#ff9900" text-template="{value}"></el-rate>
                <p class="time">出版时间：{{ book.pubdate }}</p>
                <p>作者：{{book.author[0]}}</p>
              </div>
            </el-card>
          </div>
        </el-card>
        
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'bookdetail'
    }
  },
  computed: {
    book() {
      return this.$store.state.book.bookInfo
    }
  },
  mounted() {
    this.$store.dispatch('getAuthorBooks', {author: this.book.author[0].replace(/[\[\(]+.*[\]\)]+/g, ''), top: 5})
  },
  metaInfo() {
    return {
      title: this.book.title + ' - ' + this.getTags(3),
      meta: [
        {name: 'keywords', content: this.getTags(0, ','), vmid: 'keywords'},
        {name: 'description', content: this.getDesc() , vmid: 'description'}
      ]
    }
  },
  preFetch({store, route}) {
    return store.dispatch('getBooksInfo', {id: route.params.id})
  },
  methods: {
    /**
     * @param int num 取多少个tag
     * @param str ds tag间的间隔符 
     */
    getTags(num, ds) {
      ds = ds || ''
      num = num || 0
      let tags = []
      for (let index in this.book.tags) {
        if (num > 0 &&  index >= num) {
          break;
        }
        tags.push(this.book.tags[index].name)
      }
      return tags.join(ds)
    },
    // 页面描述
    getDesc() {
      return this.book.title + this.book.summary + this.book.publisher + ',' + this.getTags()
    },
    author() {
      return this.book.author.join(', ')
    },
    setRating(rating) {
      return Math.round(rating*5)/10
    },
    bookCatalog() {
      return this.book.catalog.replace(/\n+/g, '<BR/>')
    }
  }
}
</script>

<style>
  
</style>

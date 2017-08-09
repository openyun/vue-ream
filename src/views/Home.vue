<template>
  <div class="books-list">
    <el-row>
      <el-col :span="5" v-for="(book, index) in booksList" :key="index">
        <el-card :body-style="{ padding: '0px' }">
          <router-link class="img-a" :to="{path: '/book/' + book.id}" target="_blank"><img :src="book.image" class="image"></router-link>
          <div class="intron">
            <h3><router-link :to="{path: '/book/' + book.id}" target="_blank">{{book.title}}</router-link></h3>
            <el-rate :value="setRating(book.rating.average)" disabled show-text text-color="#ff9900" text-template="{value}"></el-rate>
            <p class="time">出版时间：{{ book.pubdate }}</p>
            <p>作者：{{book.author[0]}}</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="booksCurrentPage"
      :page-sizes="[20, 40, 60, 80]"
      :page-size="booksPageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="$store.state.book.booksTotal">
    </el-pagination>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        booksCurrentPage: 1,
        booksPageSize: 20
      }
    },
    computed: {
      title() {
        return this.$store.state.book.keyword
      },
      booksList() {
        return this.$store.state.book.booksList
      }
    },
    metaInfo() {
      return {
        title: this.title,
        meta: [
          {name: 'keywords', content: '关键字 关键词', vmid: 'keywords'},
          {name: 'description', content: '我是页面描述', vmid: 'description'}
        ]
      }
    },
    preFetch({store, route}) {
      store.commit('setBookKeyword', {keyword: route.params.keyword})
      return store.dispatch('getBooks', {page: this.booksCurrentPage, pageSize: this.booksPageSize})
    },
    methods: {
      setRating(rating) {
        return Math.round(rating*5)/10
      },
      handleSizeChange(val) {
        this.booksPageSize = val
        this.action()
      },
      handleCurrentChange(val) {
        this.booksCurrentPage = val
        this.action()
      },
      action() {
        this.$store.dispatch('getBooks', {page: this.booksCurrentPage, pageSize: this.booksPageSize})
      }
    }
  }
</script>


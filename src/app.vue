<template>
  <div>
  <el-row class="header">
      <ul class="header-menu el-menu el-menu--horizontal el-menu--dark">
        <template v-for="(name, index) of menus" >
        <li class="el-menu-item" :key="index" :class="{'is-active': currName === name}">
          <a :href="'/' + name">{{name}} </a>
        </li>
        </template>
      </ul>
    </el-row>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: ['军事', '励志', '都市', '漫画', '武侠', '历史', '经济学', '互联网', '股票']
    }
  },
  computed: {
    currName() {

      return /^\/[^\/]*$/.test(this.$route.path) ? this.$store.state.book.keyword : ''
    }
  },
  metaInfo() {
    return {
      link: [
        {rel: 'stylesheet', href: '/public/css/common.css'}
      ]
    }
  }
}
</script>

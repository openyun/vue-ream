import actions from './actions'
import mutations from './mutations'

export default {
  state: {
    keyword: '军事', // 搜索图书关键字
    booksList: [],  // 图书列表数据
    booksTotal: 0,  // 图书搜索总数，用于分页
    bookInfo: {},   // 图书详情
    authorBooks: {} // 作者作品
  },
  actions,
  mutations
}
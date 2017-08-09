import axios from '../axios'

export default {
  // 获取图书列表
  getBooks({commit, state}, {page, pageSize}) {
    let start = pageSize * (page - 1)
    return axios.get('/book/search', {params: {tag: state.keyword, start: start, count: pageSize}})
    .then(res => {
      commit('setBooks', res.data)
    })
  },
  // 获取图书详情
  getBooksInfo({commit, state}, {id}) {
    return axios.get('/book/' + id)
    .then(res => {
      commit('setBooksInfo', res.data)
    })
  },
  getAuthorBooks({commit, state}, {author, top}) {
    return axios.get('/book/search', {params: {tag: author, count: top}})
    .then(res => {
      commit('setAuthorBooks', res.data)
    })
  }
}
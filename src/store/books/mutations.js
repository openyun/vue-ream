export default {
  setBooks(state, {books, total}) {
    state.booksList = books
    state.booksTotal = total
  },
  setBookKeyword(state, {keyword}) {
    state.keyword = keyword || '军事'
  },
  setBooksInfo(state, data) {
    console.log(data)
    state.bookInfo = data
  },
  setAuthorBooks(state, {books}) {
    state.authorBooks = books
  }
}
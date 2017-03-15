const GET_DATA = 'GET_DATA'

export default {
  [GET_DATA](state, payload) {
    console.log(state.level + '=======' + payload.w)
  }
}

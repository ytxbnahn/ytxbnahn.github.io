const GET_DATA = 'GET_DATA'
const SKILL_SHOW = 'SKILL_SHOW'

export default {
  [GET_DATA](state, payload, options) {
    console.log(state.level + '=======' + payload.w + JSON.stringify(options))
  },
  [SKILL_SHOW](state, payload) {
    state.skillShow = payload
  }

}

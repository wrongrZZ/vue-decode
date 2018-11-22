/**
 * （异步操作、多个commit时）
 */
import * as types from './mutation-type.js'

export default {
  nameAsyn ({commit}, {age, name}) {
    commit(types.SET_NAME, name)
    commit(types.SET_AGE, age)
  },
  textAsyn ({commit}, {text, time}) {
    commit(types.SET_TESTEX, text)
  }
}

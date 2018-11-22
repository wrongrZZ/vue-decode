import * as types from './mutation-type.js'
// mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性：
export default {
  [types.SET_NAME] (state, name) {
    state.state.name = name
  },
  [types.SET_AGE] (state, age) {
    state.state.age = age
  },
  [types.SET_TESTEX] (state, text) {
    state.testExample.text = text
  }
}

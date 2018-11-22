/**
 * 可在此返回更改的值 但是不会更改实际的值
 *  计算的存在
 */
export const name = (state) => {
  return '新的' + state.state.name
}

export const age = (state) => {
  return state.state.age - 19
}

export const msg = (state) => {
  return '我来自getters+' + state.testExample.text
}

export const other = (state) => {
  return `He name is ${state.name}, he am ${state.age}.`
}

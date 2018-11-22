<template>
  <div>
    <p>{{title}}</p>
  <p>mapGetters里面的都是getters.js的方法名</p>
  <p class="value">mutation 必须同步执行这个限制; action 内部执行异步操作：</p>
  <div>
     <pre v-highlight>
        <code>
// 第一步在 state.js
// 创建新数组，并给初始值
const testExample = {
  text: '我要好好学习vuex',
  time: '2018/10/24'
}

export default {
  state,
  testExample
}
// 第二步 在mutation-type.js
// 创建函数名称
// 官方要求全部大写
export const SET_NAME = 'SET_NAME'
export const SET_AGE = 'SET_AGE'
export const SET_TESTEX = 'SET_TESTEX'
// 第三步 在mutations.js
// 使用mutation-type.js里刚创建好的函数名称，并赋予计算方式
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
// 第四步  在getters.js
export const msg = (state) => {
  return '我来自getters+' + state.testExample.text
}
// 第五步  使用前准备工作
// 在index.js
import vue from 'vue'
import vuex from 'vuex'
import state from './state.js'
import * as getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'
import createLogger from 'vuex/dist/logger' // 修改日志

vue.use(vuex)

const debug = process.env.NODE_ENV !== 'production' // 开发环境中为true，否则为false

export default new vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugins: debug ? [createLogger()] : [] // 开发环境下显示vuex的状态修改 打印 作用监听
})

// 在main.js 引入
import store from './store'

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '&lt;App/&gt;'
})

// 第六步 使用 在页面上
import {mapGetters, mapMutations, mapState} from 'vuex'
  computed: {
    // 对照getters.js 函数名称
    ...mapGetters([
      'name',
      'age',
      'msg'
    ]),
    // 这里的三点叫做 : 扩展运算符
    ...mapState({
      stateName: state => state.state.name,
      stateAge: state => state.state.age,
      stateMsg: state => state.testExample.text
    })
  },
  methods: {
    // 方法 声明在该组件里的方法名称，可直接使用
    ...mapMutations({
      setName: 'SET_NAME',
      setAge: 'SET_AGE',
      setText: 'SET_TESTEX'
    }),
    changeNameValue () {
      var str = this.stateName + '的儿子'
      this.setName(str)
      var nAge = 100 + this.stateAge
      this.setAge(nAge)
      var nText = '看我再次更改' + this.stateMsg
      this.setText(nText)
    }
  }
        </code>
     </pre>
     <hr>
     <p>这里是结果：</p>
     <div>
      <div><button class="btn" @click="changeNameValue">更改name</button></div>
      <p class="value">name:{{name}}</p>
      <p class="value">age:{{age}}</p>
      <p class="value">msg:{{msg}}</p>
      <p class="value">stateName:{{stateName}}</p>
      <p class="value">stateAge:{{stateAge}}</p>
      <p class="value">stateMsg:{{stateMsg}}</p>
     </div>
  </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapState, mapActions} from 'vuex'
export default {
  data () {
    return {
      title: '全局变量'
    }
  },
  computed: {
    // 对照getters.js 函数名称
    ...mapGetters([
      'name',
      'age',
      'msg'
    ]),
    // 这里的三点叫做 : 扩展运算符
    ...mapState({
      stateName: state => state.state.name,
      stateAge: state => state.state.age,
      stateMsg: state => state.testExample.text
    })
  },
  mounted () {
    // action 的使用方法
    // this.$store.dispatch('textAsyn', {text: '我讨厌学习'}) 或者
    this.actionFun({text: '我真的很喜欢学习'})
  },
  methods: {
    // 方法 声明在该组件里的方法名称，可直接使用
    ...mapMutations({
      setName: 'SET_NAME',
      setAge: 'SET_AGE',
      setText: 'SET_TESTEX'
    }),
    ...mapActions({
      actionFun: 'textAsyn'
    }),
    changeNameValue () {
      var str = this.stateName + '的儿子+'
      this.setName(str)
      var nAge = 100 + this.stateAge
      this.setAge(nAge)
      var nText = '看我再次更改+' + this.stateMsg
      this.setText(nText)
    }
  }
}
</script>

<style scoped>
.value{
  color: red;
}
</style>

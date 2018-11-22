<template>
  <div>
    {{msg}}<br>
    id的值为:{{id}}
    <div v-if="qId > 0">传过来的值为 {{qId}} </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '我是测试路由跳转带参数',
      id: 0,
      qId: 0
    }
  },
  created () {
    console.log(this.$route)
    this.id = this.$route.params.id
    this.qId = this.$route.query.id
  }
}
</script>

<style scoped>

</style>

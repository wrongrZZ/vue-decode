<template>
  <div class="main">
    <el-tabs tab-position="left" style="height: 800px;">
      <el-tab-pane label="params传值" class="conent">
        <pre v-highlight>
            <code>
#params、query是什么？
params：/router1/:id ，/router1/123，/router1/789 ,这里的id叫做params

query：/router1?id=123 ,/router1?id=456 ,这里的id叫做query

# 使用params传值
this.$router.push({
  path: `/describe/${id}`,
})

//需要对应路由配置如下：

{
  path: '/describe/:id',
  name: 'Describe',
  component: Describe
}
            </code>
        </pre>
        <div>注意：params、query不设置也可以传参，<span style="color:red">但是params路由不设置的时候，刷新页面或者返回参数会丢失</span>，query并不会出现这种情况</div>
        <div><span style="color:red">注意：和name配对的是params，和path配对的是query</span></div>

        <div @click="goDetails(1)" class="goDetails">>>>点击我查看测试</div>
      </el-tab-pane>
      <el-tab-pane label="query传值" class="conent">
        <pre v-highlight>
            <code>

# 使用query传值
this.$router.push({
  path: '/describe',
  query: {
    id： 2
  }
})
            </code>
        </pre>
        <div>注意：params、query最好不要一起用，因为如果在路由里设定了params但是又没有传很容易找不到页面的</div>

        <div @click="goDetails(2)" class="goDetails">>>>点击我查看测试</div>
      </el-tab-pane>
      <el-tab-pane label="link传值" class="conent">
         <pre v-highlight>
            <code>
&lt;router-link :to="{ path: '/routerRest/trouter/3', query: { userId: 1111}}"/&gt;click to news page&lt;/router-link/&gt;
            </code>
        </pre>
        <router-link :to="{ path: '/routerRest/trouter/3', query: { userId: 1111}}">点击我查看测试</router-link>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '路由'
    }
  },
  methods: {
    goDetails (type) {
      switch (type) {
        case 1:
          var id = 1
          this.$router.push({
            path: `/routerRest/trouter/${id}`
          })
          break
        case 2:
          this.$router.push({
            path: '/routerRest/trouter',
            query: {
              id: 2
            }
          })
          break
        default:
          break
      }
    }
  }
}
</script>
<style scoped>
.conent{
  text-align: left;
  padding: 0 15px;
}
.goDetails{
  color: blue;
  padding: 10px 0;
}
</style>

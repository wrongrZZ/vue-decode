<template>
  <div>
    <el-row :gutter="12">
      <el-col :span="8" v-for="(item, index) in $router.options.routes" :key="index" v-if="item.isFunction" >
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix" @click="goDetails(item.path)">
            <div class="header-title">{{item.title}}</div>
          </div>
          <div class="text item">
            {{item.meta.msg }}
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '主页'
    }
  },
  methods: {
    goDetails (path) {
      this.$router.push({path: path})
    }
  }
}
</script>

<style scoped>
.text {
  font-size: 14px;
  text-align: left;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.header-title {
  color: #03A9F4;
  cursor: pointer
}
</style>

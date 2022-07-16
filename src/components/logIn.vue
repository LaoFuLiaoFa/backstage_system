<template>
  <div>
    <el-button type="primary" plain round @click="In">登录</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    In () {
      this.$router.push('/navMenuHome')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

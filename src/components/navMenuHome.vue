<template>
  <div class="container">
    <el-container class="home_container">
      <!-- 头部导航栏 -->
      <el-header>
                <div class="header">
                    <img src="https://www.nsu.edu.cn/img/logo.png" alt="">
                </div>
              <el-button type="danger" @click="LoginOut">退出登录</el-button>
      </el-header>
      <el-container>
        <el-aside width="150px">
            <el-menu
              :collapse-transition="false"
              background-color="#496EE3"
              text-color="#fff"
              active-text-color="#00FFFF"
              unique-opened
              :router="true"
              >
            <el-menu-item index="/AnswerData">
                <i class="el-icon-edit"></i>
                <span>答题数据</span>
            </el-menu-item>
            <el-menu-item index="/AccountData">
                <i class="el-icon-user"></i>
                <span>账号数据</span>
            </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    LoginOut () {
      this.$router.push('/logIn')
    }
  }
}
</script>

<style scoped>
.container {
    height: 100%;
    /* overflow: scroll; */
}

.home-container {
  height: 100%;
}

.el-header {
  background-color:  #1B3AA4;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header {
  display: flex;
  align-items: center;
}

.header img {
  width: 180px;
}

.el-aside {
  background-color: #496EE3;
}

.el-aside .el-menu {
  border-right: none;
}

.el-main {
  background-color: #eaedf1;
}
.el-container.is-vertical {
    height: 100%;
    flex-direction: column;
}
.toggle-button{
  background-color: #4263ce;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>

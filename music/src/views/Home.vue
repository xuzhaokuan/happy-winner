<template>
  <div class="header">
    <header>
      <img src="../images/logo.png" alt />

      <ul>
        <li>
          <span>
            <a href="#">发现音乐</a>
          </span>
        </li>
        <li>
          <span>
            <a href="#">我的音乐</a>
          </span>
        </li>
        <li>
          <span>
            <a href="#">朋友</a>
          </span>
        </li>
        <li>
          <span>
            <a href="#">商城</a>
          </span>
        </li>
        <li>
          <span>
            <a href="#">音乐人</a>
          </span>
        </li>
        <li>
          <span>
            <a href="#">下载客户端</a>
          </span>
        </li>
      </ul>
      <div class="search">
        <el-input prefix-icon="el-icon-search" v-model="input" placeholder="音乐/视频/电台/用户"></el-input>
      </div>
      <el-button round size="small">创作者中心</el-button>
    </header>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    return {
      input: ""
    };
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.header {
  width: 100%;
}
header {
  display: flex;
  height: 70px;
  background: #242424;
  text-align: center;
  line-height: 70px;
  width: 1100px;
  margin: 0 auto;
}
ul {
  list-style: none;
  display: flex;
  box-sizing: border-box;
  width: 508px;
  box-sizing: border-box;
}
ul li {
  
}
.el-input {
 
}
</style>

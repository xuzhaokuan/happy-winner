<template>
  <div id="app">
    <div class="header">
      <!-- <Header></Header> -->
      <img src="../src/images/logo.png" alt />

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
      <a class="create-btn">创作者中心</a>
      <div class="login">
        <a href="#">登录</a>
      </div>
    </div>
    <div class="nav">
      <div class="nav-in">
        <ul>
          <li>
            <a href="#">
              <em>推荐</em>
            </a>
          </li>
          <li>
            <a href="#">
              <em>排行榜</em>
            </a>
          </li>
          <li>
            <a href="#">
              <em>歌单</em>
            </a>
          </li>
          <li>
            <a href="#">
              <em>主播电台</em>
            </a>
          </li>
          <li>
            <a href="#">
              <em>歌手</em>
            </a>
          </li>
          <li>
            <a href="#">
              <em>新碟上架</em>
            </a>
          </li>
        </ul>
      </div>
      <div class="main"></div>
      <footer>
        <div class="wrap">
          <div class="left">
            <p class="l-1">
              <a href="#">服务条款</a>
              <span>|</span>
              <a href="#">隐私政策</a>
              <span>|</span>
              <a href="#">儿童隐私政策</a>
              <span>|</span>
              <a href="#">版权投诉指引</a>
              <span>|</span>
              <a href="#">意见反馈</a>
              <span>|</span>
            </p>
            <p class="l-2">
              <span>网易公司版权所有©1997-2020</span>
              <span>杭州乐读科技有限公司运营：</span>
              <a
                href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png"
              >浙网文[2018]3506-263号</a>
            </p>
            <p class="l-3">
              <span>违法和不良信息举报电话：0571-89853516</span>
              <span>举报邮箱：</span>
              <a class="alink" href="mailto:ncm5990@163.com">ncm5990@163.com</a>
            </p>
            <p class="l-4">
              <span>粤B2-20090191-18</span>
              <span>工业和信息化部备案管理系统网站</span>
              <a href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action"></a>
            </p>
          </div>
          <div class="right" style="width: 330px; float:right;">
            <ul style="overflow:hidden;">
              <li>
                <a href="//music.163.com/st/userbasic#/auth" >nihao</a>
                <span>用户认证</span>
              </li>
              <li style="margin-left:30px;">
                <a href="//music.163.com/recruit" style="background:url(../../images/p2.png)"></a>
                <span>独立音乐人</span>
              </li>
              <li style="margin-left:30px;">
                <a href="//music.163.com/web/reward" style="background:url(../../images/p3.png)"></a>
                <span>赞赏</span>
              </li>
              <li style="margin-left:30px;">
                <a href="//music.163.com/uservideo#/plan" style="background:url(../../images/p4.png)"></a>
                <span>视频奖励</span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <!-- <router-view /> -->
  </div>
</template>
<script>
import Header from "../src/views/Home";
export default {
  data() {
    return {
      input: ""
    };
  },
  components: {
    // Header
  }
};
</script>
<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
* {
  margin: 0;
  padding: 0;
}
em {
  font-style: normal;
}
ul {
  list-style: none;
}
.header {
  display: flex;
  height: 70px;
  background: #242424;
  text-align: center;
  line-height: 70px;
  width: 1100px;
  margin: 0 auto;
}

.header ul {
  list-style: none;
  box-sizing: border-box;
  width: 580px;
  font-size: 14px;
}
.header ul li {
  float: left;
  padding: 0 19px;
}
.header ul li a {
  text-decoration: none;
}
.el-input {
  width: 158px;
  height: 32px;
  border-radius: 50%;
}
.create-btn {
  float: right;
  width: 90px;
  height: 32px;
  margin: 19px 0 0 12px;
  box-sizing: border-box;
  /* padding-left: 16px; */
  border: 1px solid #4f4f4f;
  background-position: 0 -140px;
  line-height: 33px;
  color: #ccc;
  border-radius: 20px;
  font-size: 12px;
  text-align: center;
}
.login {
  float: right;
  /* height: 45px; */
  /* margin: 19px 0 0 20px;
  padding: 0 22px 0 0; */
  margin-left: 10px;
  background-position: right -47px;
  background-image: none;
  font-size: 12px;
}
.login a {
  display: block;
  width: 28px;
  /* margin-top: 7px; */
  color: #787878;
  text-decoration: none;
}
.nav {
  height: 35px;
  background: #c20c0c;
}
.nav-in {
  width: 1100px;
  height: 34px;
  margin: 0 auto;
}
.nav-in ul {
  float: left;
  padding-left: 180px;
}
.nav-in ul li {
  float: left;
  height: 34px;
  text-align: center;
  line-height: 24px;
}
.nav ul li a {
  color: #fff;
  text-decoration: none;
}
.nav ul li a em {
  font-size: 12px;
  display: inline-block;
  height: 20px;
  padding: 0 13px;
  margin: 7px 17px 0;
  border-radius: 20px;
}
.main {
  min-height: 100px;
  background: skyblue;
}
footer {
  font-size: 12px;
}

.wrap {
  width: 980px;
  margin: 0 auto;
}
.wrap .left {
  width: 520px;
  float: left;
  padding-top: 15px;
}
.left p {
  line-height: 24px;
}
.wrap .left .l-1 a {
  text-decoration: none;
}
.wrap .left .l-1 span {
  margin: 0 8px 0 10px;
  color: #c2c2c2;
}
.left .l-2 span:nth-of-type(1) {
  margin-right: 14px;
}
.left .l-3 span:nth-of-type(1) {
  margin-right: 14px;
}
.left .l-4 span:nth-of-type(1) {
  margin-right: 14px;
}
.right ul {
  width: 330px;
  margin-top: 33px;
}
.right ul li {
  float: left;
  width: 60px;
  height: 70px;
  margin-left: 30;
  text-align: center;
  color: #666;
}
.right ul li a {
  display: block;
  float: none;
  width: 50px;
  height: 45px;
  margin: 0 auto;
}
.right ul li span {
  display: inline-block;
    margin: 5px 5px 0;
    width: 52px;
    height: 14px;
}
</style>
 
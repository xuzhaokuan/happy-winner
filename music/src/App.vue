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
        <input
          type
          name
          id
          value
          autocomplete="off"
          v-model="input"
          @keyup.enter="serchMusic"
          
          @focus="chuxian"
        />
        <!-- <ul style="width:200px; position:absolute;z-index:999;max-height:300px;overflow:hidden;background:#fff;" v-if="isShow">
          <li v-for="item in musicList" :key="item.id" style="float:none;height:20px;font-size:12px;">
            <a href="javascript:;" @click="playMusic(item.id)">播放</a> <b>{{item.name}}</b><span v-if="item.mvid!=0" @click="playMV(item.mvid)" style=" width: 23px;height: 17px; margin-right: 50px; border: 1px #000 solid;"><i style="background: url(./table.png) left -48px no-repeat;display: block;
  width: 100%;
  height: 17px;
  cursor: pointer;"></i></span>
          </li>
        </ul>-->
        <ul
          class="musiclist"
          style="width:200px; position:absolute;z-index:999;max-height:300px;overflow:hidden;background:#fff;"
          v-if="isShow"
        >
          <li v-for="item in musicList" style="height:40px;font-size:12px;" :key="item.id">
            <a href="javascript:;" @click="playMusic(item.id)">播放</a>
            <b>{{item.name}}</b>
            <span
              v-if="item.mvid!=0"
              @click="playMV(item.mvid)"
              style=" width: 23px;height: 17px; margin-right: 50px; border: 1px #000 solid;"
            >
              <i
                style="background: url(./table.png) left -48px no-repeat;display: block;
  width: 100%;
  height: 17px;
  cursor: pointer;"
              ></i>
            </span>
          </li>
        </ul>
      </div>
      <a class="create-btn">创作者中心</a>
      <div class="login">
        <a href="#" @click="show=!show">登录</a>
      </div>
    </div>
    <div class="nav">
      <div class="nav-in">
        <ul>
          <li>
            <em><router-link :to="{name:'home'}">推荐</router-link></em>
          </li>
          <li>
            <a href="#">
              <em><router-link :to="{name:'toplist'}">排行榜</router-link></em>
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
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
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
              <a href="//music.163.com/st/userbasic#/auth">
                <img src="../src/images/p1.png" style="width:100%;" alt />
              </a>
              <span>用户认证</span>
            </li>
            <li style="margin-left:30px;">
              <a href="//music.163.com/recruit">
                <img src="../src/images/p2.png" style="width:100%;" alt />
              </a>
              <span>独立音乐人</span>
            </li>
            <li style="margin-left:30px;">
              <a href="//music.163.com/web/reward">
                <img src="../src/images/p3.png" style="width:100%;" alt />
              </a>
              <span>赞赏</span>
            </li>
            <li style="margin-left:30px;">
              <a href="//music.163.com/uservideo#/plan">
                <img src="../src/images/p4.png" style="width:100%;" alt />
              </a>
              <span>视频奖励</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    <div class="kk" v-show="show">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="登录" name="first">
          <p>
            <input type="text" v-model="phoneNum" placeholder="请输入手机号" style="margin:0 auto;" />
          </p>
          <p>
            <input type="password" v-model="password" placeholder="请输入密码" />
          </p>
          <el-button type="primary" plain size="mini" @click="login">登录</el-button>
        </el-tab-pane>
        <el-tab-pane label="注册" name="second">
          <el-input v-model="resignNum" placeholder="请输入手机号"></el-input>
          <el-input v-model="yanzhengma" placeholder="请输入验证码"></el-input>
          <el-button round @click="yzm">获取验证码</el-button>
          <p>
            <el-input v-model="resignPsw" placeholder="请输入密码"></el-input>
          </p>
          <p>
            <el-input v-model="nickName" placeholder="请输入昵称"></el-input>
          </p>
          <el-button round @click="resign">注册</el-button>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="audio_con">
      <audio :src="$store.state.musicUrl" @play="play" @pause="pause" controls autoplay loop class="myaudio"></audio>
    </div>
    <div class="video_con" v-show="$store.state.mvShow" style="display: none;">
					<video :src="$store.state.mvUrl" controls="controls">
					
					</video>
					<div class="mask" @click="hide">
						
					</div>
				</div>
  </div>

  <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
  </div>-->
  <!-- <router-view /> -->
</template>
<script>
import Header from "../src/views/Home";
import { get } from "./utils/request";
export default {
  data() {
    return {
      input: "",
      musicList: [],
      activeName: "second",
      phoneNum: "",
      password: "",
      resignNum: "",
      yanzhengma: "",
      resignPsw: "",
      nickName: "",
      show: false,
      isShow: true,
      // 歌曲地址
      // musicUrl: "",
      //动画播放状态
      isPlaying: false,
      
    };
  },
  components: {
    // Header
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    login() {
      get(
        "https://autumnfish.cn/login/cellphone?phone=" +
          this.phoneNum +
          "&password=" +
          this.password
      ).then(res => {
        console.log(res.data);
        console.log(res.data.token);
        if (res.data.code == 200) {
          localStorage.getItem("token", res.data.token);
        }
      });
    },
    yzm() {
      get("https://autumnfish.cn/captcha/sent?phone=" + this.resignNum).then(
        res => {
          console.log(res.data);
        }
      );
    },
    resign() {
      get(
        "https://autumnfish.cn/register/cellphone?phone=" +
          this.resignNum +
          "&password=" +
          this.resignPsw +
          "&captcha=" +
          this.yanzhengma +
          "&nickname=" +
          this.nickName
      ).then(res => {
        console.log(res.data);
      });
    },
    serchMusic() {
      this.isShow = true;
      get("https://autumnfish.cn/search?keywords=" + this.input).then(res => {
        console.log(res.data.result.songs);
        this.musicList = res.data.result.songs;
        if (this.input == "") {
          this.musicList = [];
          this.isShow = false;
        }
      });
    },
    search() {
      this.isShow = false;
    },
    chuxian() {
      this.isShow = true;
    },
    //歌曲url的获取
    playMusic(musicId) {
      console.log(musicId);
      get("https://autumnfish.cn/song/url?id=" + musicId)
        .then(res => {
          console.log(res.data.data[0].url);
          this.$store.state.musicUrl = res.data.data[0].url;
        })
        .catch(err => {
          console.log(err);
        });
    },
    play: function() {
      console.log("play");
      this.isPlaying = true;
    },
    pause: function() {
      console.log("pause");
      this.isPlaying = false;
    },
    //播放MV
					playMV(mvid) {
					get('https://autumnfish.cn/mv/url?id='+mvid).then(res => {
							console.log(res.data.data.url);
							this.$store.state.mvShow=true
							this.$store.state.mvUrl=res.data.data.url
						}).catch(err => {
							console.log(err);
						})
					},
					hide:function(){
						this.$store.state.mvShow=false
					}
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
  background: skyblue;
}
footer {
  font-size: 12px;
  position: relative;
  height: 172px;
  overflow: hidden;
  border-top: 1px solid #d3d3d3;
  background: #f2f2f2;
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
  background-size: 110px 450px;
}
.right ul li span {
  display: inline-block;
  margin: 5px 5px 0;
  width: 52px;
  height: 14px;
}
.kk {
  position: absolute;
  z-index: 9998;
  width: 530px;
  border-radius: 4px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.8);
  border: none;
  top: 175px;
  left: 226px;
}
.video_con video {
			  position: fixed;
			  width: 800px;
			  height: 546px;
			  left: 50%;
			  top: 50%;
			  margin-top: -273px;
			  transform: translateX(-50%);
			  z-index: 990;
			}
			.video_con .mask {
			  position: fixed;
			  width: 100%;
			  height: 100%;
			  left: 0;
			  top: 0;
			  z-index: 980;
			  background-color: rgba(0, 0, 0, 0.8);
			}
</style>
 
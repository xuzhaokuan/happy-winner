<template>
  <div class="home">
    <div class="banner" style="overflow:hidden;">
      <div class="banner-1" ref="t">
        <div class="banner-2">
          <div class="block" style="float:left;">
            <el-carousel>
              <el-carousel-item v-for="item in banner" :key="item.targetId">
                <h3 class="small">
                  <img :src="item.imageUrl" alt />
                </h3>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div style="overflow:hidden;">
            <img
              style="float:right;"
              src="https://s2.music.126.net/style/web2/img/index/download.png?2a187643b672eff95d00edffd4ff1e32"
              alt
            />
          </div>
        </div>
      </div>
    </div>
    <div class="discover">
      <div class="wrap">
        <div class="f-wrap">
          <div class="fl-wrap">
            <div class="tj">
              <a href="#">热门推荐</a>
              <div class="tab">
                <a href="#">华语</a>
                <span>|</span>
                <a href="#">流行</a>
                <span>|</span>
                <a href="#">摇滚</a>
                <span>|</span>
                <a href="#">民谣</a>
                <span>|</span>
                <a href="#">电子</a>
              </div>
              <span class="more">
                <a href="#">更多</a>
                <i class="el-icon-right">&nbsp;</i>
              </span>
            </div>
            <ul class="list-1">
              <li v-for='item in hotlist' :key='item.id'>
                <div class="u-cover">
                  <img :src="item.picUrl" alt="" :title="item.name">
                  <a href="" :title="item.name"></a>
                
                <div class="bottom">
                  <a href="" class="el-icon-video-play"></a>
                  <span class="el-icon-headset"></span>
                  <span class="nb"></span>
                </div>
                </div>
                <p class="desc">
                  <a href="" :title="item.name">{{item.name}}</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {get} from '../utils/request'
export default {
  data() {
    return {
      banner: [],
      bg: [
        "https://p1.music.126.net/nENHcoOyowsSYiWCMIBWlg==/109951164649869118.jpg?imageView&blur=40x20",
        "https://p1.music.126.net/9sgXq0JKUCSBxfA93EO6ZA==/109951164649878309.jpg?imageView&blur=40x20",
        "https://p1.music.126.net/hQG2HarBdz7SYsZ3VwHlUw==/109951164649877871.jpg?imageView&blur=40x20",
        "https://p1.music.126.net/lDAWIbdq3SAnn_299rDUfw==/109951164649859666.jpg?imageView&blur=40x20",
        "https://p1.music.126.net/zw_NCEk9LrvZ9cvlXG_nSg==/109951164649755699.jpg?imageView&blur=40x20",
        "https://p1.music.126.net/OoQ3BD7FlexsY1yXvFBiTw==/109951164649861766.jpg?imageView&blur=40x20",
        "https://p1.music.126.net/nENHcoOyowsSYiWCMIBWlg==/109951164649869118.jpg?imageView&blur=40x20",
        "https://p1.music.126.net/9sgXq0JKUCSBxfA93EO6ZA==/109951164649878309.jpg?imageView&blur=40x20",
        "https://p1.music.126.net/hQG2HarBdz7SYsZ3VwHlUw==/109951164649877871.jpg?imageView&blur=40x20"
      ],
      hotlist:[]
    };
  },
  created() {
    // banner图
    get('https://autumnfish.cn/banner')
    .then(res=>{
      console.log(res.data.banners)
      this.banner=res.data.banners
    });
    get('https://autumnfish.cn/personalized?limit=8')
    .then(res=>{
      console.log(res.data.result);
      this.hotlist=res.data.result
    })
  },
  mounted() {
    console.log(this.$refs.t);
  }
};
</script>
<style scoped>
.banner-2 {
  width: 982px;
  height: 285px;
  margin: 0 auto;
}
.block {
  width: 730px;
  height: 285px;
}
.el-carousel {
  width: 100%;
}
h3 img {
  height: 283px;
}
.discover .wrap {
  width: 980px;
  min-height: 700px;

  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  overflow: hidden;
}
.f-wrap {
  float: left;
  width: 100%;
  margin-right: -250px;
}
.fl-wrap {
  padding: 20px 20px 40px;
  border: 1px #000 solid;
  width: 688px;
  font-size:12px;
}
.tj {
  height: 33px;
  padding: 0 10px 0 34px;
  background-position: -225px -156px;
  border-bottom: 2px solid #c10d0c;
}
.tj > a {
  float: left;
  font-size: 20px;
  font-weight: normal;
  line-height: 28px;
}
.tab {
  float: left;
  margin: 7px 0 0 20px;
  font-size: 12px;
}
.tab span {
  margin: 0 10px;
  color: #ccc;
}
.more {
      float: right;
    margin-top: 9px;
}
.more i {
  display: inline-block;
    width: 12px;
    height: 12px;
    margin-left: 4px;
    vertical-align: middle;
}
.list-1 {
  margin: 20px 0 0 -42px;
  overflow: hidden;
}
.list-1 li {
  float: left;
    
    width: 140px;
    height: 188px;
    overflow: hidden;
    padding: 0 0 30px 40px;
    line-height: 1.4;
}
.u-cover {
      width: 140px;
    height: 140px;
    position: relative;
    display: block;
}
.u-cover img {
  display: block;
    width: 100%;
    height: 100%;
}
.u-cover>a {
  position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.u-cover .bottom {
      position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 27px;
    background-position: 0 -537px;
    color: #ccc;
}
.bottom .el-icon-video-play {
  display: inline-block;
  position: absolute;
    right: 10px;
    bottom: 5px;
    width: 16px;
    height: 17px;
    background-position: 0 0;
    
}
</style>
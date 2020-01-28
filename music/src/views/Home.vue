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
              <a href="#" >热门推荐</a>
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
                  <span class="el-icon-headset" style="margin:5px 0 0 5px;"></span>
                  <span class="nb"></span>
                </div>
                </div>
                <p class="desc">
                  <a href="" :title="item.name">{{item.name}}</a>
                </p>
              </li>
            </ul>
          </div>

          <div class="new">
            <div class="xinge">
              <a href="#" style="font-size:20px;">新碟上架</a>
              <span class="more">
                <a href="#">更多</a>
                <i class="el-icon-right">&nbsp;</i>
              </span>
            </div>
            <div class="disk">
              <div class="inner">
                <a href="" class="el-icon-arrow-left"></a>
                <div class="roll">
                  <ul class="list-2">
                    <li v-for="item in disk" :key='item.id'>
                      <div class="xindie">
                        <img :src="item.picUrl" alt="">
                        <a href="" :title="item.name"></a>
                        <a href=""></a>
                      </div>
                      <p class="thide">{{item.name}}</p>
                      <p>{{item.artist.name}}</p>
                    </li>
                  </ul>
                </div>
                <a href="" class="el-icon-arrow-right"></a>
              </div>
            </div>
          </div>

          <div class="bill">
             <div class="bill-top">
              <a href="#" style="font-size:20px;">新碟上架</a>
              <span class="more">
                <a href="#">更多</a>
                <i class="el-icon-right">&nbsp;</i>
              </span>
            </div>
            <div class="n-blist">
              <dl class="blk">
                <dt class="top">
                  <div class="cver">
                    <img src="" alt="">
                  <a href="#"></a>
                  </div>
                  <div class="tit">

                  </div>
                </dt>
              </dl>
            </div>
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
      hotlist:[],
      disk:[]
    };
  },
  created() {
    // banner图
    get('https://autumnfish.cn/banner')
    .then(res=>{
      console.log(res.data.banners)
      this.banner=res.data.banners
    });
    // 推荐
    get('https://autumnfish.cn/personalized?limit=8')
    .then(res=>{
      console.log(res.data.result);
      this.hotlist=res.data.result
    });
    // 新碟上架
    get('https://autumnfish.cn/top/album?offset=0&limit=20')
    .then(res=>{
      console.log(res.data.albums)
      this.disk=res.data.albums
    })
  },
  mounted() {
    console.log(this.$refs.t);
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
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
.fl-wrap,.new,.bill {
  padding: 20px 20px 40px;
  border: 1px #000 solid;
  width: 688px;
  font-size:12px;
}
.tj,.xinge,.bill-top {
  height: 33px;
  padding: 0 10px 0 34px;
  background-position: -225px -156px;
  border-bottom: 2px solid #c10d0c;
   background: url('https://s2.music.126.net/style/web2/img/index/index.png?83c7460d1145a62a5ab10aaea4a067a4') -235px -155px no-repeat;
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
    background: rgba(000, 000, 000, .5)
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
.desc a {
      display: inline-block;
    max-width: 100%;
    vertical-align: middle;
    font-size:14px;
    color: #000;
}
.disk {
  position: relative;
    zoom: 1;
    height: 186px;
    margin: 20px 0 37px;
    border: 1px solid #d3d3d3;
}
.disk .inner {
  height: 184px;
    padding-left: 16px;
    background: #f5f5f5;
    border: 1px solid #fff;
}
.inner a:nth-of-type(1) {
  position: absolute;
    top: 71px;
    width: 17px;
    height: 17px;
    left: 4px;
}
.inner a:nth-of-type(2) {
  position: absolute;
    top: 71px;
    width: 17px;
    height: 17px;
}
.roll {
  float: left;
    width: 645px;
    height: 180px;
    overflow: hidden;
}
.roll .list-2 {
  position: absolute;
    top: 0;
    width: 645px;
    height: 150px;
    margin: 28px 0 0 0;
    overflow: hidden;
}
.list-2 li {
  float: left;
    display: inline-block;
    width: 118px;
    height: 150px;
    margin-left: 11px;
    background-position: -260px 100px;

}
.xindie {
  margin-bottom: 7px;
  width: 100px;
  height: 100px;
}
.xindie img {
      display: block;
    width: 100%;
    height: 100%;
}
.list-2 li p {
  width: 90%;
    line-height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
}
.n-blist {
      height: 472px;
    margin-top: 20px;
    padding-left: 1px;
}
</style>
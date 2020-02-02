<template>
  <div class="list">
    <div class="list-top">
      <div class="m-info">
        <div class="cover">
          <img src alt />
          <span class="msk"></span>
        </div>
        <div class="cnt">
          <div class="cntc">
            <div class="hd">
              <h2></h2>
            </div>
            <div class="user">
              <i class="el-icon-time"></i>
              <span style="margin-left: 5px;color: #666;line-height: 35px;"></span>
              <span style="color: #666;line-height: 35px;"></span>
            </div>
            <div class="btns">
              <a
                href="javascript:;"
                title="播放"
                style="float: left;color: #fff;background-position: right -428px;text-decoration: none;padding: 0 5px 0 0;white-space: nowrap;display: inline-block;height: 31px;line-height: 31px;overflow: hidden;vertical-align: top;text-align: center;cursor: pointer;background:url(https://s2.music.126.net/style/web2/img/button2.png?3df6a3e3dc24e5c18b3d7dbce198a783)"
              >
                <i style="font-size:12px;">
                  <em class="ply"></em>播放
                </i>
              </a>
              <a
                href="javascript:;"
                title="添加至播放列表"
                style="margin-right: 5px;width: 31px;margin-left: -3px;padding-right: 0;background-position: 0 -1588px;color: #333;text-decoration: none;padding: 0 5px 0 0;white-space: nowrap;float: left;line-height: 30px;min-width: 23px;cursor: pointer;background:url(https://s2.music.126.net/style/web2/img/button2.png?3df6a3e3dc24e5c18b3d7dbce198a783) no-repeat 0 9999px;"
              ></a>
              <a
                href="javascript:;"
                style="margin-right: 6px;background-position: right -1020px;color: #333;text-decoration: none;padding: 0 5px 0 0;white-space: nowrap;float: left;height: 31px;line-height: 30px;min-width: 23px;cursor: pointer;background:url(https://s2.music.126.net/style/web2/img/button2.png?3df6a3e3dc24e5c18b3d7dbce198a783) no-repeat 0 9999px;"
              >
                <i
                  style="background-position: 0 -977px;padding-right: 2px;padding-left: 28px;float: left;height: 31px;line-height: 30px;min-width: 23px;cursor: pointer;font-style: normal;text-align: left;background:url(https://s2.music.126.net/style/web2/img/button2.png?3df6a3e3dc24e5c18b3d7dbce198a783) no-repeat 0 9999px;"
                ></i>
              </a>
              <a
                href="javascript:;"
                style="margin-right: 6px;background-position: right -1020px;color: #333;text-decoration: none;padding: 0 5px 0 0;white-space: nowrap;float: left;height: 31px;line-height: 30px;min-width: 23px;cursor: pointer;background:url(https://s2.music.126.net/style/web2/img/button2.png?3df6a3e3dc24e5c18b3d7dbce198a783) no-repeat 0 9999px;"
              >
                <i
                  style="background-position: 0 -977px;padding-right: 2px;padding-left: 28px;float: left;height: 31px;line-height: 30px;min-width: 23px;cursor: pointer;font-style: normal;text-align: left;background:url(https://s2.music.126.net/style/web2/img/button2.png?3df6a3e3dc24e5c18b3d7dbce198a783) no-repeat 0 9999px;"
                ></i>
              </a>
              <a
                href="javascript:;"
                style="margin-right: 6px;background-position: right -1020px;color: #333;text-decoration: none;padding: 0 5px 0 0;white-space: nowrap;float: left;height: 31px;line-height: 30px;min-width: 23px;cursor: pointer;background:url(https://s2.music.126.net/style/web2/img/button2.png?3df6a3e3dc24e5c18b3d7dbce198a783) no-repeat 0 9999px;"
              >
                <i
                  style="background-position: 0 -977px;padding-right: 2px;padding-left: 28px;float: left;height: 31px;line-height: 30px;min-width: 23px;font-style: normal;text-align: left;background:url(https://s2.music.126.net/style/web2/img/button2.png?3df6a3e3dc24e5c18b3d7dbce198a783) no-repeat 0 9999px;"
                >下载</i>
              </a>
              <a
                href="javascript:;"
                style="margin-right: 6px;background-position: right -1020px;color: #333;text-decoration: none;padding: 0 5px 0 0;white-space: nowrap;float: left;height: 31px;line-height: 30px;min-width: 23px;cursor: pointer;background:url(https://s2.music.126.net/style/web2/img/button2.png?3df6a3e3dc24e5c18b3d7dbce198a783) no-repeat 0 9999px;"
              >
                <i
                  style="background-position: 0 -977px;padding-right: 2px;padding-left: 28px;float: left;height: 31px;line-height: 30px;min-width: 23px;font-style: normal;text-align: left;background:url(https://s2.music.126.net/style/web2/img/button2.png?3df6a3e3dc24e5c18b3d7dbce198a783) no-repeat 0 9999px;"
                >
                  (
                  <span id="comment-count"></span>)
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="list-bottom">
      <div class="title">
        <h3>
          <span class="ff">歌曲列表</span>
        </h3>
        <span class="sub">
          <span></span>首歌
        </span>
        <div class="more">
          播放:
          <strong class="s-fc6"></strong>
          次
        </div>
      </div>
      <div class="song-list">
        <div>
          <div class="j-flag">
            <table class="m-table">
              <thead>
                <tr>
                  <th class="wp1"></th>
                  <th><div class="wp2">标题</div></th>
                  <th style="width:91px;"><div class="wp3">时长</div></th>
                  <th style="width:26%;"><div class="wp4">歌手</div></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item,index) in tableData" :key="item.id">
                  <td><div class="rank"><span class="num">{{index+1}}</span></div></td>
                  <td class="name">
                    <div class="f-cb">
                      <div class="tt">
                        <a href="javascript:;">
                          <img :src="item.al.picUrl" alt="" :title="item.name">
                        </a>
                        <span class="ply" @click="playMusic(item.id)">&nbsp;</span>
                        <div class="ttc">
                          <router-link :to="{name:'song',query:{p:item.id}}">{{item.name}}</router-link>
                          <span class="mv" @click="playMV(item.mv)" v-if="item.mv!=0">&nbsp;</span>
                        </div>
                        
                      </div>
                    </div>
                  </td>
                  <td>
                    <span class="u-dur">删除</span>
                  </td>
                  <td>
                    <div class="text">
                      {{item.ar[0].name}}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
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
        tableData:[],
        id:[],
        // 歌曲地址
      // musicUrl: "",
      //动画播放状态
      isPlaying: false,
    };
  },
  created() {
      console.log(1)
      console.log(this.$route.params.id)
      
      //获取歌单详情
      get('https://autumnfish.cn/playlist/detail?id='+this.$route.query.id).then(res=>{
          console.log(res.data.playlist.tracks);
          this.tableData=res.data.playlist.tracks
          this.id=res.data.playlist.trackIds
      });
      get('https://autumnfish.cn/song/detail?ids=1418602229').then(res=>{
          console.log(res.data)
      });
  },
  
  methods: {
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
    	playMV(mvid) {
					get('https://autumnfish.cn/mv/url?id='+mvid).then(res => {
							console.log(res.data.data.url);
							this.$store.state.mvShow=true
							this.$store.state.mvUrl=res.data.data.url
						}).catch(err => {
							console.log(err);
						})
					},
  },
};
</script>
<style scoped>
.list-top {
  padding: 40px;
}
.list .m-info {
}
.m-info .cover {
  float: left;
  position: relative;
  display: inline;
  margin: 0 -220px 0 0;
  padding: 3px;
  border: 1px solid #ccc;
  width: 150px;
  height: 150px;
}
.cover img {
  width: 150px;
  height: 150px;
  display: block;
}
.cover .msk {
  width: 150px;
  height: 150px;
  background-position: -230px -380px;
  top: 3px;
  left: 3px;
  position: absolute;
}
.m-info .cnt {
  float: right;
  width: 100%;
}
.cnt .cntc {
  margin-left: 187px;
}
.cntc .hd {
  margin: 16px 0 4px;
  position: relative;
  font-size: 20px;
  color: #333;
  line-height: 24px;
}
.cntc .user {
  margin: 0 0 20px;
  line-height: 35px;
}
.el-icon-time {
  float: left;
  margin: 9px 0 0 3px;
  width: 13px;
  height: 13px;
  background-position: -18px -682px;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
.btns {
  margin-bottom: 25px;
  margin-right: -10px;
}
.btns a:nth-of-type(1) i {
  padding: 0 7px 0 8px;
  color: #fff;
  background-position: 0 -387px;
  pointer-events: none;
  display: inline-block;
  background: url(https://s2.music.126.net/style/web2/img/button2.png?3df6a3e3dc24e5c18b3d7dbce198a783)
    no-repeat 0 9999px;
  height: 31px;
  line-height: 31px;
  overflow: hidden;
  font-style: normal;
  vertical-align: top;
  text-align: center;
  cursor: pointer;
}
.ply {
  float: left;
  width: 20px;
  height: 18px;
  margin: 6px 2px 2px 0;
  background-position: 0 -1622px;
  overflow: hidden;
  background: url(https://s2.music.126.net/style/web2/img/button2.png?3df6a3e3dc24e5c18b3d7dbce198a783)
    no-repeat 0 9999px;
  font-style: normal;
  text-align: left;
  font-size: inherit;
  color: #fff;
}
.m-table {
  width: 100%;
    border: 1px solid #d9d9d9;
        border-collapse: collapse;
    border-spacing: 0;
    table-layout: fixed;
    font-size: 12px;
}
.m-table a {
  text-decoration: none;
  color: #333;
}
.m-table th {
  height: 38px;
    background-color: #f7f7f7;
    background-position: 0 0;
    background-repeat: repeat-x;
    vertical-align: top;
    text-align: left;
    font-weight: normal;
    color: #666;
}
.wp1 {
  width: 77px;
}
.wp2,.wp3,.wp4 {
  height: 18px;
    line-height: 18px;
    padding: 8px 10px;
    background-position: 0 -56px;
    background: url(https://s2.music.126.net/style/web2/img/table.png?340a18cba63491e994a5cc1951b2fc3d) no-repeat 0 9999px;
}
.m-table td {
      background-color: #f7f7f7;
          padding: 6px 10px;
    line-height: 18px;
    text-align: left;
    background: url(https://s2.music.126.net/style/web2/img/table.png?340a18cba63491e994a5cc1951b2fc3d) no-repeat 0 9999px;
}
.rank {
  height: 18px;
}
.rank .num {
  float: left;
    width: 25px;
    margin-left: 0;
    text-align: center;
    color: #999;
}
.name {
      padding-top: 10px;
    padding-bottom: 10px;
}
.m-table .tt {
  float: left;
    width: 100%;
}
.m-table a {
  cursor: pointer;
}
.m-table img {
  float: left;
    width: 50px;
    height: 50px;
    margin-right: 14px;
}
.m-table .ply {
  position: relative;
  z-index: 980;
  margin-top: 17px;
  margin-right: 8px;
  float: left;
  width: 17px;
    height: 17px;
    cursor: pointer;
    background-position: 0 -103px;
    background: url(https://s2.music.126.net/style/web2/img/table.png?340a18cba63491e994a5cc1951b2fc3d) 0 243px;
}
.m-table .ttc {
  margin-top: 16px;
  height: 18px;
    margin-right: 20px;
    position: relative;
}
.ttc a {
  position: relative;
    display: inline-block;
    padding-right: 25px;
    margin-right: -25px;
    max-width: 67%;
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.ttc .mv {
  position: absolute;
    top: 0;
    right: 0;
    float: left;
    overflow: hidden;
    cursor: pointer;
        width: 23px;
    height: 17px;
    margin: 1px 0 0 0;
   
    background: url(https://s2.music.126.net/style/web2/img/table.png?340a18cba63491e994a5cc1951b2fc3d)  0 217px;
}
.m-table .u-dur {
  color: #666;
}
</style>
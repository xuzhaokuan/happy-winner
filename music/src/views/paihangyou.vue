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
            <el-table :data="tableData" stripe style="width: 100%">
              <el-table-column type="index" width="77"></el-table-column>
              <el-table-column prop="name" label="标题" width="372"></el-table-column>
              <el-table-column prop="address" label="时长" width="90"></el-table-column>
              <el-table-column prop="ar[0].name" label="歌手" width="173"></el-table-column>
            </el-table>
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
        id:[]
    };
  },
  created() {
      console.log(this.$route.params.id)
      get('https://autumnfish.cn/playlist/detail?id='+this.$route.params.id).then(res=>{
          console.log(res.data.playlist.trackIds);
          this.tableData=res.data.playlist.tracks
          this.id=res.data.playlist.trackIds
      });
      get('https://autumnfish.cn/song/detail',{
          params:{id:this.id}
      }).then(res=>{
          console.log(res.data)
      })
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
</style>
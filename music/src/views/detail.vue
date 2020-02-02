<template>
    <div class="detail">
        <div class="song">
            <div class="left">
                <div class="wrap">
                    <div class="m-lyc">
                        <div class="f-cb">
                            <div class="pic">
                                <img :src="detail.al.picUrl" alt="">
                                <span class="msk"></span>
                            </div>
                            <div class="out">
                                <i class="out-1"></i>
                                <el-button type="text" @click="open" style="padding:0;">生成外链播放器</el-button>
                            </div>
                        </div>
                        <div class="cnt">
                            <div class="hd">
                                <i class="lab"></i>
                                <div class="title">
                                    <em class="f-ff2">{{detail.name}}</em>
                                    <a href="javascript:;" title="播放MV" style="cursor: pointer;text-decoration: none;color: #333;"><i style="width: 21px;height: 18px;background-position: 0 -18px;display: inline-block;overflow: hidden;background:url('https://s2.music.126.net/style/web2/img/icon.png?92d1333936f403b7616b5ec6fdfbdac4') no-repeat 0 9999px;"></i></a>
                                </div>
                            </div>
                            <p class="desc">歌手:<span title="">{{detail.ar[0].name}}</span></p>
                            <p class="desc">所属专辑:<span title="">{{detail.alia}}</span></p>
                            <div class="m-info">
                                <el-button type="danger" icon="el-icon-video-play" circle></el-button>
                            </div>
                            <div class="lyric">
                                {{lyric}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                
            </div>
        </div>
    </div>
</template>
<script>
import {get} from '../utils/request'
import Lyirc from 'lyric-parser'
  export default {
      data() {
          return {
              detail:'',
              lyric:'',
              currentLyric: null  // 设置一个歌词维护属性
          }
      },
      created() {
          get('https://autumnfish.cn/song/detail?ids='+this.$route.query.p)
          .then(res=>{
              console.log(res.data.songs[0])
              this.detail=res.data.songs[0]
          });
          //获取歌词
          get('https://autumnfish.cn/lyric?id='+this.$route.query.p)
          .then(res=>{
              console.log(res.data)
            
              this.lyric=res.data.lrc.lyric
              
          })
      },
    methods: {
      open() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
    }
  }
</script>
<style scoped>
.detail {
    width: 709px;
    min-height: 700px;
    margin: 0 auto;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
    background: url('https://s2.music.126.net/style/web2/img/frame/wrap4.png?02fec3fa7a0e888c224cd94a7e70dfda') repeat-y center 0;
}

.song {
        float: left;
    width: 100%;
    margin-right: -270px;
}
.left {
    margin-right: 271px;
}
.wrap {
    /* padding: 47px 30px 40px 39px; */
    padding-top: 47px;
}
.m-lyc {
    margin-top: -10px;
    overflow: hidden;
    width: 709px
}
.f-cb {
  float: left;
    width: 206px;
    margin-right: -226px;
    position: relative;
    zoom: 1;
    font-size: 12px;
}
.pic {
      width: 198px;
    height: 198px;
    position: relative;
    display: block;
        float: left;
}
.pic img {
width: 130px;
    height: 130px;
    margin: 34px;
    display: block;
}
.pic .msk {
    width: 206px;
    height: 205px;
    top: -4px;
    left: -4px;
   
    position: absolute;
    background: url('https://s2.music.126.net/style/web2/img/coverall.png?d0e39cc72a4323ecb40e02f5d0a982db') no-repeat -144px -584px;
}
.f-cb .out {
    float: left;
    margin: 20px 0 0 46px;
    color: #666;
}
.f-cb .out .out-1 {
    width: 16px;
    height: 16px;
        display: inline-block;
    overflow: hidden;
    vertical-align: middle;
    background: url('https://s2.music.126.net/style/web2/img/icon.png?92d1333936f403b7616b5ec6fdfbdac4') no-repeat -34px -863px;
    float: left;
    font-style: normal;
    text-align: left;
    font-size: inherit;
}
.cnt {
        float: right;
    width: 414px;
}
.hd {
font-size: 12px;
}
.hd .lab {
    float: left;
        width: 54px;
    height: 24px;
    background-position: 0 -463px;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
    font-style: normal;
    text-align: left;
    font-size: inherit;
    background: url('https://s2.music.126.net/style/web2/img/icon.png?92d1333936f403b7616b5ec6fdfbdac4') no-repeat 0 -463px;
}
.hd .title {
    margin-left: 64px;
    position: relative;
    top: -6px;
    font-size: 24px;
}
.title .f-ff2 {
    margin-right: 7px;
    vertical-align: middle;
    font-style: normal;
    text-align: left;
    font-size: inherit;
}
.desc {
        margin: 10px 0;
        color: #999;
        font-size: 12px;
}
.desc span {
    color: #333
}
.m-info {
    margin-bottom: 25px;
    margin-right: -10px;
    height: 31px;
}
.lyric {
    
    margin-top: 13px;
    line-height: 23px;
    word-wrap: break-word;
    word-break: break-word;
    white-space: normal;
        display: inline-block;
}

</style>
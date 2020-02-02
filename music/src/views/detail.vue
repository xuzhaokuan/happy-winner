<template>
    <div class="detail">
        <div class="song">
            <div class="left">
                <div class="wrap">
                    <div class="m-lyc">
                        <div class="f-cb">
                            <div class="pic">
                                <img src="" alt="">
                                <span class="msk"></span>
                            </div>
                            <div class="out">
                                <i class="out-1"></i>
                                <el-button type="text" @click="open">生成外链播放器</el-button>
                            </div>
                        </div>
                        <div class="cnt">
                            <div class="hd">
                                <i class="lab"></i>
                                <div class="title">
                                    <em class="f-ff2"></em>
                                    <a href="javascript:;" title="播放MV" style="cursor: pointer;text-decoration: none;color: #333;"><i style="width: 21px;height: 18px;background-position: 0 -18px;display: inline-block;overflow: hidden;background:url('https://s2.music.126.net/style/web2/img/icon.png?92d1333936f403b7616b5ec6fdfbdac4') no-repeat 0 9999px;"></i></a>
                                </div>
                            </div>
                            <p class="desc">歌手:<span title=""></span></p>
                            <p class="desc">所属专辑:<span title=""></span></p>
                            <div class="m-info">
                                <el-button type="danger" icon="el-icon-delete" circle></el-button>
                            </div>
                            <div class="lyric">

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
  export default {
      data() {
          return {
              
          }
      },
      created() {
          get('https://autumnfish.cn/song/detail?ids='+this.$route.query.p)
          .then(res=>{
              console.log(res.data)
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
    width: 980px;
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
    padding: 47px 30px 40px 39px;
}
.m-lyc {
    margin-top: -10px;
}
.f-cb {
  float: left;
    width: 206px;
    margin-right: -226px;
    position: relative;
    zoom: 1;
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
    background-position: -140px -580px;
    position: absolute;
    background: url('https://s2.music.126.net/style/web2/img/coverall.png?d0e39cc72a4323ecb40e02f5d0a982db') no-repeat;
}
.f-cb .out {
    float: left;
    margin: 20px 0 0 46px;
    color: #666;
}
.f-cb .out .out-1 {
    width: 16px;
    height: 16px;
    background-position: -34px -863px;
        display: inline-block;
    overflow: hidden;
    vertical-align: middle;
    background: url('https://s2.music.126.net/style/web2/img/icon.png?92d1333936f403b7616b5ec6fdfbdac4') no-repeat 0 9999px;
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
    height: auto;
    margin-top: 13px;
    line-height: 23px;
    word-wrap: break-word;
    word-break: break-word;
    white-space: normal;
        display: inline-block;
}

</style>
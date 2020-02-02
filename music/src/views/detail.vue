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
                                <i></i>
                                <el-button type="text" @click="open">点击打开 Message Box</el-button>
                            </div>
                        </div>
                        <div class="cnt">
                            <div class="hd">
                                <i class="lab"></i>
                                <div class="title">
                                    <em class="f-ff2"></em>
                                    <a href="javascript:;" title="播放MV"><i></i></a>
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
    
</style>
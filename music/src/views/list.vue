<template>
  <div class="mymusic">
    <div class="n-pglg" v-if="show">
      <div class="pic">
        <h2>登录网易云音乐</h2>
        <a href="javascript:;" class="btn">立即登录</a>
      </div>
    </div>
    <div class="music">
      <div class="left">
        <div class="lf-list">
          <div class="create-list">
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="创建的歌单" name="1">
                  <input type="text" v-model="name" ><el-button size="mini" round @click="addlist">新建歌单</el-button>
                <ul class="j-flag">
                  <li
                    v-for="item in toplist"
                    :key="item.id"
                    v-show="item.creator.nickname==user.profile.nickname"
                  >
                    <div class="f-cb">
                      <div class="lf">
                        <a href="javascript:;" class="avatar">
                          <img :src="item.coverImgUrl" alt />
                        </a>
                      </div>
                      <p class="s-fc">
                       <router-link :to="{name:'mylistright',query:{id:item.id}}" @click.native="add">{{item.name}}</router-link>
                      </p>
                      <p class="num">{{item.trackCount}}首</p>
                    </div>
                  </li>
                </ul>
              </el-collapse-item>
              <el-collapse-item title="喜欢的歌单" name="2">
                <ul class="j-flag">
                  <li
                    v-for="item in toplist"
                    :key="item.id"
                    v-show="item.creator.nickname!==user.profile.nickname"
                  >
                    <div class="f-cb">
                      <div class="lf">
                        <a href="javascript:;" class="avatar">
                          <img :src="item.coverImgUrl" alt />
                        </a>
                      </div>
                      <p class="s-fc">
                        <router-link :to="{name:'mylistright',query:{id:item.id}}" @click.native="add">{{item.name}}</router-link>
                      </p>
                      <p class="num">{{item.trackCount}}首&nbsp;by</p>
                    </div>
                  </li>
                </ul>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
      </div>
      <div class="right">
        <router-view v-if="sh"></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import { get,post } from "../utils/request";
export default {
  data() {
    return {
      activeNames: ["1"],
      show: true,
      user: {},
      toplist: [],
      bottomlist: [],
      sh:true,
      name:''
    };
  },
  created() {
    console.log(localStorage.getItem("id"));
    if (localStorage.getItem("id")) {
      this.show = false;
    }
  },
  mounted() {
    //获取用户详情
    get(
      "https://autumnfish.cn/user/detail?uid=" + localStorage.getItem("id")
    ).then(res => {
      console.log(res.data);
      this.user = res.data;
    });
    //获取用户歌单
    get(
      "https://autumnfish.cn/user/playlist?uid=" + localStorage.getItem("id")
    ).then(res => {
      console.log(res.data);
      this.toplist = res.data.playlist;
    });
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
   reload () {
     this.sh = false
     this.$nextTick(() => (this.sh = true))
   },
   add(){
       this.reload()
   },
   addlist(){
       get('https://autumnfish.cn/playlist/create?name='+this.name,{
           withCredentials: true
       })
       .then(res=>{
           console.log(res.data)
       })
   }
  },
  
};
</script>
<style scoped>
.mymusic {
  height: 100%;
  overflow: hidden;
  width: 982px;
  margin: 0 auto;
}
.music {
    overflow: hidden;
}
.n-pglg {
  width: 807px;
  height: 268px;
  margin: 0 auto 0;
  padding-top: 104px;
  background-position: 0 104px;
  background: url(https://s2.music.126.net/style/web2/img/mymusic.png?6034ead31cad59800410196a9ae34712)
    no-repeat 0 104px;
}
.pic h2 {
  height: 100px;
  text-indent: -9999px;
  font-size: 100%;
}
.btn {
  cursor: pointer;
  display: block;
  width: 167px;
  height: 45px;
  margin: 102px 0 0 482px;
  background-position: 0 9999px;
  text-indent: -9999px;
  background: url(https://s2.music.126.net/style/web2/img/mymusic.png?6034ead31cad59800410196a9ae34712)
    no-repeat 0 9999px;
}
.left {
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 50px;
  padding-top: 40px;
  float: left;
  width: 240px;
}
.left .lf-list {
  font-size: 12px;
  color: #333;
}
.creeate-list {
  margin-top: 5px;
}
.j-flag li {
  background: #e6e6e6;
  cursor: pointer;
  position: relative;
  zoom: 1;
  height: 42px;
  padding: 6px 0 6px 20px;
  font-size: 12px;
  color: #333;
}
.j-flag .f-cb {
  padding-left: 50px;
}
.f-cb .lf {
  display: inline;
  float: left;
  margin-left: -50px;
  overflow: hidden;
  width: 40px;
}
.avatar {
  display: block;
  position: relative;
  width: 40px;
  height: 40px;
}
.avatar img {
  width: 40px;
  height: 40px;
}
.s-fc {
  width: 150px;
  overflow: hidden;
  margin-top: 2px;
  margin-bottom: 8px;
  line-height: 1;
}
.s-fc a {
  white-space: nowrap;
}
.num {
  width: 130px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.right {
  height: 100%;
  float: right;
  width: 720px;
  padding-bottom: 50px;
}
</style>
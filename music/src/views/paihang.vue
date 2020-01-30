<template>
    <div class="toplist">
        <div class="left-list">
            <div class="top">
                <h2>云音乐特色榜</h2>
                <ul>
                    <li >
                        <div class="it">
                            <div class="fl">
                                <a href="javascript:;">
                                    <img :src="this.bs.coverImgUrl" alt="">
                                    <span class="msk"></span>
                                </a>
                            </div>
                            <p class="name"><a href="#" style="white-space: nowrap;">{{this.bs.name}}</a></p>
                            <p class="updata">每天更新</p>
                        </div>
                    </li>
                     <li >
                        <div class="it">
                            <div class="fl">
                                <a href="javascript:;">
                                    <img :src="this.new.coverImgUrl" alt="">
                                    <span class="msk"></span>
                                </a>
                            </div>
                            <p class="name"><a href="#" style="white-space: nowrap;">{{this.new.name}}</a></p>
                            <p class="updata">每天更新</p>
                        </div>
                    </li>
                     <li >
                        <div class="it">
                            <div class="fl">
                                <a href="javascript:;">
                                    <img :src="this.yc.coverImgUrl" alt="">
                                    <span class="msk"></span>
                                </a>
                            </div>
                            <p class="name"><a href="#" style="white-space: nowrap;">{{this.yc.name}}</a></p>
                            <p class="updata">每周四更新</p>
                        </div>
                    </li>
                     <li >
                        <div class="it">
                            <div class="fl">
                                <a href="javascript:;">
                                    <img :src="this.hot.coverImgUrl" alt="">
                                    <span class="msk"></span>
                                </a>
                            </div>
                            <p class="name"><a href="#" style="white-space: nowrap;">{{this.hot.name}}</a></p>
                            <p class="updata">刚刚更新</p>
                        </div>
                    </li>
                </ul>
                <h2>全球媒体榜</h2>
                <ul>
                    <li v-for="item in all.slice(4)" :key="item.id">
                        <div class="it">
                            <div class="fl">
                                <a href="javascript:;">
                                    <img :src="item.coverImgUrl" alt="">
                                    <span class="msk"></span>
                                </a>
                            </div>
                            <p class="name"><a href="#" style="white-space: nowrap;">{{item.name}}</a></p>
                            <p class="updata">{{item.updateFrequency}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="right-list">

        </div>
    </div>
</template>
<script>
import {get} from '../utils/request'
export default {
    data(){
        return{
            bs:[],
            new:[],
            yc:[],
            hot:[],
            all:[]
        }
    },
    created() {
        //云音乐飙升榜
        get('https://autumnfish.cn/top/list?idx=3').then(res=>{
            // console.log(res.data.playlist)
            this.bs=res.data.playlist
        });
        //云音乐新歌榜
        get('https://autumnfish.cn/top/list?idx=0').then(res=>{
            // console.log(res.data.playlist)
            this.new=res.data.playlist
        });
        //网易原创歌曲榜
        get('https://autumnfish.cn/top/list?idx=2').then(res=>{
            // console.log(res.data.playlist)
            this.yc=res.data.playlist
        });
        //云音乐热歌榜
         get('https://autumnfish.cn/top/list?idx=1').then(res=>{
            // console.log(res.data.playlist)
            this.hot=res.data.playlist
        });
        //总榜
        get('https://autumnfish.cn/toplist').then(res=>{
            console.log(res.data.list)
            this.all=res.data.list
        })
    },
}
</script>
<style scoped>
.toplist {
    min-height: 700px;
    width: 980px;
    margin: 0 auto;
    border-right: 1px #000 solid;
    border-left:1px #000 solid; 
    overflow: hidden;
}
.left-list {
    position: static;
    float: left;
    width: 240px;
    border-right: 1px #000 solid;
}
.left-list .top {
    margin-top: 40px;
}
.left-list .top h2 {
    padding: 0 10px 12px 15px;
    font-size: 14px;
    color: #000;
}
.top ul {
    cursor: pointer;
    vertical-align: middle;
}
.top ul li {
    padding: 10px 0 10px 20px;
    position: relative;
    zoom: 1;
    height: 42px;
}
.top ul li .it {
    padding-left: 50px;
}
.top ul li .it .fl {
        display: inline;
    float: left;
    margin-left: -50px;
    overflow: hidden;
    width: 40px;
}
.fl a {
    display: block;
    position: relative;
    width: 40px;
    height: 40px;
}
.fl a img {
    width: 40px;
    height: 40px;
}
.fl a .msk {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-position: -310px -330px;
}
.top ul li .name {
    width: 150px;
    overflow: hidden;
    margin-top: 2px;
    margin-bottom: 8px;
    font-size: 12px;
}
.updata {
    font-size: 12px;
    color: #999;
}
.right-list {
    height: 100%;
    float: right;
    width: 740px;
    padding-bottom: 50px;
}
</style>
    

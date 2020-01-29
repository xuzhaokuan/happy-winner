<template>
    <div class="toplist">
        <div class="left-list">
            <div class="top">
                <h2>云音乐特色榜</h2>
                <ul>
                    
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
            lflist:[],
            
        }
    },
    created() {
        
    },
}
</script>
<style scoped>
.toplist {
    min-height: 700px;
}
.left {
    position: static;
    float: left;
    width: 240px;
    border-right: 1px #000 solid;
}
.right {
    height: 100%;
    float: right;
    width: 740px;
    padding-bottom: 50px;
}
</style>
    

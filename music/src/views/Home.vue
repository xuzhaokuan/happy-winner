<template>
  <div class="home">
    <div class="banner" style="overflow:hidden;">
      <div class="banner-1" ref="t">
        <div class="banner-2">
          <div class="block" style="float:left;">
            <el-carousel>
              <el-carousel-item v-for="(item,index) in banner" :key="index">
                <h3 class="small">
                  <img :src="item" alt />
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
            </div>
            <div class="tab">
              <a href="#">华语</a><span>|</span>
              <a href="#">流行</a><span>|</span>
              <a href="#">摇滚</a><span>|</span>
              <a href="#"></a><span>|</span>
              <a href="#"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      banner: [
        "https://p1.music.126.net/nENHcoOyowsSYiWCMIBWlg==/109951164649869118.jpg?imageView&quality=89",
        "https://p1.music.126.net/9sgXq0JKUCSBxfA93EO6ZA==/109951164649878309.jpg?imageView&quality=89",
        "https://p1.music.126.net/hQG2HarBdz7SYsZ3VwHlUw==/109951164649877871.jpg?imageView&quality=89",
        "https://p1.music.126.net/y11AaLYvVNTRpGpaox2uLQ==/109951164649852297.jpg?imageView&quality=89",
        "https://p1.music.126.net/lDAWIbdq3SAnn_299rDUfw==/109951164649859666.jpg?imageView&quality=89",
        "https://p1.music.126.net/zw_NCEk9LrvZ9cvlXG_nSg==/109951164649755699.jpg?imageView&quality=89",
        "https://p1.music.126.net/OoQ3BD7FlexsY1yXvFBiTw==/109951164649861766.jpg?imageView&quality=89",
        "https://p1.music.126.net/nENHcoOyowsSYiWCMIBWlg==/109951164649869118.jpg?imageView&quality=89"
      ],
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
      ]
    };
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
}
.tj {
  height: 33px;
  padding: 0 10px 0 34px;
  background-position: -225px -156px;
  border-bottom: 2px solid #c10d0c;
}
.tj a {
  float: left;
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;
}
</style>
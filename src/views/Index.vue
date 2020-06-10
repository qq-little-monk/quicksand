<template>
  <div class="index">
    <van-search
      name="search"
      v-model="searchValue"
      shape="round"
      placeholder="请输入搜索关键词"
    ></van-search>
    <van-swipe height="3.92rem" class="my-swipe" :autoplay="3000" indicatorColor="white" width="100%"  @change="bannerImgChange" :showIndicators="showIndicators">
      <van-swipe-item v-for="(item,index) in bannerImg" :key="index">
        <img :src="item" :alt="index+1"/>
      </van-swipe-item>
    </van-swipe>
    <div class="spanbox">
      <i v-for="(item,index) in bannerImg.length" :key="index" :title="index" :id="[ current == index ? 'iActive' : '' ]"></i>
    </div>
    <div>
      <h2>项目分类</h2>
      <van-grid :column-num="3">
        <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字">
          <img src="" alt="">
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Index',
  data(){
    return {
      bannerImg:[
        require("../assets/banner1.png"),
        require("../assets/banner1.png"),
        require("../assets/banner1.png"),
        require("../assets/banner1.png"),
      ],
      showIndicators: false,
      current: 0,
      searchValue: '312132456',
    }
  },
  methods:{
    bannerImgChange(index){
      console.log(index);
      this.current = index;
    }
  },
  components: {
    
  }
}
</script>

<style>
body{
  background-color: #f0f2f5;
}
.van-swipe{
  height: 3.92rem;
}
.banner{
  width: 100%;
  height: 3.92rem;
}
.my-swipe .van-swipe-item img{
  width: 100%;
  height: 100%;
  background-repeat: no;
}

.my-swipe .van-swipe-item{
  width:"100%";
  height:"3.92rem";
}
.spanbox {
  font-size: 0;
  height: 10px;
  line-height: 15px;
}
.spanbox i{
  display: inline-block;
  width: 0.41rem;
  height: 0.06rem;
  background-color: #C9C9C9;
  margin: 0px 2px;
}

#iActive{
  background-color: #0C60FE;
}

.van-search{
  position: fixed;
  width: 6.65rem;
  height: 0.6rem;
  top: 0.77rem;
  z-index: 22;
  background-color:transparent;
  margin: 0px 0.4rem;
}

</style>

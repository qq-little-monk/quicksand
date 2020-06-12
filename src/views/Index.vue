<template>
  <div class="index">
    <div class="indexHeader">
      <input placeholder="请输入搜索关键词"/>
      <van-swipe height="3.92rem" class="my-swipe" :autoplay="3000" indicatorColor="white" width="100%"  @change="bannerImgChange" :showIndicators="showIndicators">
        <van-swipe-item v-for="(item,index) in bannerImg" :key="index">
          <img :src="item" :alt="index+1"/>
        </van-swipe-item>
      </van-swipe>
      <div class="spanbox">
        <i v-for="(item,index) in bannerImg.length" :key="index" :title="index" :id="[ current == index ? 'iActive' : '' ]"></i>
      </div>
    </div>
    <div>
      <h2 class="projectBox">项目分类</h2>
      <van-grid :column-num="3" :gutter="10">
        <van-grid-item v-for="value in projectImg" :key="value" icon="photo-o" text="文字" class="projectitems">
          <img :src="value" alt=""/>
        </van-grid-item>
      </van-grid>
    </div>
    <div>
      <h2 class="projectNews">最新项目</h2>
        <ul>
          <li class="newsList" v-for="(item,index) in projectNewList" :key="index">
            <div class="newsListTitle">
              <p>{{item.title}}</p>
              <span>预算：&yen;<i>{{item.price}}</i></span>
            </div>
            <p class="newsListContent">{{item.content}}</p>
            <div class="newsListTags">
              <div class="tagBox">
                <i v-for="(t,i) in item.tags" :key="i">{{t}}</i>
              </div>
              <span><i>{{item.fans}}</i>浏览</span>
            </div>
          </li>
        </ul>
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
      projectImg:[
        require('../assets/projectImg1.png'),
        require('../assets/projectImg2.png'),
        require('../assets/projectImg3.png'),
        require('../assets/projectImg4.png'),
        require('../assets/projectImg5.png'),
        require('../assets/projectImg6.png'),
      ],
      projectNewList:[
        {
          title:'App界面设计/UI设计',
          price: '2000~5000',
          content: '根据品牌风格做出相应设计，修改至你满意为止',
          tags: ['UI设计','移动端设计','APP设计'],
          fans: 222
        },
        {
          title:'App界面设计/UI设计',
          price: '2000~5000',
          content: '根据品牌风格做出相应设计，修改至你满意为止',
          tags: ['UI设计','移动端设计','APP设计'],
          fans: 222
        },
        {
          title:'App界面设计/UI设计',
          price: '2000~5000',
          content: '根据品牌风格做出相应设计，修改至你满意为止',
          tags: ['UI设计','移动端设计','APP设计'],
          fans: 222
        },
        {
          title:'App界面设计/UI设计',
          price: '2000~5000',
          content: '根据品牌风格做出相应设计，修改至你满意为止',
          tags: ['UI设计','移动端设计','APP设计'],
          fans: 222
        }
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

<style scoped>
html,body,div,p{
  margin: 0;
  padding: 0;
}
i{
  font-style: normal;
}
li,ol{
  list-style: none;
}
body{
  background-color: #f0f2f5;
}
.indexHeader{
  position: relative;
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

.indexHeader input{
  position: absolute;
  width: 6.65rem;
  height: 0.6rem;
  top: 0.77rem;
  left: 0.4rem;
  z-index: 22;
  background-color: #6da7f2;
  color: #fcfcfc;
  font-size: 0.28rem;
  padding-left: 0.87rem;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  background-image: url('../assets/search.svg');
  background-repeat: no-repeat;
  background-position: 0.34rem center;
  background-size: 0.34rem;
}
.projectBox,.projectNews{
  font-size: 0.3rem;
  text-align: left;
  padding-left: 0.64rem;
  margin-bottom: 0.15rem;
  background-image: url('../assets/project1.png');
  background-repeat: no-repeat;
  background-position-x: 0.22rem;
  background-position-y: center;
  background-size: 0.06rem 0.34rem;
}
.projectitems{
  width: 2.06rem;
  height: 1.25rem;
  border-radius: 10px;
}
.projectitems >>> .van-grid-item__content { 
  padding: 0;
}

.projectitems img{
  width: 100%;
  height: 100%;
  background-repeat: no;
}

.newsList{
  width: 6.63rem;
  height: 2.09rem;
  margin: 0px 0.38rem;
  padding: 0.25rem 0.16rem 0.3rem 0.19rem;
  font-size: 0;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 0.25rem;
}
.newsListTitle{
  height: 0.62rem;
}
.newsListTitle p{
  font-size: 0.28rem;
  color: #121212;
  font-weight: 700;
  float: left;
}

.newsListTitle span{
  font-size: 0.22rem;
  color: #f36501;
  float: right;
}
.newsListTitle span i{
  font-style: normal;
}
.newsListContent{
  color: #b8b8b8;
  font-size: 0.22rem;
  text-align: left;
  margin-bottom: 0.3rem;
}
.newsListTags{
  text-align: left;
}
.newsListTags .tagBox{
  text-align: left;
  display: inline-block;
}
.newsListTags .tagBox i{
  font-style: normal; 
  font-weight: 700;
  font-style: none;
  margin-right: 0.19rem;
  color: #848484;
  background-color: #e0e0e0;
  font-size: 0.18rem;
  padding: 0.05rem 0.18rem;
  border-radius: 5px;
}
.newsListTags span{
  font-weight: 700;
  float: right;
  font-size: 0.18rem;
  color: #848484;
}
.newsListTags span i{
  font-style: normal; 
}
</style>

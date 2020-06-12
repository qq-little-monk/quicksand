<template>
  <div id="app">
    <router-view/>
    <!-- <van-tabbar route class="tabbar" active-color="#2F9BFE">
      <van-tabbar-item replace to="/" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/projectHall" icon="search">任务</van-tabbar-item>
      <van-tabbar-item replace to="/release" icon="home-o">发布</van-tabbar-item>
      <van-tabbar-item replace to="/message" icon="chat-o">消息</van-tabbar-item>
      <van-tabbar-item replace to="/personal" icon="home-o">我的</van-tabbar-item>
    </van-tabbar> --> 	
  <Tabbar tabbar v-if="$route.meta.showTab" />
  </div>
</template>
<script>
import Tabbar from '../src/components/Tabbar';
export default {
  components:{
    Tabbar
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .tabbar{
    width: 100%;
    height: 1.44rem;
    background-image: url('/assets/tabBg.png');
    background-size: 100%;
  }
  .van-tabbar-item__icon{
    font-size: 24px;
    font-weight: 700;
  }
  .van-tabbar-item__text{
    font-size: 12px;
    font-weight: 700;
  }
}
</style>

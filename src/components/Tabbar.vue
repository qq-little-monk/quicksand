<template>
    <div class="tab">
        <div class="tab_item" v-for="(item ,index) in tabBarImg" :key="index" @click="switchToTab(item.path)">
            <img :src="$route.path === item.path ? item.icon : item.normal" alt="">
            <span :class="$route.path === item.path ? 'active' : ''">{{item.title}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: "Tabbar",
    data(){
      return{
        tabBarImg:[
          {
            path:'/home',
            // normal:require('./../assets/img/tab_guamai_nor_icon-xhdpi.png'),
            // icon:require('./../assets/img/tab_guamai_sel_icon-xhdpi.png'),
            title:'娱乐咨询'
          },
          {
            path:'/chat',
            // normal:require('./../assets/img/tab_hangqing_nor_icon-xhdpi.png'),
            // icon:require('./../assets/img/tab_hangqing_sel-xhdpi.png'),
            title:'聊天'
          },
          {
            path:'/me',
            // normal:require('./../assets/img/tab_wode_nor_icon-xhdpi.png'),
            // icon:require('./../assets/img/tab_wode_sel_icon-xhdpi.png'),
            title:'我的'
          },
        ]
      }
    },
    methods:{
      switchToTab(path){
        console.log(path);
        this.$router.replace(path);
      }
    }
}
</script>
<style>

</style>
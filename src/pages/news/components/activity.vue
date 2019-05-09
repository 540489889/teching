<template>
  <div class="fruitsWrapper">
    <div class="fruits-list-2 meWrapper">
      <router-link tag="h2" :to="'/news/activeList?page='+1+'$title='" class="titleBox flex-box">
        <span class="left-ico flex-box">
          <!--<i class="ds-ico"></i>-->
          活动动态</span>
        <span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>
      </router-link>
      <div class="scroll-list-wrap" style="padding-bottom:10px;">
        <cube-scroll
          ref="scroll"
          :data="activeList"
          direction="horizontal"
          :options="options">
          <ul class="list-wrapper">
            <router-link tag="li"  :to="'/news/activeDetails?id='+item.id" :key="item.id" v-for="item in activeList" class="list-item">
              <div class="flex-box">
                <div class="imgBox"><img :src="$store.state.IMGPATH+item.cover_img"  alt=""></div>
                <div class="box-1">
                  <h3 class="media_desc">{{item.title}}</h3>
                </div>
              </div>
            </router-link>
          </ul>
        </cube-scroll>
      </div>
      <div class="advertImg">
        <img src="./../../../assets/ico/news-b-2.png" alt="">
      </div>
      <!--<div class="scroll-list-wrap" style="padding-bottom:10px;padding-top:10px;border-top:1px solid #eee;">-->
      <!--<cube-scroll-->
      <!--ref="scroll"-->
      <!--:data="items"-->
      <!--direction="horizontal"-->
      <!--:options="options">-->
      <!--<ul class="list-wrapper">-->
      <!--<li v-for="item in items" class="list-item">-->
      <!--<div class="flex-box">-->
      <!--<div class="imgBox"><img src="./../../../assets/img/th-b-1.png" alt=""></div>-->
      <!--<div class="box-1">-->
      <!--<h3 class="media_desc">我市在第十五届全国中小-->
      <!--学校园影视评选活动中...我市在第十五届全国中小-->
      <!--学校园影视评选活动中...</h3>-->
      <!--</div>-->
      <!--</div>-->
      <!--</li>-->
      <!--</ul>-->
      <!--</cube-scroll>-->
      <!--</div>-->
    </div>
  </div>
</template>
<script>
//  import './../../../assets/style/cubeNews.css'
//  import './../../../assets/style/cubeRest.css'
  export default {
    name: 'listFruits',
    data (){
      return {
        items: [1],
        direction: "horizontal",
        options: {
//          scrollbar: {
//            fade: false
//          }
        },
        scrollX: true,
        scrollY: false,
      }
    },
    props: {
      activeList: Array
    },
    methods: {
    },
    mounted(){
      console.log(this.activeList)
    }
  }
</script>
<style lang="less" scoped>
  .fruitsWrapper{
    overflow: hidden;
    .meWrapper .scroll-list-wrap .list-wrapper li h3{
      font-size:30px;
    }
    .advertImg{
      img{
        width:100%;
      }
    }
    .fruits-list-2{
      margin-top:20px;
      background-color:white;
      padding-top:10px;
      .titleBox{
        .left-ico i{
          width:40px;
          height:45px;
          background:url(../../../assets/ico/suog-ico-2.png) no-repeat center;
          background-size:100%;
        }
      }
    }
  }
</style>

<template>
  <div class="indexWrapper recommend-content">
    <loading-bar v-show="isLoading"></loading-bar>
    <div class="spImg" v-if="map">
      <!--<img src="./../../assets/img/infm-b-1.png" alt="">-->
      <map-bar :maps="map"></map-bar>
    </div>
    <advert-swiper :list="noticeList" :path="advertPath"></advert-swiper>
    <activity :activeList="activeList"></activity>
    <fruit :noticeList="advertList"></fruit>
  </div>
</template>

<script>
//  import cubePage from './../components/cube-page.vue'
//  import './../../assets/stylus/cubeList.styl'
  import advertSwiper from '../components/advertSwiper.vue'
  import loadingBar from '../components/loading.vue'
  import activity from './components/activity.vue'
  import fruit from './components/fruit.vue'
  import './../../assets/style/cubeNews.css'
  import mapBar from './components/mapBar.vue'
//  import { findIndex } from '../../assets/js/util'
//  import { FOLLOWERS_DATA, RECOMMEND_DATA, HOT_DATA } from '../../assets/js/tab-bar'
  //  import readCommunity from './../components/readCommunity.vue'
  export default {
    name: 'NewsIndex',
    data () {
      return {
        advertPath:'/news/advertDetails',
        view: 'newActive',
        videoD: "1",
        bannerList: [],
        advertList: [], //广告轮播
        activeList: [], //活动动态
        map: [], //地图
        noticeList: [],// 成果展示
        isLoading: true,
        showSearchBtn:false,
        searchVal: '',
        type: 1,
      }
    },
    components:{
      advertSwiper,
      loadingBar,
      mapBar,
      activity,
      fruit
    },
    created (){
      setTimeout(() => {
        this.isLoading = false
      }, 500)
    },
    methods: {
      maxMap(){
        alert(555)
      },
      getNewBanner (){
        this.http.get(this.ports.newsX.newBanner, res =>{
          console.log(res)
          if(res.status==200){
            let data = res.data
            this.advertList = data.achievements
            this.activeList = data.active
            this.map = data.map
            this.noticeList = data.notice
          }
        })
      },
      clickHandler (label) {
        // if you clicked home tab, then print 'Home'
        console.log(label)
        this.$refs.tabbar.setSliderTransform(50)
        if(label=='活动动态'){
          this.view = 'newActive'
          this.type = 1
        }
        if(label == '通知公告'){
          this.view = 'newNotice'
          this.type = 2
        }
        if(label=='视频'){
          this.view = 'newVideo'
          this.type = 3
        }
        this.getNewBanner()
      },
      changeHandler (label) {
        // if you clicked different tab, this methods can be emitted
      },
      setWidth() {
        this.$refs.tabbar.setSliderTransform(50)
      },
    },
    mounted(){
      this.getNewBanner()
//      console.log(this.$refs.tabbar)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .3s ease;
  }
  .component-fade-enter, .component-fade-leave-to
    /* .component-fade-leave-active for below version 2.1.8 */ {
    opacity: 0;
  }
  .cube-tab{
    flex: initial;
  }
  .indexWrapper{
    background-color:#f5f5f5;
    font-size:24px;
    .communtyBar{
      background-color:white;
      padding:30px 20px;
    }
    .themeObj{
      background-color:white;
      margin:20px auto;
      h2{
        justify-content: space-between;
        padding:20px;
        font-size:32px;
        .left-ico{
          i{
            width:28px;
            height:25px;
            background:url(../../assets/ico/title-ico-l-1.png) no-repeat center;
            background-size:100%;
            margin-right:10px;
          }
        }
        .right-text{
          color:#bbbbbb;
          font-size:24px;
        }
      }
      .thomeContent{
        ul{
          flex-wrap: wrap;
          padding-bottom:10px;
          li{
            width:20%;
            padding:10px 20px;
            box-sizing: border-box;
            text-align: center;
            .textBox{
              overflow: hidden;
              img{
                width:100%;
              }
              h4{
                line-height:1.4;
                color:#666666;
              }
            }
          }
        }
      }
    }
  }
</style>

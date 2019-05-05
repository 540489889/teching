<template>
  <div class="indexWrapper recommend-content">
    <loading-bar v-show="isLoading"></loading-bar>
    <search-bar :showSearchBtn="showSearchBtn"></search-bar>
    <index-swiper :list="bannerList"></index-swiper>
    <div class="communtyBar">
      <cube-tab-bar
        ref="tabbar"
        v-model="selectedLabelDefault"
        :data="tabs"
        @click="clickHandler"
        @change="changeHandler">
      </cube-tab-bar>
    </div>
    <transition name="component-fade" mode="out-in">
      <component
        :is="view"
        :list="activeData"
        :videoD="videoD"
        :live="live"
      ></component>
    </transition>
  </div>
</template>

<script>
//  import cubePage from './../components/cube-page.vue'
//  import './../../assets/stylus/cubeList.styl'
  import searchBar from '../components/searchBar.vue'
  import indexSwiper from '../components/indexSwiper.vue'
  import newVideo from './components/video.vue'
  import newActive from './components/active.vue'
  import newNotice from './components/notice.vue'
  import loadingBar from '../components/loading.vue'
  import './../../assets/style/cubeNews.css'

//  import { findIndex } from '../../assets/js/util'
//  import { FOLLOWERS_DATA, RECOMMEND_DATA, HOT_DATA } from '../../assets/js/tab-bar'
  //  import readCommunity from './../components/readCommunity.vue'
  export default {
    name: 'NewsIndex',
    data () {
      return {
        view: 'newActive',
        videoD: "1",
        bannerList: [],
        isLoading: true,
        showSearchBtn:false,
        searchVal: '',
        selectedLabelDefault: '活动动态',
        showSlider:false,
        tabs: [{
          label: '活动动态',
        }, {
          label: '通知公告',
        }, {
          label: '视频',
        }],
        type: 1,
        activeData: [],
        live: {},
        active1: [],
        active2: [],
        active3: []
      }
    },
    components:{
      searchBar,
      indexSwiper,
      newVideo,
      newActive,
      newNotice,
      loadingBar
    },
    methods: {
      getNewBanner (){
        this.http.get(this.ports.news.newBanner+'?type='+this.type, res =>{
          setTimeout(() => {
            this.isLoading = false
          }, 1000)
          console.log(res)
          if(res.status==200){
            let data = res.data
            this.bannerList = data.bannews
            this.activeData = data.data
            if(data.live){
              this.live = data.live
            }
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

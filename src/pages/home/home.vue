<template>
  <div class="homeWrapper recommend-content">
    <loading v-if="isLoading"></loading>
    <!--<search-bar></search-bar>-->
    <div class="swiperBox">
      <index-swiper :list="bannerList"></index-swiper>
    </div>
    <advert-swiper :list="recomdList" :path="advertPath"></advert-swiper>
    <home-list></home-list>
    <!--<nav-bar :selectedNavTitle="selectedNavTitle"></nav-bar>-->
  </div>
</template>

<script>
  import navBar from './../components/navBar.vue'
  import homeList from './components/homeList.vue'
  import searchBar from '../components/searchBar.vue'
  import indexSwiper from '../components/indexSwiper.vue'
  import advertSwiper from '../components/advertSwiper.vue'
  import loading from '../components/loading.vue'
//  import
  export default {
    name: 'Home',
    data () {
      return {
        isLoading: true,
        searchVal: '',
        selectedNavTitle: '首页',
        bannerList: [],//轮播图
        recomdList: [],//广告轮播
        advertPath:'/home/advertDetails',
      }
    },
    components:{
      searchBar,
      indexSwiper,
      advertSwiper,
      homeList,
      navBar,
      loading
    },
    created (){
      setTimeout(() => {
        this.isLoading = false
      }, 500)
    },
    methods: {
      getIndexData(){
        this.http.get(this.ports.home.index, res =>{
          if(res.status==200){
            let data = res.data
            this.bannerList = data.banner
            this.recomdList = data.recomd
          }
        })
      }
    },
    mounted(){
      this.getIndexData()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .homeWrapper{
    background-color:#f5f5f5;
    font-size:24px;
    .swiperBox{
      padding-top:30px;
      background-color:white;
    }
  }
</style>

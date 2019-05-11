<template>
  <div class="homeWrapper recommend-content">

    <search-bar></search-bar>
    <index-swiper :list="bannerList"></index-swiper>
    <advert-swiper :list="recomdList"></advert-swiper>
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
  import loadingBar from '../components/loading.vue'
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
      }
    },
    components:{
      searchBar,
      indexSwiper,
      advertSwiper,
      homeList,
      navBar,
      loadingBar
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
  }
</style>

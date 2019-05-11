<template>
  <div class="indexWrapper recommend-content">

    <div class="">
      <search-bar :showSearchBtn="showSearchBtn" :showSearchVal="showSearchVal"></search-bar>
      <index-swiper></index-swiper>
      <div class="communtyBar">
        <cube-tab-bar
          ref="tabbar"
          v-model="selectedLabelDefault"
          :data="tabs"
          @click="clickHandler"
          @change="changeHandler">
        </cube-tab-bar>
      </div>
      <!--<transition enter-active-class="fadeIn"  mode="in-out">-->
  <!---->
      <!--</transition>-->
      <transition name="component-fade" mode="out-in">
        <component :is="view"></component>
        <!--<read-community class="animated" v-show="showRead"></read-community>-->

      </transition>
    </div>
  </div>
</template>

<script>
  import loadingBar from './../components/loading.vue'
  import navBar from './../components/navBar.vue'
  import searchBar from '../components/searchBar.vue'
  import indexSwiper from '../components/indexSwiper.vue'
  import readCommunity from './components/readCommunity.vue'
  import topicCommunity from './components/topicCommunity.vue'
  export default {
    name: 'Home',
    data () {
      return {
        isLoading: false,
        searchVal: '',
        selectedNavTitle: '社区',
        showSearchBtn: true,
        showSearchVal: '发布',
        selectedLabelDefault: '课题社区',
        showSlider:false,
        view: 'topicCommunity',
        tabs: [{
            label: '课题社区',
          }, {
            label: '影视社区',
          }, {
            label: '阅读社区',
          }, {
            label: '联盟社区',
          },],
        showTopic: true,
        showRead: false
        }
    },
    components:{
      searchBar,
      indexSwiper,
      navBar,
      readCommunity,
      topicCommunity,
      loadingBar
    },
    methods: {
      //阅读社区
      getcommunityData(){
        this.http.get(this.ports.community.community, res =>{
          setTimeout(() => {
            this.isLoading = false
          }, 1000)
          console.log(res)
          if(res.status==200){
            const data = res.data
            this.resourceList = data
          }
        })
      },
      checkInit(){
        let checkSelect = this.$route.query.select
        if(checkSelect == 3){
          this.selectedLabelDefault = '阅读社区'
        }else{
          this.selectedLabelDefault = '课题社区'
        }
        this.clickHandler(this.selectedLabelDefault)
      },
      clickHandler (label) {
        // if you clicked home tab, then print 'Home'
        console.log(label)
        if(label=='课题社区'){
          this.view = 'topicCommunity'
//          this.showTopic = true
//          this.showRead = false
        }
        if(label=='阅读社区'){
          this.view = 'readCommunity'
//          this.showTopic = false
//          this.showRead = true
          this.getcommunityData()
        }
        this.$refs.tabbar.setSliderTransform(50)

      },
      changeHandler (label) {
        // if you clicked different tab, this methods can be emitted
      },
      setWidth() {
        this.$refs.tabbar.setSliderTransform(50)
      },
    },
    mounted(){
//      this.checkInit()
//      console.log(this.$refs.tabbar)
    }
  }
</script>

<style scoped lang="less">
  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .3s ease;
  }
  .component-fade-enter, .component-fade-leave-to
    /* .component-fade-leave-active for below version 2.1.8 */ {
    opacity: 0;
  }
  .indexWrapper{
    background-color:#f5f5f5;
    font-size:24px;
    margin-bottom:100px;
    .communtyBar{
      background-color:white;
      padding:30px 20px;
    }
  }
</style>

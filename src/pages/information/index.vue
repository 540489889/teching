<template>
  <div class="informationWrapper recommend-content">
    <loading-bar v-if="isLoading"></loading-bar>
    <div class="spImg" v-if="map">
      <!--<img src="./../../assets/img/infm-b-1.png" alt="">-->
      <map-bar :maps="map"></map-bar>
    </div>
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
        :currList="currList"
        :lawsIndex="lawsIndex"
        :InfoAward="InfoAward"
        :briefList="briefList"
      ></component>
    </transition>

    <!--<list-fruits v-show="showSuog" ></list-fruits>-->
    <!--<about-us v-show="showUs"></about-us>-->
  </div>
</template>
<script>
  import newZb from './components/newZb.vue'
  import policy from './components/policy.vue'
  import listFruits from './components/fruits.vue'
  import aboutUs from './components/aboutUs.vue'
  import loadingBar from '../components/loading.vue'
  import mapBar from './components/mapBar.vue'
  export default {
    name: 'InformationIndex',
    data(){
      return{
        view: 'newZb',
        isLoading: false,
        selectedLabelDefault: '新装备动态',
        showSlider:false,
        tabs: [{
          label: '新装备动态',
        }, {
          label: '政策法规',
        }, {
          label: '硕果累累',
        },{
          label: '中心简介'
        }],
        showZb: true,
        showSuog: false,
        showUs: false,
        showZc: false,
        currList: [],
        InfoAward:{},
        briefList: {},
        lawsIndex: [],
        map: []
      }
    },
    components: {
      listFruits,
      loadingBar,
      aboutUs,
      mapBar,
      newZb,
      policy
    },
    methods: {
      getInfoActive (){
        this.http.get(this.ports.information.InfoActive, res =>{
          setTimeout(() => {
            this.isLoading = false
          }, 1000)
          console.log(res)
          if(res.status==200){
            let data = res.data
            this.currList = data.data
            this.map = data.map
          }
        })
      },
      getbrief(){
        this.http.get(this.ports.information.brief, res =>{
          setTimeout(() => {
            this.isLoading = false
          }, 1000)
          console.log(res)
          if(res.status==200){
            let data = res.data
            this.briefList = data.data
            this.map = data.map
          }
        })
      },
      getlawsIndex(){
        this.http.get(this.ports.information.lawsIndex, res =>{
          setTimeout(() => {
            this.isLoading = false
          }, 1000)
          console.log(res)
          if(res.status==200){
            let data = res.data
            this.lawsIndex = data.data
            this.map = data.map
          }
        })
      },

      getInfoAward(){
        this.http.get(this.ports.information.InfoAward, res =>{
          setTimeout(() => {
            this.isLoading = false
          }, 1000)
          console.log(res)
          if(res.status==200){
            let data = res.data
            this.InfoAward = data.data
            this.map = data.map
          }
        })
      },
      clickHandler (label) {
        // if you clicked home tab, then print 'Home'
        console.log(label)
        if(label=='新装备动态'){
          this.view = 'newZb'
          this.getInfoActive()
        }
        if(label=='政策法规'){
          this.view = 'policy'
          this.getlawsIndex()
        }
        if(label=='硕果累累'){
          this.view = 'listFruits'
          this.getInfoAward()
        }
        if(label=='中心简介'){
          this.view = 'aboutUs'
          this.getbrief()
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
      this.getInfoActive()
//      console.log(this.$refs.tabbar)
    }

  }
</script>
<style lang="less" scoped>
  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .3s ease;
  }
  .component-fade-enter, .component-fade-leave-to
    /* .component-fade-leave-active for below version 2.1.8 */ {
    opacity: 0;
  }
  .informationWrapper{
    background-color:#f5f5f5;
    font-size:24px;
    .spImg{
      img{
        width:100%;
      }
    }
    .communtyBar{
      background-color:white;
      padding-bottom:10px;
    }
    .infoList5{
      background-color:white;
      margin-top:20px;
      padding:20px 0;
      .titleBox{
        .left-ico i{
          width:32px;
          height:32px;
          background:url(./../../assets/ico/info-t-5.png) no-repeat center;
          background-size:100%;
        }
      }
      ul{
        overflow: hidden;
        padding:0 20px;
        .noList{
          width:100%;
          padding-top:10px;
          text-align: center;
        }
        li{
          .noList{
            text-align: center;
          }
          box-sizing: border-box;
          float:left;
          width:50%;
          text-align: left;
          margin-bottom:20px;
          img{
            width:345px;
            height:200px;
            border-radius: 5px;
          }
          h4{
            font-size:28px;
            margin:10px 0 10px 0;
            text-align: left;
          }
          h6{
            line-height:1.6;
            font-size:26px;
            color:#909090;
          }
          p{
            color:#909090;
            font-size:22px;
          }
        }
        li:nth-child(odd){
          padding-right:10px;
        }
        li:nth-child(even){
          padding-left:10px;
        }
      }
    }

  }
</style>

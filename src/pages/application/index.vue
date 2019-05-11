<template>
  <div class="appWrapper recommend-content">
    <loading-bar v-if="isLoading"></loading-bar>
    <search-bar></search-bar>
    <index-swiper :list="banner"></index-swiper>
    <div class="listInfo">
      <ul class="flex-box">
        <router-link tag="li" to="/application/collect" class="box-1">
          <i class="app-ico-1"></i>
          <h4>调查征集</h4>
        </router-link>
        <router-link tag="li" to="/application/sign" class="box-1">
          <i class="app-ico-2"></i>
          <h4>会议签到</h4>
        </router-link>
        <router-link tag="li" to="/application/askAnswer" class="box-1">
          <i class="app-ico-3"></i>
          <h4>你问我答</h4>
        </router-link>
        <li class="box-1">
          <i class="app-ico-4"></i>
          <h4>填报平台</h4>
        </li>
        <li class="box-1">
          <i class="app-ico-5"></i>
          <h4>数据检测</h4>
        </li>
      </ul>
    </div>
    <!--精选问答-->
    <div class="selectedWd">
      <router-link tag="h2" to="/application/askAnswer" class="titleBox flex-box">
        <span class="left-ico flex-box"><i class="ds-ico"></i>精选问答</span>
        <span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>
      </router-link>
      <ul>
        <router-link tag="li" :to="'/application/askDetails?id='+item.id" v-for="item in question" :key="item.id" class="flex-box">
          <span class="leftText">问</span>
          <div class="rightText">
            <h4 class="media_title">{{item.title}}</h4>
            <p>{{item.update}}<span>{{item.comnum}} 回答</span></p>
          </div>
        </router-link>
        <!--<li class="flex-box">-->
          <!--<span class="leftText">问</span>-->
          <!--<div class="rightText">-->
            <!--<h4 class="media_title">九龙坡区“科技艺体”联盟第三次活动在什么...</h4>-->
            <!--<p>2019.02.21 09:52:11 <span>1234回答</span></p>-->
          <!--</div>-->
        <!--</li>-->
        <!--<li class="flex-box">-->
          <!--<span class="leftText">问</span>-->
          <!--<div class="rightText">-->
            <!--<h4 class="media_title">九龙坡区“科技艺体”联盟第三次活动在什么...</h4>-->
            <!--<p>2019.02.21 09:52:11 <span>1234回答</span></p>-->
          <!--</div>-->
        <!--</li>-->
      </ul>
    </div>
  </div>
</template>

<script>
  import navBar from './../components/navBar.vue'
  import searchBar from '../components/searchBar.vue'
  import indexSwiper from '../components/indexSwiper.vue'
  import loadingBar from '../components/loading.vue'
  export default {
    name: 'Home',
    data () {
      return {
        searchVal: '',
        isLoading: true,
        banner: [],
        question: []
      }
    },
    components:{
      searchBar,
      indexSwiper,
      loadingBar
    },
    methods: {
      getLication (){
        this.http.get(this.ports.application.lication, res =>{
          setTimeout(() => {
            this.isLoading = false
          }, 1000)
          console.log(res)
          if(res.status==200){
            const data = res.data
            this.banner = data.banner
            this.question = data.question
          }
        })
      },
    },
    mounted (){
      this.getLication()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .appWrapper{
    background-color:#f5f5f5;
    font-size:24px;
    .listInfo{
      background-color:white;
      padding:20px 0;
      ul{
        li{
          i{
            width:110px;
            height:110px;
            display: block;
            margin:0 auto;
          }
          .app-ico-1{
            background:url(./../../assets/ico/app-l-1.png) no-repeat center;
            background-size:100%;
          }
          .app-ico-2{
            background:url(./../../assets/ico/app-l-2.png) no-repeat center;
            background-size:100%;
          }
          .app-ico-3{
            background:url(./../../assets/ico/app-l-3.png) no-repeat center;
            background-size:100%;
          }
          .app-ico-4{
            background:url(./../../assets/ico/app-l-4.png) no-repeat center;
            background-size:100%;
          }
          .app-ico-5{
            background:url(./../../assets/ico/app-l-5.png) no-repeat center;
            background-size:100%;
          }
          h4{
            text-align: center;
            line-height:2;
          }
        }
      }
    }
    .selectedWd{
      background-color:white;
      margin-top:20px;
      padding:10px 0;
      .titleBox{
        .left-ico i{
          width:32px;
          height:32px;
          background:url(./../../assets/ico/app-ico-1.png) no-repeat center;
          background-size:100%;
        }
      }
      ul{
        padding:0 20px;
        li{
          padding:20px 0;
          align-items: flex-start;
          border-bottom:1px solid #eee;
          .leftText{
            color:#e60012;
            font-size:20px;
            padding:5px 5px;
            border:1px solid #e60012;
            border-radius: 5px;
            margin-right:20px;
          }
          .rightText{
            text-align: left;
            h4{
              font-size:30px;
              margin-bottom:20px;
            }
            p{
              color:#bbbbbb;
              span{
                margin-left:20px;
              }
            }
          }
        }
        li:last-child{
          border:none;
        }
      }
    }
  }
</style>

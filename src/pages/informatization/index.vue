<template>
  <div class="infoWrapper recommend-content">

    <search-bar></search-bar>
    <div class="infoList1 meWrapper">
      <h2 class="titleBox flex-box">
        <span class="left-ico flex-box"><i class="ds-ico"></i>竞技与竞赛</span>
        <!--<span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>-->
      </h2>
      <div class="scroll-list-wrap">
        <cube-scroll
          ref="scroll"
          direction="horizontal"
          :options="options">
          <ul class="list-wrapper">
            <li class="list-item" v-for="(item,index) in sports" :key="item.id">
              <router-link tag="div" :to="'./sports?type='+item.status" class="imgBox">
                <img :src="'http://cqeic.swkj2014.com/'+item.cover_img" alt="">
              </router-link>
            </li>
          </ul>
        </cube-scroll>
      </div>
    </div>
    <!--教育装备-->
    <div class="infoList2">
      <router-link tag="h2" to="/informatization/educational" class="titleBox flex-box">
        <span class="left-ico flex-box"><i class="ds-ico"></i>教育装备</span>
        <span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>
      </router-link>
      <ul>
        <router-link tag="li" :to="'./eduDetails?id='+item.id" v-for="item in study" :key="item.id">
          <div class="leftText flex-box">
            <img class="rightImg" :src="'http://cqeic.swkj2014.com/'+item.cover_img" alt="">
            <div class="box-1">
              <h4 class="flex-box">
                <p class="box-1 media_title">{{item.title}}话</p>
                <span class="style1">{{item.labels}}</span>
              </h4>
              <div class="media_desc">
                {{item.introduction}}
              </div>
            </div>
          </div>
        </router-link>
      </ul>
    </div>
    <!--信息化科研-->
    <div class="infoList3">
      <h2 class="titleBox flex-box">
        <span class="left-ico flex-box"><i class="ds-ico"></i>信息化科研</span>
        <!--<span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>-->
      </h2>
      <div class="textBox flex-box">
        <div class="leftImg">
          <img src="./../../assets/img/info-bb-1.png" alt="">
        </div>
        <div class="rightImg">
          <img src="./../../assets/img/info-bb-2.png" alt="">
        </div>
      </div>
    </div>
    <!--智慧校园-->
    <div class="infoList4">
      <h2 class="titleBox flex-box">
        <span class="left-ico flex-box"><i class="ds-ico"></i>智慧校园</span>
        <!--<span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>-->
      </h2>
      <ul>
        <router-link tag="li" :to="'./campus?type='+item.status" v-for="item in school" :key="item.id">
          <img :src="'http://cqeic.swkj2014.com/'+item.cover_img" alt="">
          <h4 class="media_title">{{item.name}}</h4>
          <p>{{item.seenum}}人观看</p>
        </router-link>
      </ul>
    </div>
    <!--校园影视-->
    <div class="infoList5">
      <h2 class="titleBox flex-box">
        <span class="left-ico flex-box"><i class="ds-ico"></i>校园影视</span>
        <!--<span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>-->
      </h2>
      <ul>
        <router-link tag="li" :to="'./movie?type='+item.status" v-for="item in movies" :key="item.id">
          <img :src="'http://cqeic.swkj2014.com/'+item.cover_img" alt="">
          <h4 class="media_title">{{item.name}}</h4>
          <p>{{item.seenum}}人观看</p>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  import loadingBar from './../components/loading'
  import searchBar from '../components/searchBar.vue'
  import indexSwiper from '../components/indexSwiper.vue'
  export default {
    name: 'InformatizationIndex',
    data () {
      return {
        isLoading: true,
        sports: [],//竞技与竞赛
        school: [],//教育平台
        movies: [],//直播
        study: [], //教育装备
        searchVal: '',
//        items: [1, 2,3,4],
        direction: "horizontal",
        options: {
//          scrollbar: {
//            fade: false
//          }
        },
        scrollX: true,
        scrollY: false,
        equipmentList: [],
        inForAtionList: [],
        toast: null,
      }
    },
    components:{
      searchBar,
      indexSwiper,
      loadingBar
    },
    methods: {
      //教育装备列表
      geTequipmentData(){
        this.http.get(this.ports.informatization.equipment,res=>{
          console.log(res)
          if(res.status==200){
            const data = res.data
            this.equipmentList = data
          }
        })
      },
      //信息化2.0页面数据
      getInForAtionData(){
        this.http.get(this.ports.informatization.inForAtion,res=>{
          setTimeout(() => {
            this.isLoading = false
          }, 1000)
          console.log(res)
          if(res.status==200){
            const data = res.data
            this.sports = data.sports
            this.school = data.school
            this.movies = data.movies
            this.study = data.study
          }
        })
      },
      //智慧校园
      getWisdomSchoolData(){
        this.http.get(this.ports.informatization.wisdomSchool+'?type='+1,res=>{
          console.log(res)
          if(res.status==200){
//            const data = res.data
//            this.inForAtionList = data
//            console.log(this.inForAtionList)
          }
        })
      }
    },
    mounted(){
//      this.geTequipmentData()
      this.getInForAtionData()
//      this.getWisdomSchoolData()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .infoWrapper{
    background-color:#f5f5f5;
    font-size:24px;
    .infoList1{
      background-color:white;
      padding:10px 0;
      .titleBox{
        .left-ico i{
          width:31px;
          height:32px;
          background:url(./../../assets/ico/info-t-1.png) no-repeat center;
          background-size:100%;
        }
      }
    }
    .infoList2{
      background-color:white;
      margin-top:20px;
      padding:10px 0;
      .titleBox{
        .left-ico i{
          width:32px;
          height:32px;
          background:url(./../../assets/ico/info-t-2.png) no-repeat center;
          background-size:100%;
        }
      }
      ul{
        li{
          padding:20px;
          border-bottom:1px solid #eee;
          .leftText{
            align-items: flex-start;
            text-align: left;
            .rightImg{
              width:120px;
              height:120px;
              margin-right:20px;
              border-radius: 5px;
            }
            h4{
              margin-bottom:10px;
              span{
                padding:10px;
                border-radius: 5px;
                font-size:20px;
                margin-left:20px;
              }
              .style1{
                border:1px solid #009946;
                color:#009946;
              }
              .style2{
                border:1px solid #f69704;
                color:#f69704;
              }
            }
            .media_title{
              font-size:30px;
            }
            .media_desc{
              color:#909090;
              font-size:26px;
              overflow: hidden;
              max-height:80px;
            }
          }
        }
        li:last-child{
          border:none;
        }
      }
    }
    .infoList3{
      background-color:white;
      margin-top:20px;
      padding:10px 0;
      .titleBox{
        .left-ico i{
          width:27px;
          height:32px;
          background:url(./../../assets/ico/info-t-3.png) no-repeat center;
          background-size:100%;
        }
      }
      .textBox{
        justify-content: space-between;
        padding:20px;
        padding-top:10px;
        .leftImg{

        }
        img{
          width:345px;
          height:102px;
        }
      }
    }
    .infoList4,.infoList5{
      background-color:white;
      margin-top:20px;
      padding:10px 0;
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
        li{
          box-sizing: border-box;
          float:left;
          width:50%;
          text-align: left;
          margin-bottom:20px;
          img{
            width:345px;
            height:200px;
          }
          h4{
            font-size:28px;
            margin:10px 0;
            text-align: left;
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
    .infoList5{
      .titleBox{
        .left-ico i{
          width:32px;
          height:32px;
          background:url(./../../assets/ico/info-t-4.png) no-repeat center;
          background-size:100%;
        }
      }
    }
  }
</style>

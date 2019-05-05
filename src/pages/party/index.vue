<template>
  <div class="partyWrapper recommend-content">
    <loading-bar v-show="isLoading"></loading-bar>
    <search-bar></search-bar>
    <div class="partyBanner">
      <!--<img src="./../../assets/img/party-b-1.png" alt="">-->
      <curr-swiper :list="list.banner"></curr-swiper>
      <h2 class="titleBox flex-box">
        <span class="left-ico flex-box"><i class="ds-ico"></i>支部介绍</span>
        <span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>
      </h2>
      <div class="bannerText">
        <p v-if="list.introduce">
        {{list.introduce.introduction}}
        </p>
      </div>
    </div>
    <!--党员风采-->
    <div class="meWrapper voteContent">
      <h2 class="flex-box">
        <span class="left-ico flex-box"><i class="ds-ico"></i>党员风采</span>
        <span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>
      </h2>
      <div class="voteBox">
        <!--<h1 class="flex-box">#十佳社区成员# <span>进行中</span></h1>-->
        <div class="scroll-list-wrap">
          <cube-scroll
            ref="scroll"
            :data="list.member"
            direction="horizontal"
            :options="options">
            <ul class="list-wrapper">
              <li v-for="item in list.member" class="list-item">
                <div class="imgBox"><img src="../../assets/img/party-c-1.png" alt=""></div>
                <h3 class="media_title">{{item.title}}</h3>
                <p class="media_title">{{item.introduction}}</p>
              </li>
            </ul>
          </cube-scroll>
        </div>
      </div>
    </div>
    <div class="infoList2">
      <router-link tag="h2" to="/party/activeList" class="titleBox flex-box">
        <span class="left-ico flex-box"><i class="ds-ico"></i>党建活动</span>
        <span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>
      </router-link>
      <ul>
        <router-link tag="li" :to="'/party/activeDetails?id='+item.id" v-if="list.activity.length" v-for="item in list.activity" :key="item.id">
          <div class="leftText flex-box">
            <img class="rightImg" :src="'http://cqeic.swkj2014.com/'+item.cover_img" alt="">
            <div class="box-1">
              <h4 class="flex-box">
                <p class="box-1 media_title">{{item.title}}</p>
                <!--<span class="style1">教育装备</span>-->
              </h4>
              <p class="media_desc">
               {{item.introduction}}
              </p>
            </div>
          </div>
        </router-link>
      </ul>
    </div>
  </div>

</template>

<script>
  import loadingBar from '../components/loading.vue'
  import searchBar from '../components/searchBar.vue'
  import currSwiper from '../components/currSwiper.vue'
  export default {
    name: 'PartyIndex',
    data () {
      return {
        isLoading: false,
        searchVal: '',
        items: [1, 2, 3, 4, 5, 6],
        direction: "horizontal",
        options: {
//          scrollbar: {
//            fade: false
//          }
        },
        scrollX: true,
        scrollY: false,
        list: []
      }
    },
    components:{
      searchBar,
      loadingBar,
      currSwiper
    },
    methods: {
      getPartyIndex (){
        this.http.get(this.ports.party.partyIndex, res =>{
          setTimeout(() => {
            this.isLoading = false
          }, 1000)
          console.log(res)
          if(res.status==200){
            const data = res.data
            this.list = data
          }
        })
      },
    },
    mounted (){
      this.getPartyIndex()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .partyWrapper{
    background-color:#f5f5f5;
    font-size:24px;
    .partyBanner{
      background-color:white;
      img{
        margin:10px 0;
        width:750px;
        height:345px;
      }
      .titleBox{
        .left-ico i{
          width:33px;
          height:32px;
          background:url(./../../assets/ico/party-ico-1.png) no-repeat center;
          background-size:100%;
        }
      }
      .bannerText{
        padding:20px;
        color:#909090;
        font-size:26px;
        line-height:1.6;
        padding-top:0;
      }
    }
    .voteContent{
      background-color:white;
      margin-top:20px;
      >h2{
        justify-content: space-between;
        padding:20px;
        padding-bottom:0;
        padding-top:30px;
        font-size:32px;
        .left-ico{
          i{
            width:33px;
            height:24px;
            background:url(./../../assets/ico/party-ico-2.png) no-repeat center;
            background-size:100%;
            margin-right:10px;
          }
        }
        .right-text{
          color:#bbbbbb;
          font-size:24px;
        }
      }
      .voteBox{
        padding:20px;
        h1{
          font-size:30px;
          text-align: left;
          margin-bottom:20px;
          span{
            color:white;
            background-color:#e60012;
            padding:10px 10px 5px 10px;
            border-radius: 5px;
            font-size:22px;
            margin-left:20px;
          }
        }
      }
    }
    .infoList2{
      background-color:white;
      margin-top:20px;
      padding:10px 0;
      .titleBox{
        .left-ico i{
          width:28px;
          height:33px;
          background:url(./../../assets/ico/party-ico-3.png) no-repeat center;
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
              width:125px;
              height:125px;
              margin-right:20px;
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

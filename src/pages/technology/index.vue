<template>
  <div class="partyWrapper recommend-content aboutUs">
    <loading v-if="isLoading"></loading>
    <div class="searchDiv">
      <!--<search-bar></search-bar>-->
    </div>
    <div class="partyBanner">
      <!--<img src="./../../assets/img/party-b-1.png" alt="">-->
      <curr-swiper :list="banner"></curr-swiper>
    </div>
    <!--中心机构-->
    <div class="meWrapper voteContent">
      <h2 class="flex-box">
        <span class="left-ico flex-box">
          中心机构</span>
        <!--<span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>-->
      </h2>
      <div class="voteBox">
        <ul class="flex-box">
          <li class="box-1">
            <router-link tag="div" to="./inforOffice?type=1">
              <img src="./../../assets/ico/t-i-1.png" alt="">
              <h4>办公室</h4>
            </router-link>
          </li>
          <li class="box-1">
            <router-link tag="div" to="./inforOffice?type=2">
              <img src="./../../assets/ico/t-i-2.png" alt="">
              <h4>技术部</h4>
            </router-link>
          </li>
          <li class="box-1">
            <router-link tag="div" to="./inforOffice?type=3">
              <img src="./../../assets/ico/t-i-3.png" alt="">
              <h4>装备部</h4>
            </router-link>
          </li>
          <li class="box-1">
            <router-link tag="div" to="./inforOffice?type=4">
              <img src="./../../assets/ico/t-i-4.png" alt="">
              <h4>数据部</h4>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="fruits-list-2 meWrapper">
      <h2 class="titleBox flex-box">
        <span class="left-ico flex-box">
          <!--<i class="ds-ico"></i>-->
          职能职责</span>
        <!--<span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>-->
      </h2>
      <div class="scroll-list-wrap" style="padding-bottom:10px;">
        <cube-scroll
          ref="scroll"
          :data="branch"
          direction="horizontal"
          :options="options">
          <ul class="list-wrapper flex-box" style="align-items: flex-start">
            <router-link tag="li" :to="'/technology/inforActive?id='+item.id" :key="item.id" v-for="item in branch" class="list-item">
              <div class="">
                <div class="imgBox"><img :src="'http://cqeic.swkj2014.com/'+item.cover_img" alt=""></div>
                <div class="resitionBox">
                  <span class="label">{{item.position}}</span>
                  <h2 class="text-left media_title">{{item.author}}</h2>
                  <h3 class="media_desc">{{item.title}}</h3>
                </div>
              </div>
            </router-link>
          </ul>
        </cube-scroll>
      </div>
    </div>
    <div class="infoList2">
      <router-link tag="h2" to="/technology/techList" class="titleBox flex-box">
        <span class="left-ico flex-box">
          活动风采</span>
        <span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>
      </router-link>
      <ul>
        <router-link tag="li" :to="'/technology/details?id='+item.id" v-for="item in activity" :key="item.id">
          <div class="leftText flex-box">
            <img class="rightImg" :src="$store.state.IMGPATH+item.cover_img" alt="">
            <div class="box-1">
              <h4 class="flex-box">
                <p class="box-1 media_title">{{item.title}}</p>
                <!--<span class="style1">教育装备</span>-->
              </h4>
              <p class="media_desc">
                {{item.introduction}}
              </p>
              <h6 class="flex-box">
                <span>{{item.update}}</span>
                <span v-if="item.clicknum"><i class="cubeic-person"></i> {{item.clicknum}}</span>
                <span v-else><i class="cubeic-person"></i>0</span>
              </h6>
            </div>
          </div>
        </router-link>
      </ul>
    </div>
  </div>

</template>

<script>
  import loading from '../components/loading.vue'
  import searchBar from '../components/searchBar.vue'
  import currSwiper from '../components/currSwiper.vue'
  export default {
    name: 'PartyIndex',
    data () {
      return {
        activity: [], //活动风采
        banner: [], //banner
        branch: [], //职能职责
        isLoading: true,
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
      loading,
      currSwiper
    },
    created (){
      setTimeout(() => {
        this.isLoading = false
      }, 500)
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
      getTechnologyData(){
        this.http.get(this.ports.technology.technical, res =>{
          console.log(res)
          if(res.status==200){
            const data = res.data
            this.banner = data.banner
            this.activity = data.activity
            this.branch = data.branch
          }
        })
      }
    },
    mounted (){
      this.getPartyIndex()
      this.getTechnologyData()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .partyWrapper{
    background-color:#f5f5f5;
    font-size:24px;
    .resitionBox{
      position:relative;
      .label{
        position:absolute;
        top:-60px;
        left:0;
        background-color:#ffb631;
        color:white;
        height:40px;
        line-height:42px;
        display: block;
        padding:0 10px;
        text-align: center;
        font-size:24px;
      }
      /*.media_desc{*/
      /*height:65px;*/
      /*overflow: hidden;*/
      /*}*/
    }
    .searchDiv{
      position:absolute;
      z-index: 9;
      width:710px;
    }
    .searchWrapper{
      background-color:transparent;
      width:100%;
    }
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
      padding-bottom:10px;
      >h2{
        justify-content: space-between;
        padding:20px;
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
        /*padding:20px;*/
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

        ul{
          li{
            div{
              img{
                width:120px;
                height:124px;
              }
              h4{
                line-height:2;
              }
            }
          }
        }
      }
    }
    .fruits-list-2{
      margin-top:20px;
      background-color:white;
      .titleBox{
        .left-ico i{
          width:40px;
          height:45px;
          background:url(../../assets/ico/suog-ico-2.png) no-repeat center;
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
            align-items: center;
            text-align: left;
            .rightImg{
              width:190px;
              height:130px;
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
              -webkit-line-clamp: 1;
            }
          }
          h6{
            color:#909090;
            font-size:22px;
            margin-top:15px;
            justify-content: space-between;
            .bf-ico-1{
              display: inline-block;
              width:27px;
              height:20px;
              background:url(./../../assets/ico/bf-ico-1.png) no-repeat center;
              background-size:100%;
            }
            .cubeic-person{
              margin-right:3px;
            }
          }
        }
        li:first-child{
          padding-top:0;
        }
        li:last-child{
          border:none;
        }
      }
    }
  }
</style>

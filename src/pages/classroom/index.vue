<template>
  <div class="roomIndex recommend-content">
    <div class="title">
        <div class="searchBox">
          <search-bar></search-bar>
        </div>
    </div>
    <!--直播预告-->
    <div class="newsVideo">
      <h3 class="text-left">直播预告</h3>
      <a class="thisVideo flex-box">
        <img class="leftImg" src="./../../assets/img/video-b-1.png" alt="">
        <div class="textCenter box-1">
          <h4 class="media_title">京剧名家进校园 生旦...</h4>
          <p class="flex-box"><span class="flex-box"><i></i>06:00</span> 讲师：暖洋洋呢</p>
        </div>
        <div class="right-ico"><i class="v-ico-1"></i></div>
      </a>
    </div>
    <div class="roomContent">
      <!--<div class="roomNav">-->
        <!--<cube-scroll-nav-bar :current="current" :labels="labels" @change="changeHandler" />-->
      <!--</div>-->
      <div class="infoList2">
        <h2 class="titleBox flex-box">
        <span class="left-ico flex-box">直播课堂</span>
        <!--<span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>-->
        </h2>
        <ul>
          <li>
            <div class="leftText flex-box">
              <img class="rightImg" src="./../../assets/img/th-b-2.png" alt="">
              <div class="box-1">
                <h4 class="flex-box">
                  <p class="box-1 media_desc">人人课堂初高中生学业生涯规划指导
                    人人课堂初高中生学业生涯规划指导公开课</p>
                </h4>
                <h6 class="flex-box">
                  <span><i class="bf-ico-1"></i>
                   04.23 10：00</span>
                  <span><i class="cubeic-person"></i> 1314</span>
                </h6>
              </div>
            </div>
          </li>
          <li>
            <div class="leftText flex-box">
              <img class="rightImg" src="./../../assets/img/th-b-2.png" alt="">
              <div class="box-1">
                <h4 class="flex-box">
                  <p class="box-1 media_desc">人人课堂初高中生学业生涯规划指导
                    人人课堂初高中生学业生涯规划指导公开课</p>
                </h4>
                <h6 class="flex-box">
                  <span><i class="bf-ico-1"></i>
                   04.23 10：00</span>
                  <span><i class="cubeic-person"></i> 1314</span>
                </h6>
              </div>
            </div>
          </li>
          <li>
            <div class="leftText flex-box">
              <img class="rightImg" src="./../../assets/img/th-b-2.png" alt="">
              <div class="box-1">
                <h4 class="flex-box">
                  <p class="box-1 media_desc">人人课堂初高中生学业生涯规划指导
                    人人课堂初高中生学业生涯规划指导公开课</p>
                </h4>
                <h6 class="flex-box">
                  <span><i class="bf-ico-1"></i>
                   04.23 10：00</span>
                  <span><i class="cubeic-person"></i> 1314</span>
                </h6>
              </div>
            </div>
          </li>
          <li>
            <div class="leftText flex-box">
              <img class="rightImg" src="./../../assets/img/th-b-2.png" alt="">
              <div class="box-1">
                <h4 class="flex-box">
                  <p class="box-1 media_desc">人人课堂初高中生学业生涯规划指导
                    人人课堂初高中生学业生涯规划指导公开课</p>
                </h4>
                <h6 class="flex-box">
                  <span><i class="bf-ico-1"></i>
                   04.23 10：00</span>
                  <span><i class="cubeic-person"></i> 1314</span>
                </h6>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import './../../assets/style/cubeNews.css'
  import searchBar from '../components/searchBar.vue'
  export default {
    name: 'sayValue',
    data (){
      return{
        current: '职业规划',
        labels: [
          '职业规划',
          '学习方法',
          '安全教育',
          '国防教育',
          '创客教育',
        ]
      }
    },
    components: {
      searchBar
    },
    methods: {
      changeHandler(cur) {
        this.current = cur
      }
    },
    mounted (){

    }
  }
</script>
<style lang="less" scoped>
  .roomIndex{
    background-color:#f5f5f5;
    font-size:24px;
    margin-bottom:100px;
    min-height:100%;
    .title{
      width:750px;
      height:330px;
      background:url(./../../assets/ico/rm-banner.png) no-repeat center;
      background-size:100%;
      .searchBox{
        .searchWrapper{
          background-color:transparent;
          input{
            background: rgba(242, 242, 245, 0.6);
          }
        }
      }
    }
    .newsVideo{
      background-color:white;
      padding:20px;
      margin-bottom:20px;
      padding-bottom:30px;
      h3{
        text-align: left;
        font-size:34px;
        margin:30px auto;
        margin-top:10px;
      }
      .thisVideo{
        box-shadow:#ccc 1px 1px 10px 1px ;
        background-color:white;
        box-sizing: border-box;
        overflow: hidden;
        border-radius: 15px;
        .leftImg{
          width:128px;
          height:128px;
        }
        .textCenter{
          text-align: left;
          margin-left:20px;
          /*margin-right:20px;*/
          padding-right:40px;
          border-right:1px solid #eee;
          h4{
            line-height:1.6;
            font-size:30px;
            margin-bottom:10px;
            color:black;
          }
          p{
            color:#999999;
            font-size:28px;
            span{
              padding:5px 10px;
              color:white;
              background-color:#e60012;
              font-size:18px;
              border-radius: 5px;
              margin-right:20px;
              i{
                width:10px;
                height:10px;
                background-color:white;
                border-radius: 50%;
                color:transparent;
                display: inline-block;
                margin-right:5px;
              }
            }
          }
        }
        .right-ico{
          margin-right:40px;
          margin-left:40px;
          .v-ico-1{
            display: inline-block;
            width:30px;
            height:48px;
            background:url(./../../assets/ico/video-ico-1.png) no-repeat center;
            background-size:100%;
          }
        }
      }
    }
    .roomNav{
      border-bottom:1px solid #eee;
    }
    .infoList2{
      background-color:white;
      padding:10px 0;
      padding-bottom:0;
      .titleBox{
        .left-ico i{
          width:32px;
          height:32px;
          background:url(./../../assets/ico/info-t-2.png) no-repeat center;
          background-size:100%;
        }
      }
      ul{
        .noList{
          padding:10px;
          color:#999;
        }
        li:last-child{
          border:none;
        }
        li{
          background-color:white;
          /*margin-top:20px;*/
          padding:20px;
          border-bottom:1px solid #eee;
          align-items: flex-start;
          .leftText{
            align-items: flex-start;
            text-align: left;
            .rightImg{
              width:190px;
              height:130px;
              margin-right:20px;
              border-radius: 10px;
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
              /*color:#909090;*/
              font-size:28px;
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

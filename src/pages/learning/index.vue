<template>
  <div class="resourcesWrapper meWrapper recommend-content">

    <div class="resourBanner">
      <img src="../../assets/img/resource-banner.png" alt="">
      <!--<curr-swiper :list="resourceList.banener"></curr-swiper>-->
      <div class="flex-box learningFd">
        <router-link tag="div" to="/learning/onLineResources" class="left box-1 flex-box">
          <img src="./../../assets/ico/lear-1.png" alt="">
          <div class=" box-1">
            <h1>在线资源</h1>
            <p>免费公共资源</p>
          </div>
        </router-link>
        <router-link tag="div" to="/classroom/index" class="right box-1 flex-box">
          <img src="./../../assets/ico/lear-2.png" alt="">
          <div class=" box-1">
            <h1>空中课堂</h1>
            <p>直播课堂</p>
          </div>
        </router-link>
      </div>
    </div>
    <!--好书推荐-->
    <div class="airBox">
      <router-link tag="h2" to="/resource/airRoom" class="titleBox flex-box">
        <span class="left-ico flex-box">
          <!--<i class="ds-ico"></i>-->
          好书推荐</span>
        <!--<span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>-->
      </router-link>
      <div class="airContent flex-box" v-for="item in goodBook" :key="item.id">
        <div class="imgLeft">
          <img :src="$store.state.IMGPATH+item.cover_img"  alt="">
          <span class="rmSpan">热门</span>
        </div>
        <div class="textRight box-1">
          <h4 class="flex-box">
            <!--<span style="margin-right:10px;">直播中</span>-->
            <p class="media_title box-1">{{item.title}}</p>
          </h4>
          <h5 class="media_zz">读者2019年第三期(电子杂志)</h5>
          <!--<h5 class="flex-box"><span><i class="res-ico-2"></i>讲师：{{item.teacher}}老师</span> <b>{{item.online_num}}观看</b></h5>-->
          <h6 class="media_desc">{{item.title}}</h6>
          <router-link tag="button" :to="'/learning/bookDetails?eid='+item.id" class="lookBook">阅读</router-link>
        </div>
      </div>
    </div>
    <div class="readBox">
      <div class="scroll-list-wrap">
        <cube-scroll
          ref="scroll"
          :data="resourceList.community"
          direction="horizontal"
          :options="options">
          <ul class="list-wrapper">
            <router-link tag="li" :key="item.id" :to="'/learning/bookDetails?eid='+item.id" v-for="(item,index) in goodBook" class="list-item">
              <div class="imgBox">
                <span class="rmSpan" v-if="index==0">热门</span>
                <span class="rzSpan" v-if="index==1">推荐</span>
                <img :src="$store.state.IMGPATH+item.cover_img" alt="">
              </div>
              <h3 class="media_desc">{{item.bookname}}</h3>
              <p class="media_title">{{item.title}}</p>
            </router-link>
          </ul>
        </cube-scroll>
      </div>
    </div>
    <!--阅读资源-->
    <div class="readHz readBox">
      <router-link tag="h2" to="/learning/bookList" class="titleBox flex-box">
        <span class="left-ico flex-box">
          <!--<i class="ds-ico"></i>-->
          阅读资源
        </span>
        <span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>
      </router-link>
      <div class="scroll-list-wrap">
        <ul class="list-wrapper">
          <router-link tag="li" :key="item.id" :to="'/learning/bookDetails?eid='+item.id" v-for="(item,index) in bookResoce" class="list-item">
            <div class="imgBox">
              <span class="rmSpan" v-if="index==0">热门</span>
              <span class="rzSpan" v-if="index==1">推荐</span>
              <img :src="$store.state.IMGPATH+item.cover_img" alt="">
            </div>
            <h3 class="media_desc">{{item.bookname}}</h3>
            <p class="media_title">{{item.title}}</p>
          </router-link>
        </ul>
      </div>
        <!--<ul class="list-wrapper">-->
          <!--<li class="list-item">-->
            <!--<div class="imgBox">-->
              <!--<img src="./../../assets/img/banner-me-2.png" alt="">-->
            <!--</div>-->
            <!--<h3 class="media_desc">因为痛，所以叫青春</h3>-->
            <!--<p class="media_title">艾弗里·蒙森;乔里·</p>-->
          <!--</li>-->
        <!--</ul>-->
    </div>
    <!--新书推荐-->
    <div class="comBox">
      <router-link tag="h2" to="/learning/bookList" class="titleBox flex-box">
        <span class="left-ico flex-box">
          <!--<i class="ds-ico"></i>-->
          新书推荐</span>
        <span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>
      </router-link>
      <div class="hotContent">
        <ul>
          <li class="flex-box" v-if="newsBook.length" v-for="item in newsBook" :key="item.id">
            <div class="left">
              <img :src="$store.state.IMGPATH+item.cover_img" alt="">
            </div>
            <div class="right box-1">
              <h4 class="media_title">{{item.title}}</h4>
              <p class="media_desc">{{item.title}}</p>
            </div>
          </li>
          <li class="flex-box">
            <div class="left">
              <img src="./../../assets/img/banner-me-2.png" alt="">
            </div>
            <div class="right box-1">
              <h4 class="media_title">没伞的孩子，必须努力奔跑必须努力奔跑</h4>
              <p class="media_desc"> 一块石头，一半做成了佛，一半做成了台阶。人
                们都踩着台阶去拜佛。台阶不服气地问佛：“我...</p>
            </div>
          </li>
          <li class="flex-box">
            <div class="left">
              <img src="./../../assets/img/banner-me-2.png" alt="">
            </div>
            <div class="right box-1">
              <h4 class="media_title">没伞的孩子，必须努力奔跑必须努力奔跑</h4>
              <p class="media_desc"> 一块石头，一半做成了佛，一半做成了台阶。人
                们都踩着台阶去拜佛。台阶不服气地问佛：“我...</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="infoList3">
      <div class="textBox">
        <router-link tag="div" :to="'/resource/videoList?type='+1" class="leftImg">
          <img src="../../assets/ico/lear-la-1.png" alt="">
        </router-link>
        <router-link tag="div" :to="'/resource/videoList?type='+2" class="rightImg">
          <img src="../../assets/ico/lear-la-2.png" alt="">
        </router-link>
        <router-link tag="div" :to="'/resource/videoList?type='+1" class="leftImg">
          <img src="../../assets/ico/lear-la-3.png" alt="">
        </router-link>
        <router-link tag="div" :to="'/resource/videoList?type='+2" class="rightImg">
          <img src="../../assets/ico/lear-la-4.png" alt="">
        </router-link>
      </div>
    </div>
    <!--阅读达人-->
    <div class="meWrapper voteContent">
      <h2 class="flex-box">
        <span class="left-ico flex-box">
          <!--<i class="ds-ico"></i>-->
          阅读达人</span>
        <!--<span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>-->
      </h2>
      <div class="voteBox">
        <h1 class="flex-box">#十佳社区成员#
          <!--<span>进行中</span>-->
        </h1>
        <div class="scroll-list-wrap">
          <cube-scroll
            ref="scroll"
            :data="readUser"
            direction="horizontal"
            :options="options">
            <ul class="list-wrapper">
              <li v-for="(item,index) in readUser" :key="item.id" class="list-item">
                <div class="imgBox"><img src="../../assets/img/banner-me-1.png" alt=""></div>
                <h3 class="media_title">同理心做个让人舒服的做个让人舒服的做个让人舒服的</h3>
                <p class="media_title">霍华德·本内特霍华德·本内特</p>
              </li>
            </ul>
            <h6 class="noUser" v-if="!readUser">暂无达人呦...快来成为第一个达人吧</h6>
          </cube-scroll>
        </div>
      </div>
    </div>
    <!--读书心得-->
    <div class="superBox">
      <h2 class="titleBox flex-box">
        <span class="left-ico flex-box">
          <!--<i class="ds-ico"></i>-->
          读书心得
        </span>
        <span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>
      </h2>
      <ul>
        <li v-for="item in comment">
          <div class="oneBox">
            <div class="tpVideo">
              <div class="leftImg flex-box">
                <img src="../../assets/ico/video-ico-3.png" alt="">
                <h4 class="media_title">{{item.title}}</h4>
              </div>
              <div class="textInfo box-1">
                <p>{{item.content}}
                </p>
              </div>
              <div class="bookInfo flex-box">
                <div class="left">
                  <img src="./../../assets/img/banner-me-2.png" alt="">
                </div>
                <div class="right">
                  <h4 class="media_title">{{item.bookname}}</h4>
                  <p class="media_desc">{{item.author}}</p>
                </div>
              </div>
            </div>
            <div class="infor">
              <!--{{item.content}}-->
            </div>
          </div>
        </li>
        <li>
          <div class="oneBox">
            <div class="tpVideo">
              <div class="leftImg flex-box">
                <img src="../../assets/ico/video-ico-3.png" alt="">
                <h4 class="media_title">别看我只是一只羊别看我只是一只羊别看我只是一只羊别看我只是一只羊</h4>
              </div>
              <div class="textInfo box-1">
                <p>故事是以小王子和心爱的玫瑰花吵架而离开自己的星球之后的旅途为主线的，小王子在各个星球间旅行，遇见了许多形形色色的人，最后小王子来到了地球，遇见了一个童心未泯的飞行员和聪明善良的小狐...
                </p>
              </div>
              <div class="bookInfo flex-box">
                <div class="left">
                  <img src="./../../assets/img/banner-me-2.png" alt="">
                </div>
                <div class="right">
                  <h4 class="media_title">小王子</h4>
                  <p class="media_desc">圣埃克苏佩里</p>
                </div>
              </div>
            </div>
            <div class="infor">
              <!--{{item.content}}-->
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {formatDate} from '../../assets/js/formTime.js';
  import '../../assets/style/cubeNews.css'
  import loadingBar from '../components/loading.vue'
  import currSwiper from '../components/currSwiper.vue'
  import '../../assets/style/cubeRest.css'
  export default {
    name: 'Resources',
    data() {
      return{
        goodBook: [],//好书推荐
        newsBook: [],//新书推荐
        bookResoce: [],//阅读资源
        readUser: [],//阅读达人
        comment: [],//读书心得
        isLoading: true,
        resourceList: [],
        items: [1, 2, 3, 4, 5, 6],
        direction: "horizontal",
        options: {
//          scrollbar: {
//            fade: false
//          }
        },
        scrollX: true,
        scrollY: false,
        selectedLabelDefault: '商业付费',
        showSlider:false,
        tabs: [{
          label: '商业付费',
        }, {
          label: '专业',
        }, {
          label: '精准',
        },{
          label: '个性化'
        }]
      }
    },
    filters: {
      formatDate(time) {
        var date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd-hh:mm:ss');
      }
    },
    components: {
      loadingBar,
      currSwiper
    },
    created (){
      setTimeout(() => {
        this.isLoading = false
      }, 500)
    },
    methods: {
      getData (){
        this.http.get(this.ports.learning.Garden, res =>{
          console.log(res)
          if(res.status==200){
            const data = res.data
            this.goodBook = data.goodbook
            this.newsBook = data.newsbook
            this.bookResoce = data.bookresoce
            this.readUser = data.readuser
            this.comment = data.comment
          }
        })
      },
      clickHandler (label) {
        // if you clicked home tab, then print 'Home'
        console.log(label)
        this.$refs.tabbar.setSliderTransform(50)

      },
      changeHandler (label) {
        // if you clicked different tab, this methods can be emitted
      },
    },
    mounted (){
      this.getData()
    }
  }
</script>
<style scoped lang="less">
  .resourcesWrapper{
    background-color:#f5f5f5;
    font-size:28px;
    height:100%;
    .noUser{
      text-align: center;
      color:#bbb;
    }
    .resourBanner{
      position:relative;
      img{
        width:750px;
        height:345px;
      }
      .learningFd{
        width:710px;
        background-color:white;
        position:absolute;
        bottom:-60px;
        height:120px;
        left:20px;
        border-radius:10px;
        box-shadow:0 0 10px #aaa;
        align-items: center;
        justify-content: center;
        .left{
          padding:0 20px;
          border-right:1px solid #eee;
          justify-content: center;
          img{
            width:101px;
            height:77px;
          }
        }
        h1{
          text-align: left;
          margin-left:20px;
          font-size:32px;
        }
        p{
          text-align: left;
          margin-left:20px;
          color:#aaa;
          font-size:24px;
          margin-top:5px;
        }
        .right{
          justify-content: center;
          padding:0 20px;

          img{
            width:100px;
            height:62px;
          }
        }
      }
    }
    .airBox{
      background-color:white;
      padding:0;
      padding-top:90px;
      .titleBox{
        .left-ico i{
          width:32px;
          height:27px;
          background:url(../../assets/ico/res-ico-1.png) no-repeat center;
          background-size:100%;
        }
        margin-bottom:10px;
      }
      .airContent{
        padding:20px;
        padding-top:0;
        align-items: flex-start;
        .imgLeft{
          position:relative;
          img{
            width:168px;
            height:228px;
          }
          .rmSpan{
            position:absolute;
            left:0;
            top:0;
            width:82px;
            height:38px;
            line-height:38px;
            background:url(./../../assets/ico/rex-ico-1.png) no-repeat center;
            background-size:100%;
            text-align: center;
            color:white;
            font-size:20px;
          }
        }
        .textRight{
          text-align: left;
          margin-left:20px;
          h4{
            color:#010101;
            font-size:32px;
            line-height:1.8;
            span{
              /*display: inline-block;*/
              padding:0 10px;
              line-height:2;
              border-radius: 5px;
              color:white;
              background-color:#e60012;
              font-size:18px;
            }
          }
          .media_zz{
            font-size: 24px;
            color:#aaa;
          }
          h5{
            justify-content: space-between;
            margin:10px 0;
            span{
            }
            .res-ico-2{
              display: inline-block;
              width:37px;
              height:37px;
              background:url(../../assets/ico/res-ico-2.png) no-repeat center;
              background-size:100%;
              position:relative;top:8px;
            }
            b{
              color:#999999;
              position:relative;
              top:8px;
            }
          }
          h6{
            margin-top:15px;
            color:#999999;
          }
          .lookBook{
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            border:none;
            background-color:#f69704;
            color:white;
            text-align: center;
            display: inline-block;
            width:125px;
            height:50px;
            border-radius: 25px;
          }
        }
      }
      ul{
        padding:0 20px;
        li{
          position:relative;
          padding:30px 20px;
          background-color:#f5f5f5;
          margin-bottom:20px;
          h4{
            font-size:28px;
            color:#010101;
            margin-bottom:15px;
            width:80%;
            text-align: left;
          }
          h5{
            img{
              width:40px;
              height:40px;
              border-radius: 50%;
              margin-right:20px;
            }
            p{
              color:#909090;
              font-size:26px;
              text-align: left;
            }
          }
          .label{
            position:absolute;
            right:0;
            top:0;
            background-color:#009946;
            color:white;
            text-align: center;
            padding:5px 10px;
            font-size:24px;
            border-radius: 5px;
          }
        }
      }
    }
    .readBox{
      background-color:white;
      padding:10px 0;
      padding-top:0;
      position:relative;
      z-index: 2;
      .titleBox{
        .left-ico i{
          width:32px;
          height:27px;
          background:url(../../assets/ico/read-ico-1.png) no-repeat center;
          background-size:100%;
        }
      }
      .imgBox{
        position:relative;
        margin-bottom:10px;
        span{
          position:absolute;
          left:0;
          top:0;
          width:82px;
          height:38px;
          line-height:38px;
          background:url(./../../assets/ico/rex-ico-1.png) no-repeat center;
          background-size:100%;
          text-align: center;
          color:white;
          font-size:20px;
        }
        .rmSpan{
          position:absolute;
          left:0;
          top:0;
          width:82px;
          height:38px;
          line-height:38px;
          background:url(./../../assets/ico/rex-ico-1.png) no-repeat center;
          background-size:100%;
          text-align: center;
          color:white;
          font-size:20px;
        }
      }
      .banner{
        img{
          width:750px;
          height:200px;
        }
      }
      .scroll-list-wrap{
        padding:20px;
      }
    }
    .infoList3{
      background-color:white;
      margin-top:20px;
      padding:20px 0 10px 0;
      .titleBox{
        .left-ico i{
          width:32px;
          height:32px;
          background:url(../../assets/ico/res-ico-3.png) no-repeat center;
          background-size:100%;
        }
      }
      .textBox{
        padding:10px;
        padding-top:10px;
        overflow: hidden;
        .leftImg,.rightImg{
          width:50%;
          float:left;
          margin-bottom:10px;
        }
        .leftImg{
          text-align: left;
        }
        .rightImg{
          text-align: right;
        }
        img{
          width:363px;
          height:194px;
        }
      }
    }
    .voteContent{
      background-color:white;
      /*margin-top:20px;*/
      >h2{
        justify-content: space-between;
        padding:10px 20px;
        padding-bottom:20px;
        font-size:32px;
        .left-ico{
          i{
            width:32px;
            height:26px;
            background:url(./../../assets/ico/read-ico-2.png) no-repeat center;
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
    .comBox{
      background-color:white;
      margin-top:20px;
      padding-top:20px;
      h2{
        justify-content: space-between;
        padding:20px;
        font-size:32px;
        .left-ico{
          i{
            width:32px;
            height:28px;
            background:url(../../assets/ico/res-ico-4.png) no-repeat center;
            background-size:100%;
            margin-right:10px;
          }
        }
        .right-text{
          color:#bbbbbb;
          font-size:24px;
        }
      }
      .hotContent{
        ul{
          li{
            padding:20px;
            text-align: left;
            border-bottom:1px solid #eee;
            .left{
              img{
                width:100px;
                height:140px;
              }
            }
            .right{
              margin-left:20px;
              h4{
                font-size:30px;
              }
              p{
                font-size:26px;
                color:#bbbbbb;
              }
            }
            .media_title{
              font-size:30px;
              color:black;
              margin-bottom:20px;
            }
            .leftText{
              p{
                color:#909090;
                font-size:26px;
              }
              h6{
                color:#bbbbbb;
                font-size:24px;
                margin-top:10px;
                span{
                  margin-left:20px;
                }
              }
            }
            .rightImg{
              margin-left:20px;
              width:125px;
              height:125px;
            }
          }
        }
      }
    }
    .communtyBar{
      background-color:white;
      padding-bottom:10px;
    }
    .readHz{
      background-color:white;
      margin-top:20px;
      padding:10px 0;
      .scroll-list-wrap{
        ul{
          overflow: hidden;
          white-space: initial;
          li{
            margin-right:55px;
            float:left;
            margin-bottom:30px;
          }
          li:nth-child(3n){
            margin-right:0;
          }
        }
      }

    }
    .scroll-list-wrap{
      .list-wrapper{
        .noList{
          width:100%;
          font-size:26px;
          text-align: center;
          color:#999;
          h5{
            padding:10px;
          }
        }
        h3{
          white-space: nowrap;
        }
        p{
          /*white-space: normal;*/
          text-align: left;
          line-height:1.4;
        }
        h6{
          text-align: left;
          color:#e60012;
          font-size:24px;
          margin-top:5px;
        }
      }
    }
    .superBox{
      background-color:white;
      margin-top:20px;
      padding-top:20px;
      padding-bottom:30px;
      h2{
        justify-content: space-between;
        padding:20px;
        padding-bottom:10px;
        font-size:32px;
        .left-ico{
          i{
            width:32px;
            height:27px;
            background:url(../../assets/ico/res-ico-5.png) no-repeat center;
            background-size:100%;
            margin-right:10px;
          }
        }
        .right-text{
          color:#bbbbbb;
          font-size:24px;
        }
      }
      ul{
        li{
          background-color:white;
          padding:20px 30px;
          border-bottom:1px solid #eee;
          ul{
            li{
              margin-top:0;
              padding:0;
            }
          }
          .bookInfo{
            margin-left:80px;
            padding:20px;
            border:1px solid #eee;
            margin-top:20px;
            .left{
              img{
                width:80px;
                height:100px;
              }
            }
            .right{
              text-align: left;
              margin-left:20px;
              h4{
              }
              p{
                color:#bbbbbb;
                font-size:26px;
                margin-top:10px;
              }
            }
          }
          .oneBox{
            /*padding-bottom:20px;*/
            .tpVideo{
              .leftImg{
                img{
                  width:60px;
                  height:60px;
                  border-radius: 50%;
                }
                h4{
                  margin-left:20px;
                }
              }
              .textInfo{
                text-align: left;
                margin-left:80px;
                line-height:1.6;
                h4{
                  font-size:30px;
                  line-height:1.6;
                  margin-bottom:10px;
                }
                p{
                  color:#bbbbbb;
                  font-size:24px;
                  span{
                    margin-left:20px;
                  }
                }
              }
            }
            .infor{
              text-align: left;
              line-height:1.4;
              margin-top:20px;
            }
            .twoInfo{
              margin-top:10px;
              margin-left:60px;
              .twoP{
                margin-bottom:20px;
                border:none;
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

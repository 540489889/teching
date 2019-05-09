<template>
  <div class="resourcesWrapper meWrapper recommend-content">
    <loading-bar v-show="isLoading"></loading-bar>
    <div class="resourBanner">
      <img src="../../assets/img/resource-banner.png" alt="">
      <!--<curr-swiper :list="resourceList.banener"></curr-swiper>-->
      <div class="flex-box learningFd">
        <div class="left box-1 flex-box">
          <img src="./../../assets/ico/lear-1.png" alt="">
          <div class=" box-1">
            <h1>在线资源</h1>
            <p>免费公共资源</p>
          </div>
        </div>
        <div class="right box-1 flex-box">
          <img src="./../../assets/ico/lear-2.png" alt="">
          <div class=" box-1">
            <h1>空中课堂</h1>
            <p>直播课堂</p>
          </div>
        </div>
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
      <div class="airContent flex-box" v-if="new Date(item.begin_time*1000)< new Date()" v-for="item in resourceList.classroom" :key="item.id">
        <div class="imgLeft">
          <img :src="'http://cqeic.swkj2014.com'+item.picture"  alt="">
          <span class="rmSpan">热门</span>
        </div>
        <div class="textRight box-1">
          <h4 class="flex-box">
            <!--<span style="margin-right:10px;">直播中</span>-->
            <p class="media_title box-1">{{item.title}}读者2019年第三期(电子杂志)读者2019年第三期(电子杂志)</p>
          </h4>
          <h5 class="media_zz">读者2019年第三期(电子杂志)</h5>
          <!--<h5 class="flex-box"><span><i class="res-ico-2"></i>讲师：{{item.teacher}}老师</span> <b>{{item.online_num}}观看</b></h5>-->
          <h6 class="media_desc">{{item.description}}</h6>
          <button class="lookBook">阅读</button>
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
            <router-link tag="li" :key="item.id" :to="'/resource/bookDetails?eid='+item.id" v-for="(item,index) in resourceList.community" class="list-item">
              <div class="imgBox">
                <span class="rmSpan" v-if="index==0">热门</span>
                <span class="rzSpan" v-if="index==1">推荐</span>
                <img :src="'http://cqeic.swkj2014.com/'+item.cover_img" alt="">
              </div>
              <h3 class="media_desc">{{item.bookname}}</h3>
              <p class="media_title">{{item.title}}</p>
            </router-link>
            <router-link tag="li" :key="item.id" :to="'/resource/bookDetails?eid='+item.id" v-for="(item,index) in resourceList.community" class="list-item">
              <div class="imgBox">
                <span class="rmSpan" v-if="index==0">热门</span>
                <span class="rzSpan" v-if="index==1">推荐</span>
                <img :src="'http://cqeic.swkj2014.com/'+item.cover_img" alt="">
              </div>
              <h3 class="media_desc">{{item.bookname}}</h3>
              <p class="media_title">{{item.title}}</p>
            </router-link>
            <router-link tag="li" :key="item.id" :to="'/resource/bookDetails?eid='+item.id" v-for="(item,index) in resourceList.community" class="list-item">
              <div class="imgBox">
                <span class="rmSpan" v-if="index==0">热门</span>
                <span class="rzSpan" v-if="index==1">推荐</span>
                <img :src="'http://cqeic.swkj2014.com/'+item.cover_img" alt="">
              </div>
              <h3 class="media_desc">{{item.bookname}}</h3>
              <p class="media_title">{{item.title}}</p>
            </router-link>
          </ul>
        </cube-scroll>
      </div>
    </div>
    <!--公共资源-->
    <div class="comBox">
      <router-link tag="h2" to="/resource/presoceList" class="titleBox flex-box">
        <span class="left-ico flex-box">
          <!--<i class="ds-ico"></i>-->
          新书推荐</span>
        <span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>
      </router-link>
      <div class="hotContent">
        <ul>
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
        isLoading: false,
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
    methods: {
      getResources (){
        this.http.get(this.ports.resource.Resources, res =>{
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
      this.getResources()
    }
  }
</script>
<style scoped lang="less">
  .resourcesWrapper{
    background-color:#f5f5f5;
    font-size:28px;
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
      padding-top:100px;
      .titleBox{
        .left-ico i{
          width:32px;
          height:27px;
          background:url(../../assets/ico/res-ico-1.png) no-repeat center;
          background-size:100%;
        }
        margin-bottom:20px;
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
  }
</style>

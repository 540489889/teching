<template>
  <div class="resourcesWrapper meWrapper recommend-content">
    <loading-bar v-if="isLoading"></loading-bar>
    <div class="resourBanner">
      <!--<img src="../../assets/img/res-b-.png" alt="">-->
      <curr-swiper :list="resourceList.banener"></curr-swiper>
    </div>
    <!--空中课堂-->
    <div class="airBox">
      <router-link tag="h2" to="/resource/airRoom" class="titleBox flex-box">
        <span class="left-ico flex-box"><i class="ds-ico"></i>空中课堂</span>
        <span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>
      </router-link>
      <div class="airContent flex-box" v-if="new Date(item.begin_time*1000)< new Date()" v-for="item in resourceList.classroom" :key="item.id">
        <div class="imgLeft">
          <img :src="'http://cqeic.swkj2014.com'+item.picture"  alt="">
        </div>
        <div class="textRight box-1">
          <h4 class="flex-box"><span style="margin-right:10px;">直播中</span> <p class="media_title box-1">{{item.title}}</p></h4>
          <h5 class="flex-box"><span><i class="res-ico-2"></i>讲师：{{item.teacher}}老师</span> <b>{{item.online_num}}观看</b></h5>
          <h6 class="media_desc">{{item.description}}</h6>
        </div>
      </div>
      <ul>
        <li v-if="new Date(item.begin_time*1000)>new Date()" v-for="item in resourceList.classroom" :key="item.id">
          <span class="label">{{new Date(item.begin_time*1000) | formatDate}}</span>
          <h4 class="media_title text-left">{{item.title}}</h4>
          <h5 class="flex-box"><img src="../../assets/img/res-b-3.png" alt=""> <p class="box-1 media_title">讲师：{{item.teacher}}老师</p></h5>
        </li>
        <!--<li>-->
        <!--<span class="label">14:30</span>-->
        <!--<h4 class="media_title">【学习方法】怎样学好高中数学怎样学好高中数学 高中数学学习......</h4>-->
        <!--<h5 class="flex-box"><img src="../../assets/img/res-b-3.png" alt=""> <p class="box-1 media_title">讲师：美羊羊老师</p></h5>-->
        <!--</li>-->
        <!--<li>-->
        <!--<span class="label">14:30</span>-->
        <!--<h4 class="media_title">【学习方法】怎样学好高中数学怎样学好高中数学 高中数学学习......</h4>-->
        <!--<h5 class="flex-box"><img src="../../assets/img/res-b-3.png" alt=""> <p class="box-1 media_title">讲师：美羊羊老师</p></h5>-->
        <!--</li>-->
      </ul>
    </div>
    <!--阅读社区-->
    <div class="readBox">
      <router-link tag="h2" to="/resource/bookList" class="titleBox flex-box">
        <span class="left-ico flex-box"><i class="ds-ico"></i>阅读社区</span>
        <span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>
      </router-link>
      <div class="banner">
        <img src="../../assets/img/res-b-4.png" alt="">
      </div>
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
          </ul>
        </cube-scroll>
      </div>
    </div>
    <!--视频资源-->
    <div class="infoList3">
      <h2 class="titleBox flex-box">
        <span class="left-ico flex-box"><i class="ds-ico"></i>视频资源</span>
        <!--<span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>-->
      </h2>
      <div class="textBox flex-box">
        <router-link tag="div" :to="'/resource/videoList?type='+1" class="leftImg">
          <img src="../../assets/ico/mov-ico1.png" alt="">
        </router-link>
        <router-link tag="div" :to="'/resource/videoList?type='+2" class="rightImg">
          <img src="../../assets/ico/mov-ico2.png" alt="">
        </router-link>
      </div>
    </div>
    <!--公共资源-->
    <div class="comBox">
      <router-link tag="h2" to="/resource/presoceList" class="titleBox flex-box">
        <span class="left-ico flex-box"><i class="ds-ico"></i>公共资源</span>
        <span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>
      </router-link>
      <div class="hotContent">
        <ul>
          <router-link tag="li" :to="'/resource/presoceDetails?id='+item.id" v-for="item in resourceList.presoce" :key="item.id">
            <h4 class="media_title">{{item.title}}</h4>
            <div class="leftText flex-box">
              <div class="box-1">
                <p class="media_desc">
                  {{item.introduction}}
                </p>
              </div>
            </div>
          </router-link>
          <!--<li>-->
          <!--<h4 class="media_title">在2018-2019学年第二学期开学典礼上的讲话</h4>-->
          <!--<div class="leftText flex-box">-->
          <!--<div class="box-1">-->
          <!--<p class="media_desc">-->
          <!--学生可以下载优质的教学资源学习，记录自己的-->
          <!--学生可以下载优质的教学资源学习，记录自己的-->
          <!--学习笔记。系统会自动记录学生学习轨迹，帮-->
          <!--</p>-->
          <!--</div>-->
          <!--</div>-->
          <!--</li>-->
        </ul>
      </div>
    </div>
    <!--资源超市-->
    <div class="superBox">
      <h2 class="titleBox flex-box">
        <span class="left-ico flex-box"><i class="ds-ico"></i>资源超市</span>
        <!--<span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>-->
      </h2>
      <div class="communtyBar">
        <cube-tab-bar
          ref="tabbar"
          v-model="selectedLabelDefault"
          :data="tabs"
          @click="clickHandler"
          @change="changeHandler">
        </cube-tab-bar>
      </div>
      <div class="scroll-list-wrap">
        <cube-scroll
          ref="scroll"
          :data="items"
          direction="horizontal"
          :options="options">
          <ul class="list-wrapper" v-if="resourceList.market">
            <li v-if="resourceList.market.business" v-for="item in resourceList.market.business" class="list-item">
              <div class="imgBox">
                <img :src="'http://cqeic.swkj2014.com/'+item.cover_img" alt="">
              </div>
              <h3 class="media_title">{{item.title}}</h3>
              <p class="media_desc">{{item.introduction}}</p>
              <h6>￥{{item.money}}</h6>
            </li>
            <li class="noList" v-else>
              <h5>暂无数据...</h5>
            </li>
            <li v-if="selectedLabelDefault=='专业'" v-for="item in resourceList.market.major" class="list-item">
              <div class="imgBox">
                <img :src="'http://cqeic.swkj2014.com/'+item.cover_img" alt="">
              </div>
              <h3 class="media_title">{{item.title}}</h3>
              <p class="media_desc">{{item.introduction}}</p>
              <h6>￥{{item.money}}</h6>
            </li>
            <li class="noList" v-else>
              <h5>暂无数据...</h5>
            </li>
            <li v-if="selectedLabelDefault=='精准'" v-for="item in resourceList.market.accurate" class="list-item">
              <div class="imgBox">
                <img :src="'http://cqeic.swkj2014.com/'+item.cover_img" alt="">
              </div>
              <h3 class="media_title">{{item.title}}</h3>
              <p class="media_desc">{{item.introduction}}</p>
              <h6>￥{{item.money}}</h6>
            </li>
            <li class="noList" v-else>
              <h5>暂无数据...</h5>
            </li>
            <li v-if="selectedLabelDefault=='个性化'" v-for="item in resourceList.market.personality" class="list-item">
              <div class="imgBox">
                <img :src="'http://cqeic.swkj2014.com/'+item.cover_img" alt="">
              </div>
              <h3 class="media_title">{{item.title}}</h3>
              <p class="media_desc">{{item.introduction}}</p>
              <h6>￥{{item.money}}</h6>
            </li>
            <li class="noList" v-else>
              <h5>暂无数据...</h5>
            </li>
          </ul>
        </cube-scroll>
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
      img{
        width:750px;
        height:345px;
      }
    }
    .airBox{
      background-color:white;
      padding:10px 0;
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
          img{
            width:168px;
            height:228px;
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
      margin-top:20px;
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
            margin-bottom:20px;
            /*align-items: flex-end;*/
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

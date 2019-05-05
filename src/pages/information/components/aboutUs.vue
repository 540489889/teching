<template>
  <div class="fruitsWrapper aboutUs">
    <!--集体国家级-->
    <div class="fruits-list-1">
      <router-link  tag="h2" to="/information/brieList" class="titleBox flex-box">
        <span class="left-ico flex-box"><i class="ds-ico"></i>部门简介</span>
        <span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>
      </router-link>
      <ul>
        <router-link tag="li" :to="'/information/brieDetails?id='+item.id" :key="item.id" v-for="item in briefList.department">
          <div class="leftText flex-box">
            <!--<img class="rightImg" src="./../../../assets/img/th-b-1.png" alt="">-->
            <img class="rightImg" :src="'http://cqeic.swkj2014.com/'+item.cover_img" alt="">
            <div class="box-1">
              <h4 class="flex-box">
                <p class="box-1 media_desc">{{item.title}}</p>
                <!--<span class="style1">教育装备</span>-->
              </h4>
            </div>
          </div>
        </router-link>
      </ul>
    </div>
    <!--集体市级-->
    <div class="fruits-list-2 meWrapper">
      <h2 class="titleBox flex-box">
        <span class="left-ico flex-box"><i class="ds-ico"></i>职能职责</span>
        <!--<span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>-->
      </h2>
      <div class="scroll-list-wrap" style="padding-bottom:10px;">
        <cube-scroll
          ref="scroll"
          :data="briefList.Duty"
          direction="horizontal"
          :options="options">
          <ul class="list-wrapper flex-box" style="align-items: flex-start">
            <router-link tag="li" :to="'/information/brieDetails?id='+item.id" :key="item.id" v-for="item in briefList.Duty" class="list-item">
              <div class="">
                <div class="imgBox"><img :src="'http://cqeic.swkj2014.com/'+item.cover_img" alt=""></div>
                <div class="resitionBox">
                  <span class="label">{{item.label}}</span>
                  <h2 class="text-left media_title">{{item.name}}</h2>
                  <h3 class="media_desc">{{item.title}}</h3>
                </div>
              </div>
            </router-link>
          </ul>
        </cube-scroll>
      </div>
    </div>
  </div>
</template>
<script>
  import './../../../assets/style/cubeRest.css'
  export default {
    name: 'listFruits',
    data (){
      return {
        items: [1, 2, 3, 4, 5, 6],
        direction: "horizontal",
        options: {
//          scrollbar: {
//            fade: false
//          }
        },
        scrollX: true,
        scrollY: false,

      }
    },
    props: {
      briefList: Object
    },
    methods: {
      clickHandler (label) {
        // if you clicked home tab, then print 'Home'
        console.log(label)
        this.$refs.tabbar.setSliderTransform(50)

      },
      changeHandler (label) {
        // if you clicked different tab, this methods can be emitted
      },
    }
  }
</script>
<style lang="less" scoped>
  .fruitsWrapper{
    .resitionBox{
      position:relative;
      .label{
        position:absolute;
        top:-60px;
        left:0;
        background-color:#ffb631;
        color:white;
        height:40px;
        line-height:40px;
        display: block;
        padding:0 10px;
        text-align: center;
      }
      /*.media_desc{*/
        /*height:65px;*/
        /*overflow: hidden;*/
      /*}*/
    }
    .fruits-list-1{
      margin-top:20px;
      background-color:white;
      .titleBox{
        .left-ico i{
          width:32px;
          height:32px;
          background:url(../../../assets/ico/us-ico-1.png) no-repeat center;
          background-size:100%;
        }
      }
      ul{
        li{
          padding:20px;
          border-bottom:1px solid #eee;
          .leftText{
            text-align: left;
            .rightImg{
              width:120px;
              height:120px;
              margin-right:20px;
              border-radius: 5px;
            }
            h4{
              margin-bottom:10px;
              .media_desc{
                color:#010101;
                font-size:30px;
              }
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
    .fruits-list-2{
      margin-top:20px;
      background-color:white;
      .titleBox{
        .left-ico i{
          width:40px;
          height:45px;
          background:url(../../../assets/ico/suog-ico-2.png) no-repeat center;
          background-size:100%;
        }
      }
    }
    .fruits-list-3{
      margin-top:20px;
      background-color:white;
      .titleBox{
        .left-ico i{
          width:40px;
          height:45px;
          background:url(../../../assets/ico/suog-ico-3.png) no-repeat center;
          background-size:100%;
        }
      }
      ul{
        padding:0 20px;
        li{
          text-align: left;
          font-size:30px;
          padding:30px 0;
          border-bottom:1px solid #eee;
        }
        li:last-child{
          border:none;
        }
      }
    }
    .fruits-list-4{
      margin-top:20px;
      background-color:white;
      .titleBox{
        .left-ico i{
          width:40px;
          height:45px;
          background:url(../../../assets/ico/suog-ico-4.png) no-repeat center;
          background-size:100%;
        }
      }
    }
    .fruits-list-5{
      .titleBox{
        .left-ico i{
          background:url(../../../assets/ico/suog-ico-5.png) no-repeat center;
          background-size:100%;
        }
      }
    }
  }
</style>

<template>
  <div class="fruitsWrapper">
    <!--集体国家级-->
    <div class="fruits-list-1">
      <router-link tag="h2" :to="'/information/fruitsList?type='+1" class="titleBox flex-box">
        <span class="left-ico flex-box"><i class="ds-ico"></i>集体国家级</span>
        <span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>
      </router-link>
      <ul>
        <router-link tag="li" :to="'/information/fruitsDetails?id='+item.id" v-for="item in InfoAward.Country" :key="item.id">
          <div class="leftText flex-box">
            <img class="rightImg" :src="'http://cqeic.swkj2014.com/'+item.cover_img" alt="">
            <div class="box-1">
              <h4 class="flex-box">
                <p class="box-1 media_desc">{{item.title}}</p>
                <!--<span class="style1">教育装备</span>-->
              </h4>
            </div>
          </div>
        </router-link>
        <!--<li>-->
          <!--<div class="leftText flex-box">-->
            <!--<img class="rightImg" src="./../../../assets/img/th-b-1.png" alt="">-->
            <!--<div class="box-1">-->
              <!--<h4 class="flex-box">-->
                <!--<p class="box-1 media_desc">在2018-2019学年第二学期开学典礼上的讲话2019学年第二学期开学典礼上的讲话2019学年第二学期开学典礼上的讲话</p>-->
                <!--&lt;!&ndash;<span class="style2">教育装备</span>&ndash;&gt;-->
              <!--</h4>-->
            <!--</div>-->
          <!--</div>-->
        <!--</li>-->
      </ul>
    </div>
    <!--集体市级-->
    <div class="fruits-list-2 meWrapper">
      <router-link tag="h2" :to="'/information/fruitsList?type='+2" class="titleBox flex-box">
        <span class="left-ico flex-box"><i class="ds-ico"></i>集体市级</span>
        <span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>
      </router-link>
      <div class="scroll-list-wrap" style="padding-bottom:10px;">
        <cube-scroll
          ref="scroll"
          :data="InfoAward.city"
          direction="horizontal"
          :options="options">
          <ul class="list-wrapper">
            <router-link tag="li"  :to="'/information/fruitsDetails?id='+item.id" :key="item.id" v-for="item in InfoAward.city" class="list-item">
              <div class="flex-box">
                <div class="imgBox"><img :src="'http://cqeic.swkj2014.com/'+item.cover_img"  alt=""></div>
                <div class="box-1">
                  <h3 class="media_desc">{{item.title}}</h3>
                </div>
              </div>
            </router-link>
          </ul>
        </cube-scroll>
      </div>
      <!--<div class="scroll-list-wrap" style="padding-bottom:10px;padding-top:10px;border-top:1px solid #eee;">-->
        <!--<cube-scroll-->
          <!--ref="scroll"-->
          <!--:data="items"-->
          <!--direction="horizontal"-->
          <!--:options="options">-->
          <!--<ul class="list-wrapper">-->
            <!--<li v-for="item in items" class="list-item">-->
              <!--<div class="flex-box">-->
                <!--<div class="imgBox"><img src="./../../../assets/img/th-b-1.png" alt=""></div>-->
                <!--<div class="box-1">-->
                  <!--<h3 class="media_desc">我市在第十五届全国中小-->
                    <!--学校园影视评选活动中...我市在第十五届全国中小-->
                    <!--学校园影视评选活动中...</h3>-->
                <!--</div>-->
              <!--</div>-->
            <!--</li>-->
          <!--</ul>-->
        <!--</cube-scroll>-->
      <!--</div>-->
    </div>
    <!--集体区级-->
    <div class="fruits-list-3">
      <router-link tag="h2" :to="'/information/fruitsList?type='+3" class="titleBox flex-box">
        <span class="left-ico flex-box"><i class="ds-ico"></i>集体区级</span>
        <span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>
      </router-link>
      <ul>
        <router-link tag="li" :to="'/information/fruitsDetails?id='+item.id" v-for="item in InfoAward.area" :key="item.id">{{item.title}}</router-link>
        <!--<li>九龙坡区校园影视作品获全国“金犊奖”</li>-->
        <!--<li>北碚区举办2018年（下半年）青少年科技模型大赛</li>-->
      </ul>
    </div>
    <!--个人-->
    <div class="fruits-list-1 fruits-list-4">
      <div v-if="selectedLabelDefault=='国家级'">
        <router-link tag="h2" :to="'/information/fruitsList?type='+4" class="titleBox flex-box">
          <span class="left-ico flex-box"><i class="ds-ico"></i>个人</span>
          <span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>
        </router-link>
      </div>
      <div v-if="selectedLabelDefault=='市级'">
        <router-link tag="h2" :to="'/information/fruitsList?type='+5" class="titleBox flex-box">
          <span class="left-ico flex-box"><i class="ds-ico"></i>个人</span>
          <span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>
        </router-link>
      </div>
      <div v-if="selectedLabelDefault=='区级'">
        <router-link tag="h2" :to="'/information/fruitsList?type='+6" class="titleBox flex-box">
          <span class="left-ico flex-box"><i class="ds-ico"></i>个人</span>
          <span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>
        </router-link>
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
      <ul>
        <router-link tag="li"  :to="'/information/fruitsDetails?id='+item.id" v-if="selectedLabelDefault=='国家级'" v-for="item in InfoAward.persCountry" :key="item.id">
          <div class="leftText flex-box">
            <img  class="rightImg" :src="'http://cqeic.swkj2014.com/'+item.cover_img"  alt="">
            <div class="box-1">
              <h4 class="flex-box">
                <p class="box-1 media_desc">{{item.title}}</p>
                <!--<span class="style1">教育装备</span>-->
              </h4>
            </div>
          </div>
        </router-link>
        <router-link tag="li"  :to="'/information/fruitsDetails?id='+item.id" v-if="selectedLabelDefault=='市级'" v-for="item in InfoAward.persCity" :key="item.id">
          <div class="leftText flex-box">
            <img  class="rightImg" :src="'http://cqeic.swkj2014.com/'+item.cover_img"  alt="">
            <div class="box-1">
              <h4 class="flex-box">
                <p class="box-1 media_desc">{{item.title}}</p>
                <!--<span class="style1">教育装备</span>-->
              </h4>
            </div>
          </div>
        </router-link>
        <router-link tag="li"  :to="'/information/fruitsDetails?id='+item.id" v-if="selectedLabelDefault=='区级'" v-for="item in InfoAward.persArea" :key="item.id">
          <div class="leftText flex-box">
            <img  class="rightImg" :src="'http://cqeic.swkj2014.com/'+item.cover_img"  alt="">
            <div class="box-1">
              <h4 class="flex-box">
                <p class="box-1 media_desc">{{item.title}}</p>
                <!--<span class="style1">教育装备</span>-->
              </h4>
            </div>
          </div>
        </router-link>
        <!--<li v-if="!persList.length">-->
          <!--<h2 class="noList">暂无数据...</h2>-->
        <!--</li>-->
      </ul>
    </div>
    <!--建设成果-->
    <div class="fruits-list-3 fruits-list-5">
      <router-link tag="h2" :to="'/information/fruitsList?type='+7" class="titleBox flex-box">
        <span class="left-ico flex-box"><i class="ds-ico"></i>建设成果</span>
        <span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>
      </router-link>
      <ul>
        <router-link tag="li" :to="'/information/fruitsDetails?id='+item.id" v-for="item in InfoAward.build" :key="item.id">{{item.title}}</router-link>
      </ul>
    </div>
  </div>
</template>
<script>
  import './../../../assets/style/cubeNews.css'
  import './../../../assets/style/cubeRest.css'
  export default {
    name: 'listFruits',
    data (){
      return {
        items: [1],
        direction: "horizontal",
        options: {
//          scrollbar: {
//            fade: false
//          }
        },
        scrollX: true,
        scrollY: false,
        selectedLabelDefault: '国家级',
        showSlider:false,
        tabs: [{
          label: '国家级',
        }, {
          label: '市级',
        }, {
          label: '区级',
        }],
        persList: []
      }
    },
    props: {
      InfoAward: Object
    },
    methods: {
      persInit(){

      },
      clickHandler (label) {
        // if you clicked home tab, then print 'Home'
        console.log(label)
        this.$refs.tabbar.setSliderTransform(50)
        if(label=='国家级'){
          this.persList = this.InfoAward.persCountry
        }
        if(label=='市级'){
          this.persList = this.InfoAward.persCity
        }
        if(label=='区级'){
          this.persList = this.InfoAward.persArea
        }
      },
      changeHandler (label) {
        console.log(this.InfoAward,123)
        this.persList = this.InfoAward.persCountry
        // if you clicked different tab, this methods can be emitted
      },
    },
    mounted(){
    }
  }
</script>
<style lang="less" scoped>
  .fruitsWrapper{
    .fruits-list-1{
      margin-top:20px;
      background-color:white;
      .titleBox{
        .left-ico i{
          width:40px;
          height:45px;
          background:url(../../../assets/ico/suog-ico-1.png) no-repeat center;
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

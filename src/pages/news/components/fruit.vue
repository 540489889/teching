<template>
  <div class="fruitsWrapper">
    <div class="fruits-list-1">
      <router-link tag="h2" :to="'/news/fruitsList?type='+1" class="titleBox flex-box">
        <span class="left-ico flex-box">
          <!--<i class="ds-ico"></i>-->
          成果展示</span>
        <span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>
      </router-link>
      <ul>
        <router-link tag="li" :to="'/information/fruitsDetails?id='+item.id" v-for="item in noticeList" :key="item.id">
          <div class="leftText flex-box">
            <img class="rightImg" :src="$store.state.IMGPATH+item.cover_img" alt="">
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
  </div>
</template>
<script>
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
      }
    },
    props: {
      noticeList: Array
    },
    methods: {
    },
    mounted(){
    }
  }
</script>
<style lang="less" scoped>
  .fruitsWrapper{
    overflow: hidden;
    .fruits-list-1{
      padding-top:10px;
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
  }
</style>

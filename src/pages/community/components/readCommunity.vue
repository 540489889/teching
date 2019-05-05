<template>
  <div class="readWrapper">
    <div class="readTimg"><img src="./../../../assets/img/read-t-img.png" alt=""></div>
    <advert-swiper></advert-swiper>
    <div class="readContent">
      <!--阅读资源-->
      <div class="meWrapper readBox">
        <h2 class="flex-box">
          <span class="left-ico flex-box"><i class="ds-ico"></i>热门推荐</span>
          <span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>
        </h2>
        <div class="readResources flex-box">
          <div class="imgLeft"><img src="./../../../assets/img/read-b-img-1.png" alt=""></div>
          <div class="textRight box-1">
            <h4 class="media_title">读者2019年第三期(电子杂志)</h4>
            <h6 class="media_title">读者出版传媒股份有限公司</h6>
            <p class="media_desc">读者2019年第三期,《真理这样的存在》罗素说，不管你是在研究事物，还是在...</p>
            <div class="readBtn"><a>阅读</a></div>
          </div>
        </div>
        <div class="scroll-list-wrap">
          <cube-scroll
            ref="scroll"
            :data="items"
            direction="horizontal"
            :options="options">
            <ul class="list-wrapper">
              <li v-for="item in items" class="list-item">
                <div class="imgBox"><img src="../../../assets/img/banner-me-1.png" alt=""></div>
                <h3 class="media_desc">同理心：做个让人舒服的做个让人舒服的做个让人舒服的</h3>
                <p class="media_title">霍华德·本内特霍华德·本内特</p>
              </li>
            </ul>
          </cube-scroll>
        </div>
      </div>
      <!--投票-->
      <div class="meWrapper voteContent">
        <h2 class="flex-box">
          <span class="left-ico flex-box"><i class="ds-ico"></i>投票</span>
          <span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>
        </h2>
        <div class="voteBox">
          <h1 class="flex-box">#十佳社区成员# <span>进行中</span></h1>
          <div class="scroll-list-wrap">
            <cube-scroll
              ref="scroll"
              :data="items"
              direction="horizontal"
              :options="options">
              <ul class="list-wrapper">
                <li v-for="item in items" class="list-item">
                  <div class="imgBox"><img src="../../../assets/img/banner-me-1.png" alt=""></div>
                  <h3 class="media_title">同理心做个让人舒服的做个让人舒服的做个让人舒服的</h3>
                  <p class="media_title">霍华德·本内特霍华德·本内特</p>
                </li>
              </ul>
            </cube-scroll>
          </div>
        </div>
      </div>
      <!--交流社区-->
      <div class="communionContent">
        <h2 class="flex-box">
          <span class="left-ico flex-box"><i class="ds-ico"></i>交流社区</span>
          <span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>
        </h2>
        <div class="hotContent">
          <ul>
            <li>
              <h4 class="media_title"><span>置顶</span>在2018-2019学年第二学期开学典礼上的讲话</h4>
              <div class="leftText flex-box">
                <div class="box-1">
                  <p class="media_desc">
                    学生可以下载优质的教学资源学习，记录自己的
                    学生可以下载优质的教学资源学习，记录自己的
                    学习笔记。系统会自动记录学生学习轨迹，帮
                  </p>
                  <h6>2019.02.21 09:52:11 <span>1234回答</span></h6>
                </div>
                <img class="rightImg" src="./../../../assets/img/th-b-1.png" alt="">
              </div>
            </li>
            <li>
              <h4 class="media_title"><span>热门</span>在2018-2019学年第二学期开学典礼上的讲话</h4>
              <div class="leftText flex-box">
                <div class="box-1">
                  <p class="media_desc">
                    学生可以下载优质的教学资源学习，记录自己的
                    学生可以下载优质的教学资源学习，记录自己的
                    学习笔记。系统会自动记录学生学习轨迹，帮
                  </p>
                  <h6>2019.02.21 09:52:11 <span>1234回答</span></h6>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import './../../../assets/style/cubeRest.css'
  import advertSwiper from './../../components/advertSwiper.vue'
  export default {
    name:"readCommunity",
    data(){
      return{
        searchVal: '',
        items: [1, 2, 3, 4, 5, 6],
        direction: "horizontal",
        options: {
//          scrollbar: {
//            fade: false
//          }
        },
        scrollX: true,
        scrollY: false
      }
    },
    components:{
      advertSwiper
    }
  }
</script>

<style lang="less" scoped>
  .readWrapper{
    .readTimg{
      img{
        width:100%;
      }
    }
    .readContent{
      .readBox{
        margin-top:20px;
        margin-bottom:20px;
        padding-bottom:30px;
        background-color:white;
        >h2{
          justify-content: space-between;
          padding:20px;
          padding-bottom:0;
          padding-top:30px;
          font-size:32px;
          .left-ico{
            i{
              width:23px;
              height:27px;
              background:url(./../../../assets/ico/read-ico-1.png) no-repeat center;
              background-size:100%;
              margin-right:10px;
            }
          }
          .right-text{
            color:#bbbbbb;
            font-size:24px;
          }
        }
        .readResources{
          padding:30px;
          align-items: flex-start;
          .imgLeft{
            img{
              width:174px;
              height:244px;
            }
          }
          .textRight{
            margin-left:10px;
            text-align: left;
            h4{
              font-size:32px;
            }
            h6{
              font-size:22px;
              color:#909090;
              line-height:1.4;
              margin:10px 0 20px 0;
            }
            p{
              color:#999999;
              font-size:28px;
            }
            .readBtn{
              margin-top:20px;
              a{
                display: inline-block;
                width:130px;
                height:50px;
                line-height:50px;
                border-radius: 25px;
                color:white;
                text-align: center;
                background-color:#f69704;
              }
            }
          }
        }
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
            width:32px;
            height:26px;
            background:url(./../../../assets/ico/read-ico-2.png) no-repeat center;
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
    .communionContent{
      background-color:white;
      margin-top:20px;
      margin-bottom:20px;
      >h2{
        justify-content: space-between;
        padding:20px;
        padding-top:30px;
        font-size:32px;
        .left-ico{
          i{
            width:32px;
            height:30px;
            background:url(./../../../assets/ico/title-ico-l-3.png) no-repeat center;
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
              span{
                color:white;
                background-color:#e60012;
                font-size:22px;
                padding:10px 10px 5px 10px;
                border-radius: 10px;
                margin-right:10px;
              }
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

  }
</style>

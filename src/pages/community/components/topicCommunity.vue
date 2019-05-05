<template>
  <div class="topicWrapper">
    <!--主题分类-->
    <div class="themeObj">
      <h2 class="flex-box">
        <span class="left-ico flex-box"><i class="ds-ico"></i>主题分类</span>
        <!--<span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>-->
      </h2>
      <div class="thomeContent">
        <ul class="flex-box">
          <li>
            <div class="textBox">
              <img src="./../../../assets/img/th-b-1.png" alt="">
              <h4 class="media_title">校园成长</h4>
            </div>
          </li>
          <li>
            <div class="textBox">
              <img src="./../../../assets/img/th-b-1.png" alt="">
              <h4 class="media_title">校园成长</h4>
            </div>
          </li>
          <li>
            <div class="textBox">
              <img src="./../../../assets/img/th-b-1.png" alt="">
              <h4 class="media_title">校园成长校园成长</h4>
            </div>
          </li>
          <li>
            <div class="textBox">
              <img src="./../../../assets/img/th-b-1.png" alt="">
              <h4 class="media_title">校园成长校园成长</h4>
            </div>
          </li>
          <li>
            <div class="textBox">
              <img src="./../../../assets/img/th-b-1.png" alt="">
              <h4 class="media_title">校园成长校园成长</h4>
            </div>
          </li>
          <li>
            <div class="textBox">
              <img src="./../../../assets/img/th-b-1.png" alt="">
              <h4 class="media_title">校园成长</h4>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!--热门推荐-->
    <div class="hotGroom">
      <h2 class="flex-box">
        <span class="left-ico flex-box"><i class="ds-ico"></i>热门推荐</span>
        <span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>
      </h2>
      <div class="hotContent">
        <ul>
          <li>
            <h4 class="media_title">在2018-2019学年第二学期开学典礼上的讲话</h4>
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
            <h4 class="media_title">在2018-2019学年第二学期开学典礼上的讲话</h4>
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
</template>
<script>
  export default {
    name: 'topicCommunity',
    data (){
      return {

      }
    }
  }
</script>
<style lang="less" scoped>
  .topicWrapper{
    .themeObj{
      background-color:white;
      margin:20px auto;
      h2{
        justify-content: space-between;
        padding:20px;
        font-size:32px;
        .left-ico{
          i{
            width:28px;
            height:25px;
            background:url(./../../../assets/ico/title-ico-l-1.png) no-repeat center;
            background-size:100%;
            margin-right:10px;
          }
        }
        .right-text{
          color:#bbbbbb;
          font-size:24px;
        }
      }
      .thomeContent{
        ul{
          flex-wrap: wrap;
          padding-bottom:10px;
          li{
            width:20%;
            padding:10px 20px;
            box-sizing: border-box;
            text-align: center;
            .textBox{
              overflow: hidden;
              img{
                width:100%;
              }
              h4{
                line-height:1.4;
                color:#666666;
              }
            }
          }
        }
      }
    }
    .hotGroom{
      background-color:white;
      h2{
        justify-content: space-between;
        padding:20px;
        font-size:32px;
        .left-ico{
          i{
            width:23px;
            height:32px;
            background:url(./../../../assets/ico/title-ico-l-2.png) no-repeat center;
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
  }
</style>

<template>
  <div class="airRoom recommend-content">
    <loading-bar v-show="isLoading"></loading-bar>
    <!--空中课堂-->
    <div class="airBox">
      <div class="airContent flex-box"  v-if="new Date(item.begin_time*1000)< new Date()" v-for="item in list" :key="item.id">
        <div class="imgLeft">
          <img :src="'http://cqeic.swkj2014.com'+item.picture"  alt="">
        </div>
        <div class="textRight box-1">
          <h4 class="flex-box"><span style="margin-right:10px;">直播中</span> <p class="media_title box-1">{{item.title}}</p></h4>
          <h5 class="flex-box"><span><i class="res-ico-2"></i>讲师：{{item.teacher}}老师</span> <b>{{item.online_num}}观看</b></h5>
          <h6 class="media_desc">{{item.description}}</h6>
        </div>
      </div>
      <h2 class="titleBox flex-box">
        <span class="left-ico flex-box"><i class="ds-ico"></i>直播预告</span>
        <!--<span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>-->
      </h2>
      <ul>
        <li  v-if="new Date(item.begin_time*1000)> new Date()" v-for="item in list" :key="item.id">
          <span class="label">{{new Date(item.begin_time*1000) | formatDate}}</span>
          <h4 class="media_title">{{item.title}}</h4>
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
  </div>
</template>
<script>
  import {formatDate} from '../../assets/js/formTime.js';
  import loadingBar from '../components/loading.vue'
  export default {
    name:'airRoom',
    data(){
      return{
        isLoading: true,
        list: []
      }
    },
    components: {
      loadingBar
    },
    filters: {
      formatDate(time) {
        var date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd-hh:mm:ss');
      }
    },
    methods: {
      getClassroom (){
        this.http.get(this.ports.resource.Classroom, res =>{
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
    },
    mounted(){
      this.getClassroom()
    }
  }
</script>
<style lang="less" scoped>
  .airRoom{
    background-color:#f5f5f5;
    .airBox{
      padding:10px 0;
      .titleBox{
        margin-top:20px;
        background-color:white;
        .left-ico i{
          width:21px;
          height:32px;
          background:url(../../assets/ico/aroom-ico-1.png) no-repeat center;
          background-size:100%;
        }
      }
      .airContent:first-child{
        padding-top:20px;
      }
      .airContent{
        background-color:white;
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
            margin-top:20px;
            color:#999999;
            font-size:26px;
          }
        }
      }
      ul{
        background-color:white;
        padding:0 20px;
        padding-bottom:10px;
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
  }
</style>

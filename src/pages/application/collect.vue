<template>
  <div class="collectWrapper recommend-content">

    <ul>
      <router-link tag="li" :to="'/application/collectDetails?id='+item.id" v-for="item in list" :key="item.id">
        <h4 class="flex-box">{{item.title}}
          <span  v-if="item.end_time > formatDate1(new Date())" class="activeDot">进行中</span>
          <span  v-if="item.end_time < formatDate1(new Date())" class="activeDot noDot">已结束</span>

        </h4>
        <p>{{item.update}}</p>
        <img :src="'http://cqeic.swkj2014.com/'+item.cover_img" alt="">
      </router-link>
      <!--<li>-->
        <!--<h4 class="flex-box">中学生消费情况调查报告 <span class="activeDot noDot">已结束</span></h4>-->
        <!--<p>2019.02.21 09:52:11</p>-->
        <!--<img src="./../../assets/img/collect-b-1.png" alt="">-->
      <!--</li>-->
    </ul>
  </div>
</template>
<script>
  import loadingBar from './../components/loading'
  import {formatDate} from '../../assets/js/formTime.js';
  export default {
    name:'Collect',
    data (){
      return{
        isLoading: false,
        list: []
      }
    },
    filters: {
      formatDate(time) {
        var date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd-hh:mm:ss');
      }
    },
    components: {
      loadingBar
    },
    methods: {
      formatDate1(time) {
        var date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd-hh:mm:ss');
      },
      getSurvey(){
//        let type = this.$route.query.type
        this.http.get(this.ports.application.survey,res=>{
          console.log(res)
          setTimeout(() => {
            this.isLoading = false
          }, 500)
          if(res.status==200){
            const data = res.data
            this.list = data
          }
        })
      }
    },
    mounted (){
      this.getSurvey()
    }
  }
</script>
<style lang="less" scoped>
  .collectWrapper{
    font-size:24px;
    ul{
      li{
        background-color:white;
        text-align: left;
        padding:20px;
        margin-top:20px;
        h4{
          font-size:30px;
          margin-bottom:20px;
          .activeDot{
            color:white;
            font-size:18px;
            background-color:#e60012;
            padding:8px 10px 8px 20px;
            border-radius: 5px;
            position:relative;
            margin-left:20px;
          }
          .noDot{
            background-color:#bbbbbb;
          }
          .activeDot::before{
            content: "";
            display: inline-block;
            width:5px;
            height:5px;
            border-radius: 50%;
            background-color:white;
            position:absolute;
            top:50%;
            left:10px;
            transform: translateY(-50%);
          }
        }
        p{
          color:#bbbbbb;
          margin-bottom:20px;
        }
        img{
          width:100%;
          height:300px;
        }
      }
    }
  }
</style>

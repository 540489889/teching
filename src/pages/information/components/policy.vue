<template>
  <div class="infoList5">
    <ul>
      <router-link tag="li" :to="'./lawasList?type='+item.type" v-for="item in lawsIndex" :key="item.type">
        <img :src="'http://cqeic.swkj2014.com/'+item.img" v-if="item.img" alt="">
        <!--<img v-else src="'./../../assets/ico/mr-img-1.png'" alt="">-->
        <h4 class="media_title">{{item.name}}</h4>
        <!--<h6 class="media_title">{{item.introduction}}</h6>-->
        <p>{{item.seenum}}人观看</p>
      </router-link>
      <li class="noList" v-show="!lawsIndex.length">
        <h2>暂无数据...</h2>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'policy',
    data (){
      return {

      }
    },
    props: {
      lawsIndex: Array
    }
  }
</script>
<style lang="less" scoped>
  .infoList5{
    background-color:white;
    margin-top:20px;
    padding:20px 0;
    .titleBox{
      .left-ico i{
        width:32px;
        height:32px;
        background:url(./../../../assets/ico/info-t-5.png) no-repeat center;
        background-size:100%;
      }
    }
    ul{
      overflow: hidden;
      padding:0 20px;
      .noList{
        width:100%;
        padding-top:10px;
        text-align: center;
      }
      li{
        .noList{
          text-align: center;
        }
        box-sizing: border-box;
        float:left;
        width:50%;
        text-align: left;
        margin-bottom:20px;
        img{
          width:345px;
          height:200px;
          border-radius: 5px;
        }
        h4{
          font-size:28px;
          margin:10px 0 10px 0;
          text-align: left;
        }
        h6{
          line-height:1.6;
          font-size:26px;
          color:#909090;
        }
        p{
          color:#909090;
          font-size:22px;
        }
      }
      li:nth-child(odd){
        padding-right:10px;
      }
      li:nth-child(even){
        padding-left:10px;
      }
    }
  }
</style>

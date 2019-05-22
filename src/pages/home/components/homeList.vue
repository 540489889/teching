<template>
  <div class="indexList">
    <ul class="flex-box">
      <!--<li><router-link tag="span" to="/informatization/index">技术装备</router-link></li>-->
      <li><router-link tag="span" to="/tEquipment/index">技术装备</router-link></li>
      <li><router-link tag="span" to="/news/index">新闻资讯</router-link></li>
      <li><router-link tag="span" to="/learning/index">学习园地</router-link></li>
      <li><router-link tag="span" to="/specialActive/index">专题活动</router-link></li>
      <li><router-link tag="span" to="/dataCenter/index">数据中心</router-link></li>
      <li><router-link tag="span" to="/technology/index">计装之家</router-link></li>
    </ul>
  </div>
</template>
<style scoped lang="less">
  .indexList{
    padding:20px 0;
    background-color:white;
    margin-top:20px;
    margin-bottom:50px;
    color:transparent;
    ul{
      padding-top:20px;
      flex-wrap: wrap;
      li{
        margin-bottom:0;
        width:33.3%;
        text-align: center;
        span{
          display: block;
          width:244px;
          height:230px;
        }
      }
      li:nth-child(1){
        background:url(./../../../assets/ico/index-l-1.png) no-repeat center;
        background-size:100%;
      }
      li:nth-child(2){
        background:url(./../../../assets/ico/index-l-2.png) no-repeat center;
        background-size:100%;
      }
      li:nth-child(3){
        background:url(./../../../assets/ico/index-l-3.png) no-repeat center;
        background-size:100%;
      }
      li:nth-child(4){
        background:url(./../../../assets/ico/index-l-4.png) no-repeat center;
        background-size:100%;
      }
      li:nth-child(5){
        background:url(./../../../assets/ico/index-l-5.png) no-repeat center;
        background-size:100%;
      }
      li:nth-child(6){
        background:url(./../../../assets/ico/index-l-6.png) no-repeat center;
        background-size:100%;
      }
    }
  }
</style>
<script>
  export default {
    name:'searchBar',
    data () {
      return {
        searchVal: '',
      }
    },
    methods: {
    },
    mounted (){
    }
  }
</script>

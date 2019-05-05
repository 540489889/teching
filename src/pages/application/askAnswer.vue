<template>
  <div class="askWrapper recommend-content">
    <loading-bar v-show="isLoading"></loading-bar>
    <search-bar :showSearchBtn="showSearchBtn" :showSearchVal="showSearchVal"></search-bar>
    <!--精选问答-->
    <div class="selectedWd">
      <!--<router-link tag="h2" to="" class="titleBox flex-box">-->
        <!--<span class="left-ico flex-box"><i class="ds-ico"></i>精选问答</span>-->
        <!--<span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>-->
      <!--</router-link>-->
      <ul>
        <router-link tag="li" :to="'/application/askDetails?id='+item.id" class="flex-box" v-for="(item,index) in list" :key="item.id">
          <span class="leftText" v-if="index==0">热门</span>
          <span class="leftText" v-if="index==1">推荐</span>
          <span v-else></span>
          <div class="rightText">
            <h4 class="media_title">{{item.title}}</h4>
            <p>{{item.update}} <span>{{item.comnum}} 回答</span></p>
          </div>
        </router-link>
        <!--<li class="flex-box">-->
          <!--<span class="leftText">推荐</span>-->
          <!--<div class="rightText">-->
            <!--<h4 class="media_title">九龙坡区“科技艺体”联盟第三次活动在什么...</h4>-->
            <!--<p>2019.02.21 09:52:11 <span>1234回答</span></p>-->
          <!--</div>-->
        <!--</li>-->
        <!--<li class="flex-box">-->
          <!--&lt;!&ndash;<span class="leftText">问</span>&ndash;&gt;-->
          <!--<div class="rightText">-->
            <!--<h4 class="media_title">九龙坡区“科技艺体”联盟第三次活动在什么...</h4>-->
            <!--<p>2019.02.21 09:52:11 <span>1234回答</span></p>-->
          <!--</div>-->
        <!--</li>-->
      </ul>
    </div>
  </div>
</template>

<script>
  import navBar from './../components/navBar.vue'
  import searchBar from '../components/searchBar.vue'
  import loadingBar from '../components/loading.vue'
  export default {
    name: 'Home',
    data () {
      return {
        searchVal: '',
        showSearchBtn: true,
        showSearchVal: '? 提问',
        isLoading: true,
        list: []
      }
    },
    components:{
      searchBar,
      loadingBar
    },
    methods: {
      getQuestion (){
        this.http.get(this.ports.application.question, res =>{
          setTimeout(() => {
            this.isLoading = false
          }, 1000)
          console.log(res)
          if(res.status==200){
            const data = res.data
            this.list = data
//            this.banner = data.banner
//            this.question = data.question
          }
        })
      },
    },
    mounted(){
      this.getQuestion()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .askWrapper{
    /*background-color:#f5f5f5;*/
    font-size:24px;
    .selectedWd{
      /*background-color:white;*/
      padding:0;
      .titleBox{
        .left-ico i{
          width:32px;
          height:32px;
          background:url(./../../assets/ico/app-ico-1.png) no-repeat center;
          background-size:100%;
        }
      }
      ul{
        /*padding:0 20px;*/
        li{
          margin-top:20px;
          padding:20px;
          align-items: flex-start;
          border-bottom:1px solid #eee;
          background-color:white;
          .leftText{
            background-color:#e60012;
            color:white;
            font-size:18px;
            padding:5px 10px;
            border:1px solid #e60012;
            border-radius: 5px;
            margin-right:20px;
          }
          .rightText{
            text-align: left;
            h4{
              font-size:30px;
              margin-bottom:20px;
            }
            p{
              color:#bbbbbb;
              span{
                margin-left:20px;
              }
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

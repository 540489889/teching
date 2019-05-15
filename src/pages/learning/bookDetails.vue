<template>
  <div class="detailsWrapper recommend-content">
    <loading v-if="isLoading"></loading>
    <div class="topBook flex-box">
      <div class="flex-box">
        <div class="imgLeft">
          <img :src="$store.state.IMGPATH+content.cover_img" alt="">
        </div>
        <div class="textRight">
          <h2 class="media_title">{{content.bookname}}</h2>
          <p>作者：{{content.author}}</p>
          <p>{{content.rednum}}人在读</p>
          <h4><cube-rate v-model="star" :disabled="disabled" :max="maxStar" :justify="justify"></cube-rate></h4>
        </div>
      </div>
    </div>
    <h1>{{content.title}}</h1>
    <h6>{{content.update}}</h6>
    <div class="inside" v-if="comments.nickname">
      <h2 class="flex-box">
        <img class="tx-ico" src="./../../assets/ico/me-p-ico.png" alt="">
        <b>{{comments.nickname}}</b>
        <p>点评：<cube-rate v-model="comments.score" :disabled="disabled" :max="maxStar" :justify="justify"></cube-rate></p>
      </h2>
      <div class="content">
        {{comments.content}}
      </div>
      <router-link tag="h3" :to="'./experienceAll?qid='+comments.id+'&eid='+comments.bookid" class="moreComment">查看更多读书心得<i class="cubeic-arrow"></i></router-link>
    </div>
    <div @click="toScore(content)" class="fillText flex-box"><i class="score-tx"></i>写读书心得</div>
    <div class="content" >
      <!--<img :src="'http://cqeic.swkj2014.com/'+content.cover_img" alt="">-->
      <p class="contentP" v-html="content.content"></p>
      <button class="nextBook" v-if="content.status==2" @click="getrebook(2)">上一章节</button>
      <button class="nextBook" @click="getrebook(1)">下一章节</button>
    </div>
  </div>
</template>
<script>
  import './../../assets/style/cubeNews.css'
  import loading from '../components/loading.vue'
  export default {
    name: 'InformatizetionDetails',
    data (){
      return {
        isLoading: true,
        star: 4.5,
        maxStar: 5,
        disabled: true,
        justify: false,
        content: {},
        comments: {}
      }
    },
    created (){

    },
    components: {
      loading
    },
    methods: {
      toScore(data){
        this.$router.push({path:'/learning/score/', query: { list: JSON.stringify(data)}})
      },
      getrebook(val){
        this.isLoading = true
        let eid = this.$route.query.eid
        let uid = this.$route.query.uid
        this.http.get(this.ports.learning.redbook+'?eid='+eid+'&status='+val,res=>{
          console.log(res)
          setTimeout(() => {
            this.isLoading = false
          }, 500)
          if(res.status==200){
            const data = res.data
            this.content = data
            this.star = data.scores
            this.comments = data.comments
            $('html,body').animate({scrollTop: '0px'}, 0);
          }
        })
      },
    },
    mounted(){
      this.getrebook(1)
    }
  }
</script>
<style lang="less" scoped>
  .detailsWrapper{
    font-size:28px;
    text-align: left;
    background-color:white;

    .topBook{
      background:url(./../../assets/ico/book-title-bg.png) no-repeat center;
      background-size:100% 100%;
      height:320px;
      padding:20px;
      padding-bottom:0;
      align-items: flex-end;
      .imgLeft{
        margin-right:20px;
        img{
          width:180px;
          height:240px;
          border-radius:5px;
        }
      }
      .textRight{
        color:white;
        h2{
          font-size:30px;
        }
        p{
          font-size:24px;
          margin-top:20px;
        }
        h4{
          margin-top:20px;
        }
      }
    }
    h1{
      font-size:30px;
      padding:20px;
      line-height:1.4
    }
    h6{
      font-size:24px;
      color:#afafaf;
      padding:20px;
      padding-top:0;
    }
    .inside{
      background-color:#f5f5f5;
      padding:20px;
      margin:0 20px;
      border-radius: 5px;
      .content{
        color:#999;
        line-height:1.6;
        background:none;
        border-top:0;
        padding:10px 0;
      }
      .tx-ico{
        width:40px;
        height:40px;
        border-radius: 50%;
        margin-right:5px;
      }
      p{
        color:#999999;
        margin-left:10px;
        font-size:24px;
      }
      .moreComment{
        color:#999;
      }
    }
    .fillText{
      justify-content: flex-end;
      .score-tx{
        width:32px;
        height:32px;
        background:url(./../../assets/ico/score-tx.png) no-repeat center;
        background-size:100%;
        margin-right:15px;
      }
      padding:30px 20px;
    }
    .content{
      padding:20px;
      background-color:white;
      border-top:20px solid #e9e9e9;
      .nextBook{
        display: block;
        width:630px;
        height:100px;
        text-align: center;
        border:none;
        background-color:#1ba255;
        margin:40px auto;
        border-radius: 10px;
        color:white;
        font-size:30px;
      }
      img{
        width:100%;
      }
      .contentP{
        background-color:#f5f5f5;
        padding:20px;
        .chaptercontent{
          font-size:28px;
        }
        *{
        }
      }
      p{
        padding:20px 0;
        line-height:1.6;
        font-size:32px !important;

      }
    }

  }
</style>

<template>
  <div class="detailsWrapper recommend-content">

    <div class="topBook flex-box">
      <div class="flex-box">
        <div class="imgLeft">
          <img :src="$store.state.IMGPATH+content.cover_img" alt="">
        </div>
        <div class="textRight">
          <h2 class="media_title">{{content.bookname}}</h2>
          <p>作者：{{content.author}}</p>
          <p>2019人在读</p>
          <h4><cube-rate v-model="star" :disabled="disabled" :max="maxStar" :justify="justify"></cube-rate></h4>
        </div>
      </div>
    </div>
    <h1>{{content.title}}</h1>
    <h6>{{content.update}}</h6>
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
  import loadingBar from '../components/loading.vue'
  export default {
    name: 'InformatizetionDetails',
    data (){
      return {
        isLoading: true,
        star: 4.5,
        maxStar: 5,
        disabled: true,
        justify: false,
        content: {}
      }
    },
    components: {
      loadingBar
    },
    methods: {
      getrebook(val){
        let eid = this.$route.query.eid
        this.http.get(this.ports.resource.rebook+'?eid='+eid+'&status='+val,res=>{
          setTimeout(() => {
            this.isLoading = false
          }, 1000)
          console.log(res)
          if(res.status==200){
            const data = res.data
            this.content = data
            window.scrollTo()
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

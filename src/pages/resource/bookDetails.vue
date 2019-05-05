<template>
  <div class="detailsWrapper recommend-content">
    <loading-bar v-show="isLoading"></loading-bar>
    <div class="topBook flex-box">
      <div class="flex-box">
        <div class="imgLeft">
          <img :src="'http://cqeic.swkj2014.com/'+content.cover_img" alt="">
        </div>
        <div class="textRight">
          <h2 class="media_title">{{content.bookname}}</h2>
          <p>{{content.author}}</p>
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
  import loadingBar from '../components/loading.vue'
  export default {
    name: 'InformatizetionDetails',
    data (){
      return {
        isLoading: true,
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
      this.getrebook()
    }
  }
</script>
<style lang="less" scoped>
  .detailsWrapper{
    font-size:28px;
    text-align: left;
    background-color:white;
    .topBook{
      background-color:#0195e5;
      height:320px;
      padding:20px;
      padding-bottom:0;
      align-items: flex-end;
      .imgLeft{
        margin-right:20px;
        img{
          width:180px;
          height:240px;
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
        background-color:#0195e5;
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

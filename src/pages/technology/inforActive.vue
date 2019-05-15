<template>
  <div class="inforWrapper recommend-content">
    <div class="title flex-box">
      <div class="left"><img :src="$store.state.IMGPATH+content.cover_img" alt=""></div>
      <div class="right box-1">
        <h4 class="media_title">{{content.title}}</h4>
        <p class="media_desc">{{content.author}}</p>
      </div>
    </div>
    <div class="inforContent">
      <div class="inforText" v-html="content.content"></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'sayValue',
    data (){
      return{
        content: {}
      }
    },
    methods: {
      getContent(){
        let id = this.$route.query.id
        this.http.get(this.ports.technology.branchCntent+'?id='+id,res=>{
          console.log(res)
          if(res.status==200){
            const data = res.data
            this.content = data
          }
        })
      },
    },
    mounted (){
      this.getContent()
    }
  }
</script>
<style lang="less" scoped>
  .inforWrapper{
    background-color:white;
    font-size:28px;
    border-top:1px solid transparent;
    .title{
      text-align: left;
      margin-top:10px;
      padding:20px;
      .left{
        img{
          width:120px;
          height:124px;
        }
        margin-right:20px;
      }
      .right{
        h4{
          font-size:32px;
          line-height:2;
        }
        p{
          font-size:26px;
          color:#909090;
        }
      }
    }
    .inforContent{
      text-align: left;
      margin-top:10px;
      padding:20px ;
      line-height:1.6;
      .inforText{
        background-color:#f2f2f5;
        padding:30px;
        border-radius: 5px;
      }
    }
  }
</style>

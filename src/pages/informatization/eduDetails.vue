<template>
  <div class="detailsWrapper recommend-content">
    <h1>{{content.title}}</h1>
    <h6>{{content.update}}</h6>
    <div class="content" >
      <!--<img :src="'http://cqeic.swkj2014.com/'+content.cover_img" alt="">-->
      <p v-html="content.content">

      </p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'eduDetails',
    data (){
      return {
        content: {}
      }
    },
    methods: {
      getequiContentData(){
        let id = this.$route.query.id
        this.http.get(this.ports.informatization.equiContent+'?id='+id,res=>{
          console.log(res)
          if(res.status==200){
            const data = res.data
            this.content = data
          }
        })
      },
    },
    mounted(){
      this.getequiContentData()
    }
  }
</script>
<style lang="less" scoped>
  .detailsWrapper{
    font-size:28px;
    text-align: left;
    overflow: hidden;
    background-color:white;
    *{
      max-width:100%;
    }
    img{
      max-width:100%;
    }
    h1{
      font-size:36px;
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
      img{
        width:100%;
      }
      p{
        padding:20px 0;
        line-height:1.4;
      }
    }

  }
</style>

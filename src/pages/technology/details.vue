<template>
  <div class="detailsWrapper recommend-content">
    <h1>{{content.title}}</h1>
    <h6>{{content.update}}</h6>
    <div class="content">
      <!--<img :src="'http://cqeic.swkj2014.com/'+content.cover_img" alt="">-->
      <p  v-html="content.content">

      </p>
      <!--<p>-->
      <!--</p>-->
    </div>
  </div>
</template>
<script>
  export default {
    name: 'InformatizetionDetails',
    data (){
      return {
        content: {}
      }
    },
    methods: {
      getContent(){
        let id = this.$route.query.id
        let tables = this.$route.query.tables
        this.http.get(this.ports.technology.activityContent+'?id='+id+'&tables='+tables,res=>{
          console.log(res)
          if(res.status==200){
            const data = res.data
            this.content = data
          }
        })
      },
    },
    mounted(){
      this.getContent()
    }
  }
</script>
<style lang="less" scoped>
  .detailsWrapper{
    font-size:28px;
    text-align: left;
    background-color:white;
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

<template>
  <div class="bookList">

    <ul class="list-wrapper">
      <!--<router-link -->
        <!--tag="li" -->
        <!--:to="'/learning/bookDetails?eid='+item.id" -->
        <!--:key="item.id"-->
        <!--v-for="(item,index) in list"-->
        <!--class="list-item">-->
        <li :key="item.id"
            @click="goBook(item.bookurl)"
            v-for="(item,index) in list"
            class="list-item">
          <div class="boxBook">
            <div class="imgBox">
              <img :src="$store.state.IMGPATH+item.cover_img" alt="">
            </div>
            <h3 class="media_desc">{{item.title}}</h3>
            <p class="media_title">{{item.author}}</p>
          </div>
        </li>
      <!--</router-link>-->
    </ul>
  </div>
</template>
<script>
  import loadingBar from '../components/loading.vue'
  export default {
    name: 'bookList',
    data(){
      return {
        isLoading: true,
        list: [],
        type: '',
      }
    },
    components: {
      loadingBar
    },
    created (){
      setTimeout(() => {
        this.isLoading = false
      }, 500)
    },
    methods: {
      goBook(url){
        location.href = url
      },
      getebook(){
        let type = this.$route.query.type
        if(type){
          this.type = type
        }else{
          this.type = ''
        }
        this.http.get(this.ports.learning.readList+'?type='+this.type,res=>{
          console.log(res)

          if(res.status==200){
            const data = res.data
            this.list = data.data
          }
        })
      },
    },
    mounted (){
      this.getebook()
    }
  }
</script>
<style lang="less" scoped>
  .bookList{
    position:absolute;
    width:100%;
    min-height:100%;
    background-color:white;
    .list-wrapper{
      overflow: hidden;
      padding:20px 0;
      li{
        width:33.3%;
        height:390px;
        overflow: hidden;
        float:left;
        text-align: center;
        font-size:28px;
        .boxBook{
          width:180px;
          display: inline-block;
          text-align: left;
          h3{
            line-height:1.4;
            margin-top:10px;
            overflow: hidden;
          }
          p{
            line-height:1.6;
            color:#666;
            overflow: hidden;
          }
          .imgBox{
            img{
              width:100%;
              height:245px;
            }
          }
        }
      }
    }
  }
</style>

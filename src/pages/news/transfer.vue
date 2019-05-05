<template>
  <div class="viewWrapper">
    <loading-bar v-show="isLoading"></loading-bar>
    <video-detail :list="list"></video-detail>
  </div>
</template>
<script>
  import loadingBar from '../components/loading.vue'
  import videoDetail from './newsVideoDetail.vue'
  export default {
    name: 'transfer',
    data(){
      return{
        isLoading: true,
        list: {}
      }
    },
    components:{
      videoDetail,
      loadingBar
    },
    methods: {
      getNewsDetails (){
        let id = this.$route.query.id
        this.http.get(this.ports.news.videoContent+'?id='+id, res =>{
          setTimeout(() => {
            this.isLoading = false
          }, 1000)
          console.log(res)
          if(res.status===200){
            let data = res.data
            this.list = data
          }
        })
      },
    },
    mounted(){
      this.getNewsDetails()
    }
  }
</script>

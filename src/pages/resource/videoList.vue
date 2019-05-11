<template>
  <div class="videoList">

    <new-video :list="list" :videoD="videoD"></new-video>
  </div>
</template>
<script>
  import loadingBar from '../components/loading.vue'
  import newVideo from './components/video.vue'
  export default {
    name: 'ResourceVideoList',
    data(){
      return {
        isLoading: false,
        videoD: "1",
        list: []
      }
    },
    components: {
      loadingBar,
      newVideo
    },
    methods: {
      getActivityMoive (){
        let type = this.$route.query.type
        this.http.get(this.ports.resource.activityMoive+'?type='+type, res =>{
          setTimeout(() => {
            this.isLoading = false
          }, 1000)
          console.log(res)
          if(res.status==200){
            const data = res.data
            this.list = data
          }
        })
      },
    },
    mounted(){
      this.getActivityMoive()
    }
  }
</script>
<style lang="less" scoped>
  .videoList{
    position:relative;
    width:100%;
    min-height:100%;
  }
</style>

<template>
  <div>
    <baidu-map
      ref="mapView"
      class="bm-view"
      :ak="ak"
      :center="center"
      :zoom="zoom"
      @ready="handler">
      <bm-marker
        v-for="marker in maps"
        :key="marker.id"
        :position="{lng:marker.longitude,lat:marker.latitude}"
        @click="clickHandler(marker)"
      >
        <!--<bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen">{{marker.title}}</bm-info-window>-->
      </bm-marker>
      <!--<bm-point-collection :points="points" shape="BMAP_POINT_SHAPE_STAR" color="red" size="BMAP_POINT_SIZE_SMALL" @click="clickHandler">-->

      <!--</bm-point-collection>-->
    </baidu-map>
    <div class="mapInfo">
      <i class="cubeic-wrong" @click="closeMapInfo"></i>
      <div class="title flex-box">
        <img :src="$store.state.IMGPATH+mapData.port" alt="">
        <h1 class="box-1 ">
          <p class="media_title">{{mapData.title}}</p></h1>
      </div>
      <div class="text" v-html="mapData.content">
      </div>
    </div>
  </div>

  <!--<map-info></map-info>-->

</template>

<script>
  import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
  import bmMarker from 'vue-baidu-map/components/overlays/Marker.vue'
  import bmInfoWindow from 'vue-baidu-map/components/overlays/InfoWindow.vue'
  import bmPointCollection from 'vue-baidu-map/components/overlays/PointCollection.vue'
  export default {
    data (){
      return{
        ak: 'fn9zmg817PvROb4DGzObu7KG',
        center: {lng: 106.554988, lat: 29.559194},
        zoom: 12,
        show: false,
        points: [],
        mapData: {}
      }
    },
    props:{
      maps: Array
    },
    components: {
      BaiduMap,
      bmMarker,
      bmInfoWindow,
      bmPointCollection,
    },
    methods: {
      handler () {
//        console.log(BMap, map)
      },
      addPoints () {
        const points = [];
        if(this.maps.length){
          for(let i=0;i<this.maps.length;i++){
            const position = {lng:this.maps[i].longitude , lat:this.maps[i].latitude }
          }
        }
        this.points = points
      },
      clickHandler (data,e) {
        console.log(data.title)
        this.mapData = data
        $('.bm-view').animate({'height':'100vh'},500,function () {
          $('.mapInfo').animate({'bottom':0},500)
        })
//        alert(`单击点的坐标为：${e.point.lng}, ${e.point.lat}`);
      },
      closeMapInfo(){
        $('.mapInfo').animate({'bottom':'-620px'},500,function () {
          $('.bm-view').animate({'height':'200px'},500)
        })
      },
      infoWindowClose () {
        this.show = false
      },
      infoWindowOpen () {
        this.show = true
      }
    },
    computed: {

    },
    mounted(){
      this.addPoints()
    },
    watch: {
      // 监听数据的变化
      maps() {
        this.$nextTick(() => {
          this.addPoints()
        })
      }
    }
  }
</script>

<style lang="less">
  .bm-view {
    width: 100%;
    height: 400px;
  }
  .mapInfo{
    z-index: 19;
    font-size:24px;
    background-color:white;
    position:fixed;
    bottom:-620px;
    width:100%;
    height:620px;
    /*padding:0 20px;*/
    box-shadow:inset 0px 15px 10px -15px #ccc;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    .cubeic-wrong{
      position:absolute;
      top:5px;
      font-size:25px;
      right:10px;
      color:#aaa;
    }
    .title{
      height:120px;
      padding:0 20px;
      margin-top:20px;
      img{
        width:80px;
        height:80px;
        background-color:red;
        border-radius: 50%;
      }
      h1{
        font-size:28px;
        text-align: left;
        margin-left:20px;
      }
    }
    .text{
      padding:0 20px;
      line-height:1.6;
      text-align: left;
      font-size:26px;
      height:480px;
      overflow: auto;
    }
  }
</style>

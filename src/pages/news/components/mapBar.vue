<template>
  <baidu-map
    class="bm-view"
    :ak="ak"
    :center="center"
    :zoom="zoom"
    @ready="handler">
    <bm-marker
      v-for="marker in maps"
      :key="marker.id"
      :position="{lng:marker.longitude,lat:marker.latitude}"
      @click="clickHandler"
    >
      <!--<bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen">{{marker.title}}</bm-info-window>-->
    </bm-marker>
    <!--<bm-point-collection :points="points" shape="BMAP_POINT_SHAPE_STAR" color="red" size="BMAP_POINT_SIZE_SMALL" @click="clickHandler">-->

    <!--</bm-point-collection>-->

  </baidu-map>
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
        points: []
      }
    },
    props:{
      maps: Array
    },
    components: {
      BaiduMap,
      bmMarker,
      bmInfoWindow,
      bmPointCollection
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
      clickHandler (e) {
        alert(`单击点的坐标为：${e.point.lng}, ${e.point.lat}`);
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

<style>
  .bm-view {
    width: 100%;
    height: 400px;
  }
</style>

<template>
  <div class="informationWrapper recommend-content">
    <div class="spImg">
      <img src="./../../assets/img/infm-b-1.png" alt="">
    </div>
    <div class="communtyBar">
      <cube-tab-bar
        ref="tabbar"
        v-model="selectedLabelDefault"
        :data="tabs"
        @click="clickHandler"
        @change="changeHandler">
      </cube-tab-bar>
    </div>
    <div class="infoList5">
      <ul>
        <li>
          <img src="./../../assets/img/info-s-1.png" alt="">
          <h4 class="media_title">智慧教育平台</h4>
          <h6 class="media_title">根据《重庆市教育委员会根据《重庆市教育委员会...</h6>
          <p>1234人观看</p>
        </li>
        <li>
          <img src="./../../assets/img/info-s-1.png" alt="">
          <h4 class="media_title">智慧教育平台</h4>
          <h6 class="media_title">根据《重庆市教育委员会根据《重庆市教育委员会...</h6>
          <p>1234人观看</p>
        </li>
        <li>
          <img src="./../../assets/img/info-s-1.png" alt="">
          <h4 class="media_title">智慧教育平台</h4>
          <h6 class="media_title">根据《重庆市教育委员会根据《重庆市教育委员会...</h6>
          <p>1234人观看</p>
        </li>
        <li>
          <img src="./../../assets/img/info-s-1.png" alt="">
          <h4 class="media_title">智慧教育平台</h4>
          <h6 class="media_title">根据《重庆市教育委员会根据《重庆市教育委员会...</h6>
          <p>1234人观看</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Information',
    data(){
      return{
        selectedLabelDefault: '新装备动态',
        showSlider:false,
        tabs: [{
          label: '新装备动态',
        }, {
          label: '政策法规',
        }, {
          label: '硕果累累',
        },{
          label: '中心简介'
        }]
      }
    },
    methods: {
      clickHandler (label) {
        // if you clicked home tab, then print 'Home'
        console.log(label)
        this.$refs.tabbar.setSliderTransform(50)

      },
      changeHandler (label) {
        // if you clicked different tab, this methods can be emitted
      },
      setWidth() {
        this.$refs.tabbar.setSliderTransform(50)
      },
    },
    mounted(){
//      console.log(this.$refs.tabbar)
    }

  }
</script>
<style lang="less" scoped>
  .informationWrapper{
    background-color:#f5f5f5;
    font-size:24px;
    .spImg{
      img{
        width:100%;
      }
    }
    .communtyBar{
      background-color:white;
      padding-bottom:10px;
    }
    .infoList5{
      background-color:white;
      margin-top:20px;
      padding:20px 0;
      .titleBox{
        .left-ico i{
          width:32px;
          height:32px;
          background:url(./../../assets/ico/info-t-5.png) no-repeat center;
          background-size:100%;
        }
      }
      ul{
        overflow: hidden;
        padding:0 20px;
        li{
          box-sizing: border-box;
          float:left;
          width:50%;
          text-align: left;
          margin-bottom:20px;
          img{
            width:345px;
            height:200px;
          }
          h4{
            font-size:28px;
            margin:10px 0 5px 0;
            text-align: left;
          }
          h6{
            line-height:1.6;
            font-size:26px;
            color:#909090;
          }
          p{
            color:#909090;
            font-size:22px;
          }
        }
        li:nth-child(odd){
          padding-right:10px;
        }
        li:nth-child(even){
          padding-left:10px;
        }
      }
    }

  }
</style>

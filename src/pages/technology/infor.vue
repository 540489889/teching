<template>
  <div class="inforWrapper recommend-content">
    <div class="title flex-box">
      <div class="left"><img src="./../../assets/ico/t-i-1.png" alt=""></div>
      <div class="right">
        <h4 class="media_title">数据部</h4>
        <p class="media_desc">重庆市教育信息技术与装备技术部</p>
      </div>
    </div>
    <div class="inforContent">
      <div class="inforText">
        1.负责全市教育系统信息建设与管理工作。承担全市教育系统信息化的规划、组织、指导、协调工作；推进全市教育信息网络平台和学校数字化校园建设工作；组织实施“中小学现代远程教育工程”项目。

        2.负责全市教育信息资源建设工作。承担全市教育信息数据库和教育资源库建设工作；开发、推广教育信息资源、教育管理软件、教育信息技术教材、学具及教育音像制品；履行重庆市基础教育资源中心职能，实施“金教工程”。

        3.负责全市教育技术装备工作。指导和推进全市教育系统信息技术及教育装备工作；承担学校现代教育技术装备、实验室、图书馆（室）和各类功能室的建设规划、指导工作；制定现代教育技术装备的配备标准，承担教学设施设备的采购和招标工作，加强监督指导；承担重庆市教委图书工作委员会办公室日常工作。
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'sayValue',
    data (){
      return{

      }
    },
    methods: {

    },
    mounted (){

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

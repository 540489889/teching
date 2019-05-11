<template>
  <div class="askWrapper recommend-content">

    <div class="askProblem">
      <h4>{{question.title}}</h4>
      <div class="infor" v-html="question.content"></div>
      <h6>{{question.update}} <span>{{question.comnum}}评论</span></h6>
      <button class="flex-box"><i class="pen-ico"></i>写回答</button>
    </div>
    <div class="askList">
      <list-item v-if="comment.length" :frist="true" :list="comment"></list-item>
      <!--<ul>-->
        <!--<li v-for="item in comment">-->
          <!--<div class="oneBox">-->
            <!--<div class="tpVideo flex-box">-->
              <!--<div class="leftImg">-->
                <!--<img src="../../assets/ico/video-ico-3.png" alt="">-->
              <!--</div>-->
              <!--<div class="textInfo box-1">-->
                <!--<h4 class="media_title">{{item.nickname}}</h4>-->
                <!--<p>{{item.comtime}}</p>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="infor">-->
             <!--{{item.content}}-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="twoBox" v-if="item.children.length" v-for="it in item.children">-->
            <!--<div class="tpVideo flex-box">-->
              <!--<div class="leftImg">-->
                <!--<img src="../../assets/ico/video-ico-3.png" alt="">-->
              <!--</div>-->
              <!--<div class="textInfo box-1">-->
                <!--<h4 class="media_title">{{it.nickname}}</h4>-->
                <!--<p>{{item.comtime}}</p>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="infor twoInfo">-->
              <!--<p class="twoP">-->
                <!--{{it.content}}-->
              <!--</p>-->
              <!--<div class="twoBox threeBox">-->
                <!--<div class="tpVideo flex-box">-->
                  <!--<div class="leftImg">-->
                    <!--<img src="../../assets/ico/video-ico-3.png" alt="">-->
                  <!--</div>-->
                  <!--<div class="textInfo box-1">-->
                    <!--<h4 class="media_title">蔡小白</h4>-->
                    <!--<p>2019.02.21</p>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class="infor twoInfo ">-->
                  <!--通过校校网的人人通平台，学校无需投入任何软硬件，即-->
                  <!--可快速搭建学校空间、班级空间、老师空间、学生空间、-->
                  <!--家长空间等五大云空间，实时发布学校新闻、通知通告，-->
                  <!--集中展示学校的风采风貌，优质资源，优秀作文等。-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</li>-->
        <!--<li v-if="!comment.length">-->
          <!--<h1>暂无评论...</h1>-->
        <!--</li>-->
      <!--</ul>-->
    </div>
    <div class="commentBox">
      <h6 class="sayBox">说点什么吧</h6>
      <!--<cube-textarea-->
        <!--v-model="value"-->
        <!--:placeholder="placeholder"-->
        <!--:maxlength="maxlength"-->
        <!--:readonly="readonly"-->
        <!--:disabled="disabled"-->
        <!--:autofocus="autofocus"-->
      <!--&gt;</cube-textarea>-->
    </div>
  </div>
</template>

<script>
  import navBar from './../components/navBar.vue'
  import searchBar from '../components/searchBar.vue'
  import loadingBar from '../components/loading.vue'
  import listItem from './commponents/listItem.vue'
  export default {
    name: 'Home',
    data () {
      return {
        value: '',
        placeholder: '说点什么吧',
        readonly: false,
        maxlength: 100,
        disabled: false,
        autofocus: false,
        searchVal: '',
        showSearchBtn: true,
        showSearchVal: '? 提问',
        isLoading: false,
        list: [],
        comment: [],
        question: {}
      }
    },
    components:{
      searchBar,
      loadingBar,
      listItem
    },
    methods: {
      getquesContent (){
        let id = this.$route.query.id
        this.http.get(this.ports.application.quesContent+'?id='+id, res =>{
          setTimeout(() => {
            this.isLoading = false
          }, 1000)
          console.log(res)
          if(res.status==200){
            const data = res.data
            this.comment = data.comment
            this.question = data.question
//            this.banner = data.banner
//            this.question = data.question
          }
        })
      },
    },
    mounted(){
      this.getquesContent()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .askWrapper{
    background-color:#f5f5f5;
    font-size:28px;
    padding-bottom:120px;
    .askProblem{
      background-color:white;
      padding:30px;
      padding-bottom:0;
      h4{
        font-size:30px;
        text-align: left;
        margin-bottom:20px;
      }
      .infor{
        text-align: left;
        line-height:1.4;
        color:#999;
      }
      h6{
        text-align: left;
        color:#999;
        font-size:24px;
        margin-top:20px;
      }
      button{
        text-align: center;
        color:#029b43;
        height:100px;
        margin-top:20px;
        width:100%;
        border:none;
        border-top:1px solid #eee;
        font-size:30px;
        line-height:100px;
        justify-content: center;
        background-color:white;
        .pen-ico{
          background:url(./../../assets/ico/pen-ico-1.png) no-repeat center;
          background-size:100%;
          width:33px;
          height:32px;
          margin-right:10px;
        }
      }
    }
    .askList{
      ul{

      }
    }
    .commentBox{
      position:fixed;
      bottom:0;
      left:0;
      width:100%;
      .sayBox{
        color:#999;
        text-align: left;
        height:60px;
        line-height:50px;
        border-top:1px solid #eee;
        background-color:white;
        padding:30px;
      }
    }
  }
</style>

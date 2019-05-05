<template>
  <div class="meWrapper releaseWrapper recommend-content">
    <div class="releaseL1">
      <h1>社区主题</h1>
      <div class="scroll-list-wrap">
        <cube-scroll
          ref="scroll"
          :data="items"
          direction="horizontal"
          :options="optionsa">
          <ul class="list-wrapper">
            <li
              v-for="(item,index) in items"
              :class="[itemClass ,index===activeIndex ? activeClass : '']">{{item.title}}</li>
          </ul>
        </cube-scroll>
      </div>
    </div>
    <div class="releaseL2">
      <div class="checkBox">
        <cube-select
          v-model="value"
          :title="title"
          :options="optionsb"
          :placeholder="placeholder"
          :auto-pop="autoPop"
          :disabled="disabled"
          @change="change">
        </cube-select>
      </div>
      <div class="textInput">
        <input type="text" placeholder="请输入标题">
        <textarea name="" id="" cols="30" rows="10" placeholder="请输入正文"></textarea>
      </div>
    </div>
    <div class="releaseL3">
      <h1>图片信息</h1>
      <cube-upload
        action="//jsonplaceholder.typicode.com/photos/"
        :simultaneous-uploads="1"
        @files-added="filesAdded" />
    </div>
    <div class="releaseBtn">
      <a>发布</a>
    </div>
  </div>
</template>

<style scoped lang="less">
  .releaseWrapper{
    .releaseL1{
      background-color:white;
      padding:20px;
      h1{
        font-size:32px;
        margin-bottom:20px;
        text-align: left;
      }
    }
    .releaseL2{
      background-color:white;
      margin-top:20px;
      .checkBox{
        padding:20px;
        border-bottom:1px solid #eee;
      }
      .textInput{
        text-align: left;
        padding:20px;
        overflow: hidden;
        font-size:26px;
        input{
          box-sizing: border-box;
          background-color:#f5f5f5;
          padding:20px;
          width:100%;
          margin-bottom:20px;
          font-size:26px;
        }
        textarea{
          box-sizing: border-box;
          background-color:#f5f5f5;
          width:100%;
          padding:20px;
          border:none;
          font-size:26px;
        }
      }
    }
    .releaseL3{
      background-color:white;
      padding:20px;
      margin-top:20px;
      h1{
        font-size:32px;
        margin-bottom:20px;
        text-align: left;
      }

    }
    .releaseBtn{
      padding:25px;
      text-align: center;
      a{
        display: block;
        margin:0 auto;
        width:630px;
        height:100px;
        line-height:100px;
        text-align: center;
        color:white;
        background-color:#0195e5;
        font-size:32px;
        border-radius: 10px;
      }
    }
  }
</style>
<script>
  export default {
    name:'releaseIndex',
    data () {
      return {
        activeClass: 'activeIndex',
        itemClass: 'list-item',
        searchVal: '',
        activeIndex:1,
        items: [{id:1,title:'课题社区'},{id:2,title:"影视社区"},{id:3,title:'联盟社区'},{id:4,title:'联盟社区'},{id:5,title:'联盟社区'}],
        direction: "horizontal",
        optionsa: {
//          scrollbar: {
//            fade: false
//          }
        },
        scrollX: true,
        scrollY: false,
        optionsb: ['分类1', '分类2', '分类3','分类1', '分类2', '分类3' ],
        value: '',
        title: '选择分类',
        placeholder: '选择分类',
        autoPop: false,
        disabled: false
      }
    },
    methods: {
      change(value, index, text) {
        console.log('change', value, index, text)
      },
      filesAdded(files) {
        let hasIgnore = false
        const maxSize = 1 * 1024 * 1024 // 1M
        for (let k in files) {
          const file = files[k]
          if (file.size > maxSize) {
            file.ignore = true
            hasIgnore = true
          }
        }
        hasIgnore && this.$createToast({
          type: 'warn',
          time: 1000,
          txt: 'You selected >1M files'
        }).show()
      }
    },
    props:{
      showSearchBtn: {
        type: Boolean,
        default: false
      },
    }

  }
</script>

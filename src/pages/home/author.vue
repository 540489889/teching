<template>
  <div class="sqBox">
    <!--微信授权中...-->
  </div>
</template>

<script>
import axios from 'axios'
//  import { getWxAuth } from '@/service/getData'
  import { GetQueryString } from './../../assets/js/mixin';
  export default {
    data() {
      return {
        token: '',
      };
    },
    computed: {

    },
    created() {
      let code = GetQueryString("code");
      console.log(window.location.href,code)
      if(code){
        let _this = this
        let params = new URLSearchParams()
        params.append('code',code)
        axios({
          method: "post",
          url: "/Goddess/Api/setCode",
          data: params
        }).then(function (res) {
          const data = res.data
          if(data.codeSta==1){
            window.location.href = 'http://icbc.svkeji.cn/Vue/dist/index.html#/'
          }
        })
        return false
      }else{
        let newUrl = encodeURIComponent('http://icbc.svkeji.cn/Vue/dist/index.html#/author')
        let  data  = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxb7a405edd99131e7&redirect_uri='+newUrl+'&response_type=code&scope=snsapi_base&state=STATE&connect_redirect=1#wechat_redirect'
//        if (data.status === 200) {
//
//          window.location.href = data.url;
//        }
        window.location.href = data;
      }
    },
    methods: {


    },
    watch: {},

    components: {},


    mounted: function () {}
  }
</script>
<style>
  .sqBox{
    padding:50px 0;
    background-color:transparent;
  }
</style>

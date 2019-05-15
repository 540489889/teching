// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//初始样式
import './assets/style/currency.css'
import './assets/style/animate.min.css'
//axios
import http from './api/http'
import ports from './api/ports'
// import myLoading from './components/loading/index'
// Vue.use(myLoading);
Vue.prototype.http = http
Vue.prototype.ports = ports
import axios from 'axios'
Vue.config.debug = true
Vue.config.productionTip = false
Vue.prototype.$axios = axios
axios.defaults.withCredentials=true;
axios.interceptors.response.use(function (response) {
  // token 已过期，重定向到登录页面
  if (response.data.loginStatus===0){
    // localStorage.clear()
    localStorage.setItem('Authorization', 0);

    if( router.currentRoute.meta.requireAuth){
      router.replace({
        path:'/reg/login',
        query: {redirect: router.currentRoute.fullPath}
      })
    }
  }
  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})
//swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)
// By default we import all the components.
// Only reserve the components on demand and remove the rest.
// Style is always required.
//vuex
import store from './store/index'
import {
  Style,
  // basic
  Button,
  Loading,
  Tip,
  Toolbar,
  TabBar,
  TabPanels,
  // form
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Input,
  Textarea,
  Select,
  Switch,
  Rate,
  Validator,
  Upload,
  Form,
  // popup
  Popup,
  Toast,
  Picker,
  CascadePicker,
  DatePicker,
  TimePicker,
  SegmentPicker,
  Dialog,
  ActionSheet,
  Drawer,
  ImagePreview,
  // scroll
  Scroll,
  Slide,
  IndexList,
  Swipe,
  Sticky,
  ScrollNav,
  ScrollNavBar,
  RecycleList
} from 'cube-ui'
import App from './App'
import router from './router'

Vue.use(Button)
Vue.use(Loading)
Vue.use(Tip)
Vue.use(Toolbar)
Vue.use(TabBar)
Vue.use(TabPanels)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Input)
Vue.use(Textarea)
Vue.use(Select)
Vue.use(Switch)
Vue.use(Rate)
Vue.use(Validator)
Vue.use(Upload)
Vue.use(Form)
Vue.use(Popup)
Vue.use(Toast)
Vue.use(Picker)
Vue.use(CascadePicker)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(SegmentPicker)
Vue.use(Dialog)
Vue.use(ActionSheet)
Vue.use(Drawer)
Vue.use(ImagePreview)
Vue.use(Scroll)
Vue.use(Slide)
Vue.use(IndexList)
Vue.use(Swipe)
Vue.use(Sticky)
Vue.use(ScrollNav)
Vue.use(ScrollNavBar)
Vue.use(RecycleList)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

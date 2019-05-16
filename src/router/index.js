import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
var router =  new Router({
  mode: 'history',
  routes: [
    //首页
    {
      path: '/',
      name: 'Home',
      component: resolve => require(['@/pages/home/home'], resolve) ,
      meta:{index: 1, title: '首页', requireAuth: false}
    },
    //首页广告详情
    {
      path: '/home/advertDetails',
      name: 'HomeAdvertDetails',
      component: resolve => require(['@/pages/home/advertDetails'], resolve) ,
      meta:{index: 2, title: '广告详情', requireAuth: false}
    },
    //技术装备
    {
      path: '/tEquipment/index',
      name: 'tEquipmentIndex',
      component: resolve => require(['@/pages/tEquipment/index'], resolve) ,
      meta:{index: 2, title: '技术装备', requireAuth: false}
    },
    //技术装备详情
    {
      path: '/tEquipment/details',
      name: 'tEquipmentDetails',
      component: resolve => require(['@/pages/tEquipment/details'], resolve) ,
      meta:{index: 3, title: '技术装备详情', requireAuth: false}
    },
    //新闻资讯
    {
      path: '/news/index',
      name: 'NewsIndex',
      component: resolve => require(['@/pages/news/index'], resolve) ,
      meta:{index: 2, title: '首页', requireAuth: false}
    },
    //新闻资讯活动列表
    {
      path: '/news/activeList',
      name: 'NewsActiveList',
      component: resolve => require(['@/pages/news/activeList'], resolve) ,
      meta:{index: 3, title: '活动动态列表', requireAuth: false}
    },
    //新闻资讯活动列表详情
    {
      path: '/news/activeDetails',
      name: 'NewsActiveDetails',
      component: resolve => require(['@/pages/news/activeDetails'], resolve) ,
      meta:{index: 4, title: '活动详情', requireAuth: false}
    },
    //新闻资讯成果展示列表
    {
      path: '/news/fruitsList',
      name: 'NewsFruitsList',
      component: resolve => require(['@/pages/news/fruitsList'], resolve) ,
      meta:{index: 3, title: '成果展示', requireAuth: false}
    },
    //新闻资讯活动列表详情
    {
      path: '/news/fruitsDetails',
      name: 'NewsFruitsDetails',
      component: resolve => require(['@/pages/news/fruitsDetails'], resolve) ,
      meta:{index: 4, title: '活动详情', requireAuth: false}
    },
    //新闻资讯推荐广告详情
    {
      path: '/news/advertDetails',
      name: 'NewsAdvertDetails',
      component: resolve => require(['@/pages/news/advertDetails'], resolve) ,
      meta:{index: 4, title: '活动详情', requireAuth: false}
    },
    //学习园地
    {
      path: '/learning/index',
      name: 'LearningIndex',
      component: resolve => require(['@/pages/learning/index'], resolve) ,
      meta:{index: 2, title: '活动详情', requireAuth: false}
    },
    //学习园地 阅读资料列表
    {
      path: '/learning/bookList',
      name: 'LearningBookList',
      component: resolve => require(['@/pages/learning/bookList'], resolve) ,
      meta:{index: 3, title: '阅读资源', requireAuth: false}
    },
    //学习园地 阅读内容
    {
      path: '/learning/bookDetails',
      name: 'LearningBookDetails',
      component: resolve => require(['@/pages/learning/bookDetails'], resolve) ,
      meta:{index: 4, title: '阅读资源', requireAuth: false}
    },
    //阅读案例列表
    {
      path: '/learning/learList',
      name: 'LearninglearList',
      component: resolve => require(['@/pages/learning/learList'], resolve) ,
      meta:{index: 4, title: '阅读资源', requireAuth: false}
    },
    //阅读案例列表详情
    {
      path: '/learning/learListDetails',
      name: 'LearninglearListDetails',
      component: resolve => require(['@/pages/learning/learListDetails'], resolve) ,
      meta:{index: 5, title: '阅读资源', requireAuth: false}
    },
    //填写读书心得
    {
      path: '/learning/score',
      name: 'LearningScore',
      component: resolve => require(['@/pages/learning/score'], resolve) ,
      meta:{index: 5, title: '评分', requireAuth: false}
    },
    //说点什么
    {
      path: '/learning/sayValue',
      name: 'sayValue',
      component: resolve => require(['@/pages/learning/sayValue'], resolve) ,
      meta:{index: 6, title: '发表评论', requireAuth: false}
    },
    //心得体会列表
    {
      path: '/learning/experience',
      name: 'LearningExperience',
      component: resolve => require(['@/pages/learning/experience'], resolve) ,
      meta:{index: 4, title: '评分', requireAuth: false}
    },
    //心得体会列表详情
    {
      path: '/learning/experienceAll',
      name: 'LearningExperienceAll',
      component: resolve => require(['@/pages/learning/experienceAll'], resolve) ,
      meta:{index: 5, title: '评分', requireAuth: false}
    },
    //学习园地 在线资源
    {
      path: '/learning/onLineResources',
      name: 'LearningOnLineResources',
      component: resolve => require(['@/pages/learning/onLineResources'], resolve) ,
      meta:{index: 3, title: '在线资源', requireAuth: false}
    },
    //专题活动首页
    {
      path: '/specialActive/index',
      name: 'specialActiveIndex',
      component: resolve => require(['@/pages/specialActive/index'], resolve) ,
      meta:{index: 2, title: '专题活动', requireAuth: false}
    },

    //人工智能列表
    {
      path: '/specialActive/intelligenceList',
      name: 'IntelligenceList',
      component: resolve => require(['@/pages/specialActive/intelligenceList'], resolve) ,
      meta:{index: 3, title: '人工智能', requireAuth: false}
    },
    {
      path: '/specialActive/intelligencesList',
      name: 'IntelligencesList',
      component: resolve => require(['@/pages/specialActive/intelligencesList'], resolve) ,
      meta:{index: 3, title: '人工智能', requireAuth: false}
    },
    //人工智能列表详情
    {
      path: '/specialActive/intelligenceDetails',
      name: 'IntelligenceDetails',
      component: resolve => require(['@/pages/specialActive/intelligenceDetails'], resolve) ,
      meta:{index: 4, title: '人工智能', requireAuth: false}
    },

    //创新实验
    {
      path: '/specialActive/testList',
      name: 'testList',
      component: resolve => require(['@/pages/specialActive/testList'], resolve) ,
      meta:{index: 3, title: '人工智能', requireAuth: false}
    },
    {
      path: '/specialActive/classRoomList',
      name: 'classRoomList',
      component: resolve => require(['@/pages/specialActive/classRoomList'], resolve) ,
      meta:{index: 3, title: '创新课堂应用专题', requireAuth: false}
    },
    {
      path: '/specialActive/educationList',
      name: 'educationList',
      component: resolve => require(['@/pages/specialActive/educationList'], resolve) ,
      meta:{index: 3, title: '创新教育应用专题', requireAuth: false}
    },
    {
      path: '/specialActive/experimentList',
      name: 'experimentList',
      component: resolve => require(['@/pages/specialActive/experimentList'], resolve) ,
      meta:{index: 3, title: '创新实验联盟专题', requireAuth: false}
    },
    //创新实验列表详情
    {
      path: '/specialActive/testDetails',
      name: 'testDetails',
      component: resolve => require(['@/pages/specialActive/testDetails'], resolve) ,
      meta:{index: 4, title: '人工智能', requireAuth: false}
    },
    //数据中心
    {
      path: '/dataCenter/index',
      name: 'dataCenterIndex',
      component: resolve => require(['@/pages/dataCenter/index'], resolve) ,
      meta:{index: 3, title: '数据中心', requireAuth: false}
    },
    {
      path: '/dataCenter/Questionnaire',
      name: 'Questionnaire',
      component: resolve => require(['@/pages/dataCenter/Questionnaire'], resolve) ,
      meta:{index: 4, title: '数据中心', requireAuth: false}
    },
    //校园影视列表
    {
      path: '/specialActive/moviesList',
      name: 'moviesList',
      component: resolve => require(['@/pages/specialActive/moviesList'], resolve) ,
      meta:{index: 3, title: '校园影视', requireAuth: false}
    },
    //影视列表详情
    {
      path: '/specialActive/moviesDetails',
      name: 'moviesDetails',
      component: resolve => require(['@/pages/specialActive/moviesDetails'], resolve) ,
      meta:{index: 4, title: '校园影视', requireAuth: false}
    },
    //技装之家
    {
      path: '/technology/index',
      name: 'technologyIndex',
      component: resolve => require(['@/pages/technology/index'], resolve) ,
      meta:{index: 2, title: '活动详情', requireAuth: false}
    },
    //技装之家列表页
    {
      path: '/technology/techList',
      name: 'techList',
      component: resolve => require(['@/pages/technology/techList'], resolve) ,
      meta:{index: 3, title: '列表', requireAuth: false}
    },
    //技装之家列表页
    {
      path: '/technology/infor',
      name: 'technologyInfor',
      component: resolve => require(['@/pages/technology/infor'], resolve) ,
      meta:{index: 3, title: '信息', requireAuth: false}
    },
    //技装之家中心机构详情
    {
      path: '/technology/inforOffice',
      name: 'inforOffice',
      component: resolve => require(['@/pages/technology/inforOffice'], resolve) ,
      meta:{index: 3, title: '详情', requireAuth: false}
    },
    //技装之家中心活动详情
    {
      path: '/technology/inforActive',
      name: 'inforActive',
      component: resolve => require(['@/pages/technology/inforActive'], resolve) ,
      meta:{index: 3, title: '详情', requireAuth: false}
    },
    //技装之家列表详情
    {
      path: '/technology/details',
      name: 'technologyDetails',
      component: resolve => require(['@/pages/technology/details'], resolve) ,
      meta:{index: 4, title: '列表详情', requireAuth: false}
    },
    //新闻
    {
      path: '/news/index2',
      name: 'newsIndex2',
      component: resolve => require([ '@/pages/news/index2'], resolve) ,
      meta:{index: 3, title: '视频详情', requireAuth: false}
    },
    //新闻列表详情
    {
      path: '/news/newsDetails',
      name: 'newsDetails',
      component: resolve => require([ '@/pages/news/newsDetails'], resolve) ,
      meta:{index: 3, title: '视频详情', requireAuth: false}
    },
    //视频详情
    {
      path: '/news/newsVideoDetail',
      name: 'newsVideoDetail',
      component: resolve => require([ '@/pages/news/newsVideoDetail'], resolve) ,
      meta:{index: 4, title: '视频详情', requireAuth: false}
    },
    //课堂
    {
      path: '/classroom/index',
      name: 'classroomIndex',
      component: resolve => require(['@/pages/classroom/index'], resolve) ,
      meta:{index: 2, title: '空中课堂', requireAuth: false}
    },

    //登录
    {
      path: '/reg/login',
      name: 'RegLogin',
      component: resolve => require([ '@/pages/reg/login'], resolve) ,
      meta:{index: 0, title: '首页', requireAuth: false}
    },
    //注册
    {
      path: '/reg/register',
      name: 'RegRegister',
      component: resolve => require([ '@/pages/reg/register'], resolve) ,
      meta:{index: 0, title: '首页', requireAuth: false}
    },
    //忘记密码
    {
      path: '/reg/forgetPwd',
      name: 'RegForgetPwd',
      component: resolve => require([ '@/pages/reg/forgetPwd'], resolve) ,
      meta:{index: 0, title: '首页', requireAuth: false}
    },
    //我的
    {
      path: '/me/index',
      name: 'MeIndex',
      component: resolve => require(['@/pages/me/index'], resolve) ,
      meta:{index: 4, title: '我的', requireAuth: true}
    },
    //设置
    {
      path: '/me/setUp',
      name: 'MeSetUp',
      component: resolve => require(['@/pages/me/setUp'], resolve) ,
      meta:{index: 5, title: '设置', requireAuth: true}
    },
    //设置
    {
      path: '/me/edit',
      name: 'edit',
      component: resolve => require(['@/pages/me/edit'], resolve) ,
      meta:{index: 6, title: '编辑资料', requireAuth: true}
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
})
// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  //重置title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  let path = to.path
  let token = localStorage.getItem('Authorization');
  // 判断该路由是否需要登录权限
  if (to.matched.some(record => record.meta.requireAuth)){
    if(token!=0){
      next()
    }else{
      next({
        path: '/reg/login',
        query: {redirect: to.fullPath} // 将要跳转路由的path作为参数，传递到登录页面
      })
    }
  }
  next()
})
export default router

import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
var router = new Router({
  mode: 'history',
  routes: [
		//首页
    {
      path: '/',
      name: 'Home',
      component: (resolve) => require(['@/pages/home/home'], resolve),
      meta: { index: 1, title: '首页', requireAuth: false }
		},
		//技术装备
    {
      path: '/tEquipment/index',
      name: 'tEquipmentIndex',
      component: (resolve) => require(['@/pages/tEquipment/index'], resolve),
      meta: { index: 2, title: '技术装备', requireAuth: false }
		},
		//技术装备详情
    {
      path: '/tEquipment/details',
      name: 'tEquipmentDetails',
      component: (resolve) => require(['@/pages/tEquipment/details'], resolve),
      meta: { index: 3, title: '技术装备详情', requireAuth: false }
		},
		//新闻资讯
    {
      path: '/news/index',
      name: 'NewsIndex',
      component: (resolve) => require(['@/pages/news/index'], resolve),
      meta: { index: 2, title: '首页', requireAuth: false }
		},
		//新闻资讯活动列表
    {
      path: '/news/activeList',
      name: 'NewsActiveList',
      component: (resolve) => require(['@/pages/news/activeList'], resolve),
      meta: { index: 3, title: '活动动态列表', requireAuth: false }
		},
		//新闻资讯活动列表详情
    {
      path: '/news/activeDetails',
      name: 'NewsActiveDetails',
      component: (resolve) => require(['@/pages/news/activeDetails'], resolve),
      meta: { index: 4, title: '活动详情', requireAuth: false }
		},
		//新闻资讯成果展示列表
    {
      path: '/news/fruitsList',
      name: 'NewsFruitsList',
      component: (resolve) => require(['@/pages/news/fruitsList'], resolve),
      meta: { index: 3, title: '成果展示', requireAuth: false }
		},
		//新闻资讯活动列表详情
    {
      path: '/news/fruitsDetails',
      name: 'NewsFruitsDetails',
      component: (resolve) => require(['@/pages/news/fruitsDetails'], resolve),
      meta: { index: 4, title: '活动详情', requireAuth: false }
		},
		//新闻资讯推荐广告详情
    {
      path: '/news/advertDetails',
      name: 'NewsAdvertDetails',
      component: (resolve) => require(['@/pages/news/advertDetails'], resolve),
      meta: { index: 4, title: '活动详情', requireAuth: false }
		},
		//学习园地
    {
      path: '/learning/index',
      name: 'LearningIndex',
      component: (resolve) => require(['@/pages/learning/index'], resolve),
      meta: { index: 2, title: '活动详情', requireAuth: false }
		},
		//新闻列表详情
    {
      path: '/news/newsDetails',
      name: 'newsDetails',
      component: (resolve) => require(['@/pages/news/newsDetails'], resolve),
      meta: { index: 3, title: '视频详情', requireAuth: false }
		},
		//视频详情
    {
      path: '/news/newsVideoDetail',
      name: 'newsVideoDetail',
      component: (resolve) => require(['@/pages/news/newsVideoDetail'], resolve),
      meta: { index: 4, title: '视频详情', requireAuth: false }
		},
		//课堂
    {
      path: '/classroom/index',
      name: 'classroomIndex',
      component: (resolve) => require(['@/pages/classroom/index'], resolve),
      meta: { index: 2, title: '课堂', requireAuth: false }
		},
		//登录
    {
      path: '/reg/login',
      name: 'RegLogin',
      component: (resolve) => require(['@/pages/reg/login'], resolve),
      meta: { index: 0, title: '首页', requireAuth: false }
		},
		//注册
    {
      path: '/reg/register',
      name: 'RegRegister',
      component: (resolve) => require(['@/pages/reg/register'], resolve),
      meta: { index: 0, title: '首页', requireAuth: false }
		},
		//忘记密码
    {
      path: '/reg/forgetPwd',
      name: 'RegForgetPwd',
      component: (resolve) => require(['@/pages/reg/forgetPwd'], resolve),
      meta: { index: 0, title: '首页', requireAuth: false }
		},
		//信息化
    {
      path: '/informatization/index',
      name: 'InformatizationIndex',
      component: (resolve) => require(['@/pages/informatization/index'], resolve),
      meta: { index: 2, title: '首页', requireAuth: false }
		},
		//竞技 与 竞赛
    {
      path: '/informatization/sports',
      name: 'InformatizationSports',
      component: (resolve) => require(['@/pages/informatization/sports'], resolve),
      meta: { index: 3, title: '首页', requireAuth: false }
		},
		//详情
    {
      path: '/informatization/sportsDetails',
      name: 'InformatizetionSportsDetails',
      component: (resolve) => require(['@/pages/informatization/sportsDetails'], resolve),
      meta: { index: 4, title: '首页', requireAuth: false }
		},
		//教育装备
    {
      path: '/informatization/educational',
      name: 'InformatizationEducational',
      component: (resolve) => require(['@/pages/informatization/educational'], resolve),
      meta: { index: 3, title: '首页', requireAuth: false }
		},
		//教育详情
    {
      path: '/informatization/eduDetails',
      name: 'eduDetails',
      component: (resolve) => require(['@/pages/informatization/eduDetails'], resolve),
      meta: { index: 4, title: '教育装备详情', requireAuth: false }
		},
		//智慧校园
    {
      path: '/informatization/campus',
      name: 'InformatizationCampus',
      component: (resolve) => require(['@/pages/informatization/campus'], resolve),
      meta: { index: 3, title: '首页', requireAuth: false }
		},
    {
      path: '/informatization/campusDetails',
      name: 'InformatizetionCampusDetails',
      component: (resolve) => require(['@/pages/informatization/campusDetails'], resolve),
      meta: { index: 4, title: '首页', requireAuth: false }
		},
		//校园影视
    {
      path: '/informatization/movie',
      name: 'InformatizetionMovie',
      component: (resolve) => require(['@/pages/informatization/movie'], resolve),
      meta: { index: 3, title: '首页', requireAuth: false }
		},
		//校园影视
    {
      path: '/informatization/movieDetails',
      name: 'InformatizetionMovieDetails',
      component: (resolve) => require(['@/pages/informatization/movieDetails'], resolve),
      meta: { index: 4, title: '首页', requireAuth: false }
		},

		//资讯
    {
      path: '/information/index',
      name: 'InformationIndex',
      component: (resolve) => require(['@/pages/information/index'], resolve),
      meta: { index: 2, title: '首页', requireAuth: false }
		},
		//新装备列表
    {
      path: '/information/inforList',
      name: 'InformationInforList',
      component: (resolve) => require(['@/pages/information/inforList'], resolve),
      meta: { index: 3, title: '首页', requireAuth: false }
		},
		//政策法规列表
    {
      path: '/information/lawasList',
      name: 'InformationLawasList',
      component: (resolve) => require(['@/pages/information/lawasList'], resolve),
      meta: { index: 3, title: '首页', requireAuth: false }
		},
		//中心简介列表
    {
      path: '/information/brieList',
      name: 'InformationBrieList',
      component: (resolve) => require(['@/pages/information/brieList'], resolve),
      meta: { index: 3, title: '首页', requireAuth: false }
		},
		//硕果累累列表
    {
      path: '/information/fruitsList',
      name: 'InformationFruitsList',
      component: (resolve) => require(['@/pages/information/fruitsList'], resolve),
      meta: { index: 3, title: '首页', requireAuth: false }
		},
		//新装备列表详情
    {
      path: '/information/inforDetails',
      name: 'InformationInfor',
      component: (resolve) => require(['@/pages/information/inforDetails'], resolve),
      meta: { index: 4, title: '首页', requireAuth: false }
		},
		//硕果累累详情
    {
      path: '/information/fruitsDetails',
      name: 'InformationFruits',
      component: (resolve) => require(['@/pages/information/fruitsDetails'], resolve),
      meta: { index: 4, title: '首页', requireAuth: false }
		},
		//中心简介详情
    {
      path: '/information/brieDetails',
      name: 'InformationBrie',
      component: (resolve) => require(['@/pages/information/brieDetails'], resolve),
      meta: { index: 4, title: '首页', requireAuth: false }
		},
		//政策法规详情
    {
      path: '/information/lawasDetails',
      name: 'InformationLawas',
      component: (resolve) => require(['@/pages/information/lawasDetails'], resolve),
      meta: { index: 4, title: '首页', requireAuth: false }
		},
		//资源
    {
      path: '/resource/index',
      name: 'ResourceIndex',
      component: (resolve) => require(['@/pages/resource/index'], resolve),
      meta: { index: 2, title: '首页', requireAuth: false }
		},
		//空中课堂列表
    {
      path: '/resource/airRoom',
      name: 'ResourceAirRoom',
      component: (resolve) => require(['@/pages/resource/airRoom'], resolve),
      meta: { index: 3, title: '首页', requireAuth: false }
		},
		//视频资源列表
    {
      path: '/resource/videoList',
      name: 'ResourceVideoList',
      component: (resolve) => require(['@/pages/resource/videoList'], resolve),
      meta: { index: 3, title: '首页', requireAuth: false }
		},
		//视频资源列表详情
    {
      path: '/resource/videoDetails',
      name: 'ResourceVideoDetails',
      component: (resolve) => require(['@/pages/resource/videoDetails'], resolve),
      meta: { index: 4, title: '首页', requireAuth: false }
		},
		//公共资源列表
    {
      path: '/resource/presoceList',
      name: 'ResourcePresoceList',
      component: (resolve) => require(['@/pages/resource/presoceList'], resolve),
      meta: { index: 3, title: '首页', requireAuth: false }
		},
		//公共资源列表详情
    {
      path: '/resource/presoceDetails',
      name: 'ResourcePresoceDetails',
      component: (resolve) => require(['@/pages/resource/presoceDetails'], resolve),
      meta: { index: 4, title: '首页', requireAuth: false }
		},
		//阅读资源列表
    {
      path: '/resource/bookList',
      name: 'ResourceBookList',
      component: (resolve) => require(['@/pages/resource/bookList'], resolve),
      meta: { index: 3, title: '首页', requireAuth: false }
		},
		//阅读资源列表
    {
      path: '/resource/bookDetails',
      name: 'ResourceBookDetails',
      component: (resolve) => require(['@/pages/resource/bookDetails'], resolve),
      meta: { index: 4, title: '首页', requireAuth: false }
		},

		// //应用
		// {
		//   path: '/application/index',
		//   name: 'applicationIndex',
		//   component: resolve => require(['@/pages/application/index'], resolve) ,
		//   meta:{index: 2, title: '首页', requireAuth: false}
		// },

		// 数据中心
    {
      path: '/dataCenter/index',
      name: 'dataCenterIndex',
      component: (resolve) => require(['@/pages/dataCenter/Index'], resolve),
      meta: { index: 2, title: '首页', requireAuth: false }
    },
    {
      path: '/dataCenter/questionnaire',
      name: 'Questionnaire',
      component: (resolve) => require(['@/pages/dataCenter/Questionnaire'], resolve),
      meta: { index: 2, title: '首页', requireAuth: false }
    },

		//调查征集
    {
      path: '/application/collect',
      name: 'Collect',
      component: (resolve) => require(['@/pages/application/collect'], resolve),
      meta: { index: 3, title: '首页', requireAuth: false }
		},
		//调查征集详情
    {
      path: '/application/collectDetails',
      name: 'CollectDetails',
      component: (resolve) => require(['@/pages/application/collectDetails'], resolve),
      meta: { index: 4, title: '首页', requireAuth: false }
		},
		//会议签到
    {
      path: '/application/sign',
      name: 'Sign',
      component: (resolve) => require(['@/pages/application/sign'], resolve),
      meta: { index: 4, title: '首页', requireAuth: false }
		},
		//你问我答
    {
      path: '/application/askAnswer',
      name: 'AskAnswer',
      component: (resolve) => require(['@/pages/application/askAnswer'], resolve),
      meta: { index: 3, title: '首页', requireAuth: false }
		},
		//你问我答
    {
      path: '/application/askDetails',
      name: 'AskDetails',
      component: (resolve) => require(['@/pages/application/askDetails'], resolve),
      meta: { index: 4, title: '首页', requireAuth: false }
		},
		//我的
    {
      path: '/me/index',
      name: 'MeIndex',
      component: (resolve) => require(['@/pages/me/index'], resolve),
      meta: { index: 4, title: '我的', requireAuth: true }
		},
		//社区
    {
      path: '/community/index',
      name: 'communityIndex',
      component: (resolve) => require(['@/pages/community/index'], resolve),
      meta: { index: 4, title: '首页', requireAuth: false }
		},
		//发布
    {
      path: '/release/index',
      name: 'releaseIndex',
      component: (resolve) => require(['@/pages/release/index'], resolve),
      meta: { index: 4, title: '首页', requireAuth: false }
		},
		//党建
    {
      path: '/party/index',
      name: 'PartyIndex',
      component: (resolve) => require(['@/pages/party/index'], resolve),
      meta: { index: 3, title: '首页', requireAuth: false }
		},
		//党建
    {
      path: '/party/activeList',
      name: 'PartyActiveList',
      component: (resolve) => require(['@/pages/party/activeList'], resolve),
      meta: { index: 4, title: '首页', requireAuth: false }
		},
		//党建
    {
      path: '/party/activeDetails',
      name: 'PartyActiveDetails',
      component: (resolve) => require(['@/pages/party/activeDetails'], resolve),
      meta: { index: 5, title: '首页', requireAuth: false }
		}
	],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  //重置title
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  let path = to.path;
  let token = localStorage.getItem('Authorization');
  console.log(token, 9999, to.matched.some((record) => record.meta.requireAuth));
  // 判断该路由是否需要登录权限
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (token != 0) {
      next();
    } else {
      next({
        path: '/reg/login',
        query: { redirect: to.fullPath } // 将要跳转路由的path作为参数，传递到登录页面
      });
    }
  }
  next();
});
export default router;

/*
 * 后台接口
 */
export default {
  //首页
  home: {
    index: '/home/Indexd/index',//系统轮播图热点展示
    Classroom:'/home/Indexd/intheAir',//
    LiveRecod:'/home/Indexd/LiveRecod',//直播记录
  },
  // 数据中心
  dataCenter: {
    index: '/home/indexd/investigation', //调查调研
    islogin: '/home/indexd/investiLogin', //提交登录
    detail: '/home/indexd/gationDetal', //问卷详情页
    answer: '/home/indexd/gationAnswer' //提交答案
  },
  //技术装备
  tEquipment: {
    index: '/home/Indexd/technology',//技术装备列表
    details: '/home/Indexd/techContent',//技术装备列表详情
  },
  //新闻资讯
  newsX: {
    newBanner: '/home/Indexd/newBanner',//新闻首页
    dynamicsList: '/home/Indexd/dynamicsList', //活动动态列表
    dynamicsDetails: '/home/Indexd/dynamicsDetails', //活动详情
    achievementsList: '/home/Indexd/achievementsList', //成果展示
    achievementsDetails: '/home/Indexd/achievementsDetails' //成果展示文章详情
  },
  //学习园地
  learning: {
    Garden: '/home/Indexd/Garden',//学习园地首页
    readList: '/home/Indexd/readList',//阅读资源列表
    rebook: '/home/Indexd/rebook',//阅读内容
    redbook: '/home/Indexd/redbook',//阅读内容
    oneComment: '/home/Indexd/oneComment', //一级评论列表
    commentList: '/home/Indexd/commentList', //评论列表
    commentDetails: '/home/Indexd/commentDetails', //评论列表详情
    addComment: '/home/Indexd/addComment', //添加以及评论
    teaching: '/home/Indexd/teaching',//1,教学案例2,图书交流3课题研究4培训交流
    teachingContent: '/home/Indexd/teachingContent',//教学详情
    addToComment: '/home/Indexd/addToComment',//添加无限级评论
    presoceList: '/home/Indexd/presoceList',//在线资源列表
    presoceContent: '/home/Indexd/presoceContent',//在线资源列表详情
  },
  //专题活动
  specialActive: {
    schoolMoves: '/home/Indexd/schoolMoves',//专题活动首页
    prograList: '/home/Indexd/prograList',//计算机编程列表
    uavList: '/home/Indexd/uavList',//计算机编程列表
    uavContent: '/home/Indexd/uavContent',//计算机编程列表详情
    classroom: '/home/Indexd/classroom',//创新课堂列表
    education: '/home/Indexd/education',//创新教育应用专题
    experiment: '/home/Indexd/experiment',//创新实验联盟
    classroomContent: '/home/Indexd/classroomContent',//获取创新课堂列表，创新教育应用专题、创新实验联盟文章详情
    movesList: '/home/Indexd/movesList', //获取活动视频列表
    movesContent: '/home/Indexd/movesContent',  //获取活动视频详情
    schoolList: '/home/Indexd/schoolList',  //获取校园影视文章列表
    schoolContent: '/home/Indexd/schoolContent',  //获取校园影视文章详情
  },
  //技装之家
  technology: {
    technical: '/home/Indexd/technical',//技装之家首页
    jslogy: '/home/Indexd/jslogy',//技装之家技术部列表
    equip: '/home/Indexd/equip',//技装之家装备部列表
    edataip: '/home/Indexd/edataip',//技装之家数据部列表
    branchCntent: '/home/Indexd/branchCntent',//技装之家数据部列表详情
    officeList: '/home/Indexd/officeList', //技装之家办公室详情 1办公室2技术部3装备部4数据部
    officeContent: '/home/Indexd/officeContent',//获取中心机构文章详情
    activity: '/home/Indexd/activity',//获取中心机构文章
    activityContent: '/home/Indexd/activityContent',//获取中心机构文章详情
  },
  //信息化
  informatization: {
    proGram: '/home/Index/proGram',//计算机思维编程竞技列表
    proContent: '/home/Index/proContent',//计算机思维编程竞技详情内容
    inForAtion: '/home/Index/inForAtion',//信息化2.0页面数据
    equipment: '/home/Index/equipment', //教育装备列表
    equiContent: '/home/Index/equiContent', //教育装备文章详情
    wisdomSchool: '/home/Index/wisdomSchool',//智慧校园
    SchoolContent: '/home/Index/SchoolContent',//获取智慧校园文章详情
    SchoolMovies: '/home/Index/SchoolMovies', //校园影视
    MoviesContent: '/home/Index/MoviesContent', //获取校园影视文章详情
  },
  //新闻
  news: {
    newBanner: '/home/Index/newBanner', //新闻首页  //type=1活动动态 2通知公告
    newVideo: '/home/Index/newVideo',//视频列表
    newList: '/home/Index/newList',//视频列表详情
    videoContent: '/home/Index/videoContent',    //获取视频内容详情
  },

  //资讯
  information: {
    InfoActive: '/home/Index/InfoActive',       //获取新装备动态分类
    listActive: '/home/Index/listActive',       //获取新装备动态列表
    activeConten: '/home/Index/activeConten',       //获取新装备动态详情
    InfoLaws: '/home/Index/InfoLaws',      //政策法规分类
    lawsIndex: '/home/Index/lawsIndex',      //政策法规列表
    LawsContent: '/home/Index/LawsContent',      //政策法规详情
    InfoAward: '/home/Index/InfoAward',      //硕果累累首页
    AwardList: '/home/Index/AwardList',      //获取硕果累累文章列表
    AwardContent: '/home/Index/AwardContent',     //硕果累累详情
    brief: '/home/Index/brief',   //简介中心首页
    briefList: '/home/Index/briefList',     //部门介绍列表
    briefContent: '/home/Index/briefContent',     //简介文章详情
  },
  //资源
  resource: {
    Resources: '/home/Index/Resources', //资源首页
    Classroom: '/home/Index/Classroom', //空中课堂列表
    activityMoive: '/home/Index/activityMoive', //视频资源列表
    movieContent: '/home/Index/movieContent', //视频资源详情
    pubRescod: '/home/Index/pubRescod', //公共资源列表
    rescordContent: '/home/Index/rescordContent', //公共资源列表详情
    community: '/home/Index/community', //阅读社区
    ebook: '/home/Index/ebook', //阅读资源列表
    rebook: '/home/Index/rebook', //阅读资源详情
  },
  //应用
  application: {
    lication: '/home/Index/lication',  //应用首页
    question: '/home/Index/question',    //问答列表
    quesContent: '/home/Index/quesContent', //问答详情
    survey: '/home/Index/survey',    //调查征集列表
    surveyContent: '/home/Index/surveyContent',    //调查征集详情
  },
  party:{
    partyIndex: '/home/Index/partyIndex',  //党建首页
    partyList: '/home/Index/partyList',    //党建活动列表
    partyMember: '/home/Index/partyMember', //党员列表
    partyActiveContent: '/home/Index/partyActiveContent', //党建活动/党员详情
  },
  reg: {
    register: '/home/Indexd/register',//用户注册
    telCode: '/home/Indexd/telCode',//发送验证码
    outLogin: '/home/Indexd/outLogin',//注销登录
    UserLogin: '/home/Indexd/UserLogin',//用户登录
  },
  //社区
  community: {

  },
  me:{
    userIndex: '/home/Indexd/UserIndex',//用户首页
    editUserInfo: '/home/Indexd/editUserInfo',//用户首页
  }
}

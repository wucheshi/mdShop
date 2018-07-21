//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 分类列表
    typeList: [
      {
        value: 0,
        label: '推荐',
      },
      {
        value: 1,
        label: '量版组合',
      },
      {
        value: 2,
        label: '肉脯海鲜',
      },
      {
        value: 3,
        label: '休闲零食',
      },
      {
        value: 4,
        label: '推荐11',
      }
    ],

    // 当前选中分类
    currentType: 0,

    // 轮播图片数组
    imgUrls: [
      {
        src: 'http://i1.bvimg.com/654779/234619b4c03537e6.png',
        link: ''
      },
      {
        src: 'http://i1.bvimg.com/654779/234619b4c03537e6.png',
        link: ''
      },
      {
        src: 'http://i1.bvimg.com/654779/234619b4c03537e6.png',
        link: ''
      }
    ],

    // 轮播组件高度
    bannerHeight: 0,

    // 中间广告图
    middleBanner: 'http://i1.bvimg.com/654779/f93d107abad6d469.png',

    // 菜单列表
    menuList: [
      {
        src: 'http://i1.bvimg.com/654779/08ed38de36843444.png',
        title: '领券中心'
      },
      {
        src: 'http://i1.bvimg.com/654779/314880e4304609a8.png',
        title: '每日签到'
      },
      {
        src: 'http://i1.bvimg.com/654779/7350f2a76e77bec3.png',
        title: '福利抽奖'
      },
      {
        src: 'http://i1.bvimg.com/654779/8a0057e18a18f2ef.png',
        title: '会员中心'
      }
    ],

    // 产品banner
    proBanner: 'http://i1.bvimg.com/654779/6ebb48cbae1d7911.png',

    // 产品列表
    proList: [
      {
        src: 'http://i1.bvimg.com/654779/d934ec823ec6ceb3.png',
        name: '夏威夷果',
        price: '46.9',
        oldPrice: '78.8'
      },
      {
        src: 'http://i1.bvimg.com/654779/d634f40c1d013658.png',
        name: '野生核桃',
        price: '46.9',
        oldPrice: '78.8'
      },
      {
        src: 'http://i1.bvimg.com/654779/ab32ff27bee0c4db.png',
        name: '坚果搭配',
        price: '46.9',
        oldPrice: '78.8'
      },
      {
        src: 'http://i1.bvimg.com/654779/8a1b57b55824258a.png',
        name: '坚果搭配',
        price: '46.9',
        oldPrice: '78.8'
      },
      {
        src: 'http://i1.bvimg.com/654779/5189e5693222c38d.png',
        name: '坚果搭配',
        price: '46.9',
        oldPrice: '78.8'
      },
      {
        src: 'http://i1.bvimg.com/654779/7778879728ebfbd2.png',
        name: '坚果搭配',
        price: '46.9',
        oldPrice: '78.8'
      }
    ],

    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  // 选择分类
  selectType (e) {
    let { target: { dataset: { index, item } } } = e
    this.setData({
      currentType: index
    })
  },
  // 动态设置swiper高度
  imageLoad (e) {
    let { screenWidth } = wx.getSystemInfoSync()
    let { detail: { width, height } } = e
    let ratio = width / height
    this.setData({
      bannerHeight: screenWidth / ratio
    })
  },
  onLoad: function () {
    
  }
})

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
      }
    ],

    // 当前选中分类
    currentType: 0,

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
    // console.log(index, item)
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    // 话题tags
    topicTags: [
      {
        id: 0,
        title: '全部'
      },
      {
        id: 1,
        title: '6月第二期新品试吃'
      },
      {
        id: 1,
        title: '6月第二期新品试吃'
      },
      {
        id: 1,
        title: '6月第二期新品试吃'
      }
    ],

    // 话题中间banner
    topicBanner: 'http://i4.bvimg.com/654779/6962858c005cf9b6.png',

    // 话题列表
    topicList: [
      {
        src: 'http://i4.bvimg.com/654779/b9d60932adbcde56.png',
        title: '小味官方账号',
        pTime: '5-18 00:00',
        content: '上期新品故事池奖励已发放<br>@测试内容',
        imageArr: [
          'http://i4.bvimg.com/654779/c162cb8cbb9c15bb.png',
          'http://i4.bvimg.com/654779/a3ef7f00a38a36e6.png',
          'http://i4.bvimg.com/654779/a1e7a3bf74195836.png'
        ],
        seeNum: 0,
        heartNum: 1,
        messageNum: 2
      },
      {
        src: 'http://i4.bvimg.com/654779/b9d60932adbcde56.png',
        title: '小味官方账号',
        pTime: '5-18 00:00',
        content: '上期新品故事池奖励已发放<br>@测试内容',
        imageArr: [
          'http://i4.bvimg.com/654779/c162cb8cbb9c15bb.png',
          'http://i4.bvimg.com/654779/a3ef7f00a38a36e6.png',
          'http://i4.bvimg.com/654779/a1e7a3bf74195836.png'
        ],
        seeNum: 0,
        heartNum: 1,
        messageNum: 2
      }
    ]
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})

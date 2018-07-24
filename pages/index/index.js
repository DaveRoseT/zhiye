//index.js
//获取应用实例
const app = getApp()
 
Page({
  data: {
    nav:[
      { navTitle: '新房', navImage: 'image/nav-1.png', url:'../../pages/nav/second-house/second-house'},
      { navTitle: '二手房', navImage: 'image/nav-2.png', url: '../../pages/nav/second/second'},
      { navTitle: '置业顾问', navImage: 'image/nav-3.png', url: '../../pages/nav/dynatown/dynatown'}
    ],
    list:[] 
  },
  onLoad: function () {
    this.requestHot()
  },
  navGoTo: function (uri){
    wx.navigateTo({
      url: uri 
    })
  },
  search:function(){
    wx.navigateTo({
      url: '../../pages/search/search'
    })
  },
  requestHot:function(){
    let that = this;
    wx.request({
      url: 'https://way.jd.com/jisuapi/get?channel=头条&num=10&start=0&appkey=74beee27c3e62354a0a751bb088ff892', //仅为示例，并非真实的接口地址
      method:'GEt',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data.result.result.list)
        that.setData({
          list: res.data.result.result.list
        })
      }
    })
  },
  listGoTo:function(e){
    var caseId = e.currentTarget.dataset.caseid;
    wx.navigateTo({
      url: '../nav/house-xq/house-xq?caseid='+caseId
    })
  }
})

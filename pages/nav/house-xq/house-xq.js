// pages/nav/house-xq/house-xq.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../../image/b1.png',
      '../../../image/b2.png'
    ],
    title:"页面的初始数据页面的初始数据页面的初始数据页面的初始数据",
    Hei: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    wx.setNavigationBarTitle({
      title: '二手房'
    })
  }, 
  imgH: function (e) {
    var winWid = wx.getSystemInfoSync().windowWidth;
    var imgh = e.detail.height;
    var imgw = e.detail.width;
    var swiperH = winWid * imgh / imgw + "px";
    this.setData({
      Hei: swiperH
    })
  }
})
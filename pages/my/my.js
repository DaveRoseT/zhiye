// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.selectAutoWidth();
  },
  selectAutoWidth: function () {
    var that = this;
    var query = wx.createSelectorQuery();
    query.select('.bgImg').boundingClientRect(function (rect) {
      that.setData({
        height: rect.height
      })
    }).exec()
  }

 
})
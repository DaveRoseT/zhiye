// pages/second-house/second-house.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabBloo: [true, true, true],
    tab: ['全开封','价格','户型'],
    areaId:0,
    priceId:0,
    typeId:0,
    selectAutoWidth:'',
    left:0,
    right:0,
    isShow:false,
    iconOn:"../../../image/bottom-on.png",
    icon: "../../../image/bottom.png",
    disabled: false,//加载更多按钮状态
    page: 1,//当前页码
    hasMore: false,//加载更多按钮
    moreTxt: '点击加载更多',
    dataNull: true
  },
  onLoad: function (options) {
    this.selectAutoWidth();
    wx.setNavigationBarTitle({
      title: '二手房'
    })
  },
  selectAutoWidth:function(){
    let that = this;
    let query = wx.createSelectorQuery();
    query.select('.selectBox .aaa').boundingClientRect(function (rect) {
      that.setData({
        selectAutoWidth : rect.width
      })
    }).exec()
  },
  /*点击筛选列表请求*/
  addrIn:function(e){
    let data = [true, true, true];
    let index = e.currentTarget.dataset.index;
    data[index] = !this.data.tabBloo[index];
    this.setData({
      tabBloo: data,
      isShow:true
    })
    console.log(this.data.tabBloo)
  },
  /*点击列表筛选*/
  tapFilter:function(e){
    let that = this, id = e.currentTarget.dataset.id, txt = e.currentTarget.dataset.txt, tab = this.data.tab;
    switch (e.currentTarget.dataset.index) {
      case '0':
        tab[0] = txt;
        that.setData({
          page: 1,
          data: [],
          tabBloo: [true, true, true],
          tab: tab,
          areaId:id,
          isShow:false
        });
        break;
      case '1':
        tab[1] = txt;
        that.setData({
          page: 1,
          data: [],
          tabBloo: [true, true, true],
          tab: tab,
          priceId: id,
          isShow: false
        });
        break;
      case '2':
        tab[2] = txt;
        that.setData({
          page: 1,
          data: [],
          tabBloo: [true, true, true],
          tab: tab,
          typeId: id,
          isShow: false
        });
        break;
    }
    //数据筛选
    that.getData();
  },
  /*数据*/
  dataFormat: function (res) {
    /*状态判断*/
    if (res == "1") {
      let lentgh = 5;
      /*存在时*/
      if (d.data.data) {
        this.setData({
          data: datas,
          disabled: lentgh<5 ? true : false, //是否到达五条数据
          moreTxt: lentgh < 5? "已加载全部数据" : "点击加载更多",//是否到达五条数据
          hasMore: true,
          dataNull: true
        });
      } else {
        this.setData({
          hasMore: false,
          dataNull: false
        });
      }
    } else {
      console.log('出现错误！')
    }
    wx.hideToast();
  },
  getData: function (callback) {
    var that = this;
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 10000
    });
    /*wx.request({
      url: app.api.subjectList,
      data: {
        参数
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.dataFormat(res);
      },
      fail: function () {
        console.log('error!!!!!!!!!!!!!!')
      }
    })*/
  },
  //加载更多
  getMore: function () {
    var that = this;
    that.data.page++;
    that.getData(function (res) {
      that.dataFormat(res)
    });
  }
})
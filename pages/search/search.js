Page({
  data: {
    inputVal: '',
    searchRecord: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.openHistorySearch()
  },

  //点击搜索按钮提交表单跳转并储存历史记录
  searchSubmitFn: function (e) {
    let that = this
    let inputVal = e.detail.value.input
    let searchRecord = this.data.searchRecord
    if (inputVal == '') {
      wx.showToast({
        title: '请输入搜索内容',
        icon:'none'
      })
      return false;
    }
    else {
      if (searchRecord.length < 5) {
        searchRecord.unshift(
          {
            value: inputVal,
            //id: searchRecord.length
          }
        )
      }
      else {
        searchRecord.pop()
        searchRecord.unshift(
          {
            value: inputVal,
            //id: searchRecord.length
          }
        )
      }
      wx.setStorageSync('searchRecord', searchRecord)
    }
  },
  openHistorySearch: function () {
    let getData = wx.getStorageSync('searchRecord')
    let getDataArr =[];
    if (getData.length!=0){
      getData.forEach(function (v, i) {
        getDataArr.push(v.value)
      })
      var result = [];
      var obj = {};
      for (var i = 0; i < getDataArr.length; i++) {
        if (!obj[getDataArr[i]]) {
          obj[getDataArr[i]] = 1;
          result.push(getDataArr[i]);
        }
      }
    }
   
    else{
      wx.showToast({
        title: '暂无搜索历史',
        icon: 'none',
        duration: 2000
      })
    }
    this.setData({
      searchRecord: result || []
    })
  }
  /*点击搜索历史*/ 
  /*searchHistry:function(e){
    console.log(e)
    this.setData({
      inputVal: e.currentTarget.dataset.html
    })
  }*/
})
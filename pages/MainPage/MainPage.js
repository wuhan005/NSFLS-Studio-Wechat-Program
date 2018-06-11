// pages/MainPage/MainPage.js
var util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowPage: 1,
    isFirstLoad: true,
    isLoading:true,
    isLoadingComplete:false,
    videoItemList: []
  },

//拉取视频的封装函数
  fetchVideoItems:function(){
    let that = this;
    util.getVideoItems(that.data.nowPage, function (data) {
      let videoList = [];
      if (data.length != 0){
        //数据不为空
        if (that.data.isFirstLoad) {
          //第一次加载数据
          that.data.isFirstLoad = false;
          videoList = that.data.videoItemList.concat(data);
        } else {
          videoList = that.data.videoItemList.concat(data);
        }
        
        that.setData({
          videoItemList: videoList,
        });
      }else{
        //数据为空
        that.setData({
          isLoading: false,
          isLoadingComplete: true
        })
      }
    })
  },

//滑动到底部时，拉取新的视频
  scrollLower:function(){
    let that = this;
    that.setData({
      nowPage: that.data.nowPage + 1,  //每次触发上拉事件，把nowPage+1  
      isFirstLoad: false
    });
    that.fetchVideoItems();
  },

  pleaseByYourself:function(){
    wx.showModal({
      title: '不存在搜索的！',
      content: '就这么几个视频，自己翻吧~',
      showCancel:false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchVideoItems();
    this.setData({
      isLoading: true,
      isLoadingComplete: false
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
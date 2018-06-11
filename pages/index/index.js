//index.js
//获取应用实例
const app = getApp()

var vID; //视频的ID!!!

Page({
  onLoad: function (options){
    if (options.vid == null){ //本地测试时，无法设置参数
      vID = 21; //默认为2018十大视频
    } else { 
      vID = options.vid;
    }
  },
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo'); //视频组件初始化

    //视频API接口
    var that = this
    wx.request({
      url: 'https://yourdomainhere.com/Api/' + vID,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        //设置UI
        that.setData({
          videoTitle: res.data[0]['vTitle'],
          videoType: res.data[0]['vType'],
          videoLong: res.data[0]['vLong'],
          videoInfo: res.data[0]['vInfo'],
          videoStaff: res.data[0]['vStaff'],
          videoURL: res.data[0]['vURL']
        })
      }
    })
  },

//视频部分
  videoErrorCallback: function (e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  }
})
// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 视频详情
    videoInfo:null,
    // 其他视频
    otherList:[],
    // 评论列表
    commentData:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    let videoId=options.id

    this.getCurrentVideo(videoId)
    this.getOthersList(videoId)
    this.getCommentList(videoId)
  },
  /**
   * 获取视频
   */
  getCurrentVideo(videoId){
    let that=this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videoDetail?id='+videoId,
      success(res){
        console.log(res)
        if(res.data.code===0){
          that.setData({
            videoInfo:res.data.data.videoInfo
          })
        }
      }
    })
  
  },
  /**
   * 获取其他视频列表
   */
  getOthersList(videoId){
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList?id='+videoId,
      success(res){
        console.log(res)
       if(res.data.data.code===0){
         that.setData({
           otherList:res.data.data.otherList
         })
       }
      }
    })
  },

  /**
   * 获取评论列表
   */
  getCommentList(videoId){
    let that=this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/commentsList?id=' + videoId,
      success(res){
        // console.log(res)
        if(res.data.data.code===0){
          that.setData({
            commentData:res.data.data.commentData
          })
        }
      }
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
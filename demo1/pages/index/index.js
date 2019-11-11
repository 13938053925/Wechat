// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'Hello World',
    src:'/images/1.jpg'

  },
  show:function(){
    wx.showToast({
      title: 'hello world',
      duration: 5000,
      icon:'success',
      
    })
  },
  close:function(){
    wx.hideToast();
  },
  getMyInfo:function(e){
    console.log(e.detail.userInfo);
    let info=e.detail.userInfo;
    this.setData({
      name:info.nickName,  //更新名称
      src:info.avatarUrl  //更新图片来源
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
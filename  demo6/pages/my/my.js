// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName:'点击登录',
    src:'/images/index1.png',
    newList: [
      {
        id: '356412',
        title: '特写：2019，天安门城楼前的中国',
        poster: 'http://image1.chinanews.com.cn/cnsupload/big/2019/10-01/4-426/a7e426b0dd6c43d2bc710fafe810a0d5.jpg',
        add_date: '2019-10-01'
      }],

  },
  getMyInfo: function (e) {
    console.log(e.detail.userInfo);
    let info = e.detail.userInfo;
    this.setData({
      nickName: info.nickName,  //更新名称
      src: info.avatarUrl  //更新图片来源
    })
  },
  goToDetail:function(e){
    wx.navigateTo({
      url: '/pages/detail/detail',
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
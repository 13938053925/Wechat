Page({


  dowmFile(){

    wx.cloud.downloadFile({
      fileID: 'cloud://xiaochengxu-h51fa.7869-xiaochengxu-h51fa-1300639849/file/15736974324611.txt',
      success: res => {
        // get temp file path
        // console.log("下载成功",res.tempFilePath)
        wx.openDocument({
          filePath: res.tempFilePath,
          success: function (res) {
            console.log('打开文档成功')
          }
        })
      },
      fail: err => {
        // handle error
      }
    })

  },
  goToDetail(){
    wx.navigateTo({
      url: '../detail/detail',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  upload(){
    let that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        console.log(res)
       
        that.uploadImg(res.tempFilePaths[0]);
      }
    })
  },
  uploadImg(fileUrl){
    let that = this
    wx.cloud.uploadFile({
      cloudPath: "images/"+new Date().getTime()+'m.png',//上传至云端的
      filePath: fileUrl,
      success(res) {
        console.log(res)
        that.setData({
          imgSrc:res.fileID
        })
      },
      fail: console.error
    })
  },
  uploadFile(){
    let that =  this
    wx.chooseMessageFile({
      count: 10,
      type: 'txt',
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        wx.cloud.uploadFile({
          cloudPath: 'file/' + new Date().getTime()+"1.txt" ,
          filePath: res.tempFiles[0].path,
          success(res) {
            console.log("上传文件成功", res)
          
          },
          fail: console.error
        })
      }
    })
  },
  uploadVideo(){
    let that = this
    wx.chooseVideo({
      
      sourceType: ['album', 'camera'],
      maxDuration: 60,  //视频时长
      camera: 'front',
      success(res) {
        console.log(res.tempFilePath)
        wx.cloud.uploadFile({
          cloudPath: 'video/' + new Date().getTime() +'.mp4',
          filePath: res.tempFilePath,
          success(res) {
            console.log("上传视屏成功",res)
           that.setData({
             videoSrc:res.fileID
           })
          },
          fail: console.error
        })
      },
     
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    imgSrc:'', 
    videoSrc:'',
    fileSrc:''
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
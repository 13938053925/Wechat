const db=wx.cloud.database().collection("list")
let name=""
let age=""
let id=""
Page({
  addName(e){
    console.log(e.detail.value)
    name=e.detail.value
  },
  addAge(e) {
    console.log(e.detail.value)
    age=e.detail.value
  },
  delDataInput(e){
    console.log("要删除的id",e.detail.value)
    id = e.detail.value

  },
  udpDataInput(e){
    console.log("要更新的id", e.detail.value)
    id = e.detail.value
  },
  udpAge(e) {
    console.log(e.detail.value)
    age = e.detail.value
  },

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  addData(){
    let that=this;
    db.add({
      data:{
        name:name,
        age:age
      },
      success(res){
        console.log("添加成功",res)
      },
      fail(res){
        console.log("添加失败", res)

      }
    })
  },

  selectData(){
   db.get({
    
     success(res){
       console.log(res)
     }
   })
  },
 
  delData(){
    db.doc(id).remove({
      success(res){
        console.log("删除成功",res)
      },
      fail(res){
        console.log("删除失败", res)

      }
    }) 
  },
  udpData(){
    db.doc(id).update({
      data:{
        age:age
      },
      success(res) {
        console.log("更新成功", res)
      },
      fail(res) {
        console.log("更新失败", res)

      }
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
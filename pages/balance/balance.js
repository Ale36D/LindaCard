// pages/balance/balance.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleName:"",
    name:"",
    stuID:"",
    money:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      titleName:options.titleName,
      name:options.name,
      stuID:options.stuID,
      money:options.money,
    })
    wx.setNavigationBarTitle({
      title:this.data.titleName
    })
  },
  balanceClick:function(event){
    wx.showLoading({
      duration:1000
    })
   setTimeout(()=>{
    wx.showToast({
      title: '请重新尝试',
      icon:'error',
      duration:1000
    })
   }, 1100)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
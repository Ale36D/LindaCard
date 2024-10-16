// pages/recharge/recharge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isHinddenLodingBar:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let id = options.titleName
    wx.setNavigationBarTitle({
      title: id,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    
  },
  lodingBarOver:function(event){
    let value = this.data.isHinddenLodingBar
    this.setData({
      isHinddenLodingBar:!value
    })
    setTimeout(()=>{
      wx.showLoading({
      })
    }, 1000)
    setTimeout(()=>{
      wx.hideLoading()
      wx.showToast({
        title: '加载失败',
        icon:"error"
      })
      
    }, 3500)
    setTimeout(()=>{
      wx.navigateTo({
        url: '/pages/home/home',
      })
    }, 4000)
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
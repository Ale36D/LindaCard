// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleName:"",
    isHinddenLodingBar:false
  },
  lodingBarOver:function(event){
    let value = this.data.isHinddenLodingBar
    this.setData({
      isHinddenLodingBar:!value
    })
    this.loadingBarShow()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      titleName:options.titleName
    })
    wx.setNavigationBarTitle({
      title:this.data.titleName
    })
  },
  loadingBarShow:function(){
    setTimeout(()=>{
      wx.showLoading({
        duration:2500
      })
    }, 300)
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
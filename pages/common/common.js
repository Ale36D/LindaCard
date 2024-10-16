// pages/common/common.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleName:"",
    src:"",
    sysheight:0,
    srcColor:'',
    isHinddenLodingBar:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      src:options.src,
      srcColor:options.color,
      titleName:options.titleName
    })
    console.log(this.data.srcColor)
    wx.getSystemInfo({//获取设备屏幕真实高度
      success: (result) => {
        this.setData({
          sysheight:result.windowHeight
        })
      },
    })
    wx.setNavigationBarTitle({
      title: this.data.titleName,
    })
  },
  lodingBarOver:function(event){
    let value = this.data.isHinddenLodingBar
    this.setData({
      isHinddenLodingBar:!value
    })
    this.lodingImgToView()
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
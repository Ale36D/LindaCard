// pages/relieve/relieve.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    cardID:"",
    stuID:"",
    titleName:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      titleName:options.titleName,
      name:options.name,
      cardID:options.cardID,
      stuID:options.stuID
    })
    wx.setNavigationBarTitle({
      title: this.data.titleName
    })
  },
  relieveBtn:function(){
    wx.showModal({
      title: '提示',
      content: '确定要解绑您的信息吗?',
      complete: (res) => {
        if (res.cancel) {
          
        }
    
        if (res.confirm) {
          
        }
      }
    })
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
// pages/ElePay/ElePay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleName:"",
    stuID:"",
    roomInfoList:[
      {icon:"/pages/img/12.png", nameInfo:"区域", tipsInfo:"点击选择区域", regionList:["第一生活区","第二生活区","费县校区"]},
      {icon:"/pages/img/13.png", nameInfo:"楼号", tipsInfo:"点击选择楼号", regionList:["B1","B2","B3","B4","C1","C2","C3","C4","C5","C6","D1","D2","D3","D4","D5","D6","D7","F1","F2","F3","F4"]},
      {icon:"/pages/img/14.png", nameInfo:"楼层", tipsInfo:"点击选择楼层", regionList:["一层","二层","三层","四层","五层","六层"]},
      {icon:"/pages/img/15.png", nameInfo:"房间", tipsInfo:"点击选择房间", regionList:[]},
    ],
    refundReason:null
  },
 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      titleName:options.titleName,
      stuID:options.stuID
    })
    wx.setNavigationBarTitle({
      title:this.data.titleName
    })
  },
  bindCampusChange:function(e){
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
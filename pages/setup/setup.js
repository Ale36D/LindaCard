// pages/setup/setup.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    srcPath:"https://gitee.com/uncleicecream/bk-img/raw/master/微信图片_20240320185959.webp",
    name:"",
    stuID:"",
    money:"",
    payCode:"https://gitee.com/uncleicecream/bk-img/raw/master/payCode.webp",
    isShowPayCode:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  getInputValue:function(){
    this.setData({
      name:wx.getStorageSync('UserName'),
      stuID:wx.getStorageSync('UserStuID'),
      money:wx.getStorageSync('UserMoney')
    })
    wx.showActionSheet({
      itemList: ["名字:" + this.data.name, "学号:" +this.data.stuID, "余额:" +this.data.money]
    })
  },
  setValueToLocal:function(){
    var value_name =  this.data.name
    var value_stuID =  this.data.stuID
    var value_money =  this.data.money
    wx.showModal({
      title: '提示',
      content: '将会更改之前存储的信息!',
      success (res) {
        if (res.confirm) {
          wx.setStorageSync("UserName", value_name);
          wx.setStorageSync("UserStuID", value_stuID);
          wx.setStorageSync("UserMoney", value_money);
          wx.showToast({
            title: '重进小程序',
            icon:"success"
          })
        } 
      }
    })
    
  },
  nameInput:function(event){
    this.setData({
      name:event.detail.value
    })
  },
  stuIDInput:function(event){
    this.setData({
      stuID:event.detail.value
    })
  },
  moneyInput:function(event){
    this.setData({
      money:event.detail.value
    })
  },
  showPayCodeView:function(){
    let value = this.data.isShowPayCode
    this.setData({
      isShowPayCode:!value
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
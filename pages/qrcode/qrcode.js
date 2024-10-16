// pages/qrcode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isHiddenView:true,
    name:"",
    imgPath:[
      "/pages/img/code_1.png",
      "/pages/img/code_2.png",
      "/pages/img/code_3.png",
      "/pages/img/code_4.png",
      "/pages/img/code_5.png",
    ],
    nowImgPath:"",
    refreshLabelText:"点击刷新",
    isClickFlag:false,
    isHinddenLodingBar:false,
    nowImgID:0,
    refreshImgPath:"/pages/img/ref.png"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let that = this
    that.setData({
      name:options.name
    })
    wx.setNavigationBarTitle({
      title: '获取用户信息'
    })
  },
  lodingBarOver:function(event){
    wx.setNavigationBarTitle({
      title: '二维码'
    })
    let value = this.data.isHinddenLodingBar
    this.setData({
      isHinddenLodingBar:!value
    })
    this.lodingImgToView()
  },
  hiddenView:function(event){
    let value = this.data.isHiddenView
    this.setData({
      isHiddenView:!value
    })
  },
  refreshClickBtn:function(){
    let id = this.data.nowImgID
    if(!this.data.isClickFlag){
      this.setData({
        refreshLabelText:"已刷新",
        refreshImgPath:"/pages/img/refresh.png",
        isClickFlag:true,
        nowImgID:id + 1
      })
      if(this.data.nowImgID > 4){
        this.setData({
          nowImgID:0
        })
      }
      wx.showLoading({
      })
      setTimeout(()=>{
        this.setData({
          nowImgPath:"/pages/img/code_" + this.data.nowImgID + ".png"
        })
        wx.hideLoading()
      }, 400)

      setTimeout(()=>{
        this.setData({
          refreshLabelText:"点击刷新",
          refreshImgPath:"/pages/img/ref.png",
          isClickFlag:false
        })
      }, 3000)
    }
  },
  lodingImgToView(){
    setTimeout(()=>{
      wx.showLoading({
      })
    }, 500)
    let id =(Math.floor(Math.random()*10+1)%5)
    this.setData({
      nowImgID:id
    })
    setTimeout(()=>{
      this.setData({
        nowImgPath:"/pages/img/code_" + id + ".png"
      })
      wx.hideLoading()
    }, 1000)
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
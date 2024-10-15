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
    isClickFlag:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let that = this
    that.setData({
      name:options.name
    })
  },
  hiddenView:function(event){
    let value = this.data.isHiddenView
    this.setData({
      isHiddenView:!value
    })
  },
  refreshClickBtn:function(){
    if(!this.data.isClickFlag){
      this.setData({
        nowImgPath:"",
        refreshLabelText:"已刷新",
        isClickFlag:true
      })
      wx.showLoading({
        title: '',
      })
      let id =(Math.floor(Math.random()*10+1)%5)
      setTimeout(()=>{
        this.setData({
          nowImgPath:"/pages/img/code_" + id + ".png"
        })
        wx.hideLoading()
      }, 400)
      setTimeout(()=>{
        this.setData({
          refreshLabelText:"点击刷新",
          isClickFlag:false
        })
      }, 2000)
    }
    
  },
  lodingImgToView(){
    setTimeout(()=>{
      wx.showLoading({
        title: '',
      })
    }, 1000)
    let id =(Math.floor(Math.random()*10+1)%5)
    setTimeout(()=>{
      this.setData({
        nowImgPath:"/pages/img/code_" + id + ".png"
      })
      wx.hideLoading()
    }, 1400)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.lodingImgToView()
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
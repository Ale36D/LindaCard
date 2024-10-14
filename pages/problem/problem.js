// pages/problem/problem.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleName:"",
    showIndex: 10,
    questList: [{
      title: '绑定E码通',
      content: "若提示您的信息验证失败,请您先核实您的信息是否填写正确,如果您已确保信息无误,请到学校校园卡服务中心解决此问题密码是学校统一设置的，一般默认为是身份证号或学工号后六位（以'X'结尾的,用'0'代替）",
      t:false,
    }, {
      title: '消费记录',
      content: "消费记录为您展示的是您交易流水信息,由于机制问题可能您的记录不能及时的呈现在页面中,请稍后再试。 本记录仅供参考,请以校园卡系统实际数据为准",
      t:false,
    }, {
      title: '余额查询',
      content: "页面上为您展示的余额信息可能与您实际余额存在不一致的情况,仅供参考。",
      t:false,
    },
    {
      title: '其他服务',
      content: "其他服务由对应服务商提供,如有问题可与对应服务商联系或向学校反馈问题。",
      t:false,
    }]
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
  panel: function (e) {
    this.data.questList[e.currentTarget.dataset.index].t = !this.data.questList[e.currentTarget.dataset.index].t
    this.setData({
      questList:this.data.questList
    })
    if (e.currentTarget.dataset.index != this.data.showIndex) {
      this.setData({
        showIndex: e.currentTarget.dataset.index,
      })
    } 
    else {
      this.setData({
        showIndex: 10
      })
    }
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
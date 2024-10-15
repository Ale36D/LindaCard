getApp();

Page({
    data:{
      name: "王五",
      stuID: "202209070306",
      money: "508.25",
      titleSrc:"https://gitee.com/uncleicecream/bk-img/raw/master/rc.webp",
      accountRecharge:"https://gitee.com/uncleicecream/bk-img/raw/master/Recharge.webp",
      facialInformationCollection:"https://gitee.com/uncleicecream/bk-img/raw/master/collection.webp",
      instructions:"https://gitee.com/uncleicecream/bk-img/raw/master/use.webp",
      faceView:"/pages/img/pic.png",
      white:'#ffffff',
      black:'#000000',
      url:"www.baidu.com"
    },
    onLoad: function() {
      
      this.setData({
        name:wx.getStorageSync('UserName'),
        stuID:wx.getStorageSync('UserStuID'),
        money:wx.getStorageSync('UserMoney')
      })
    },
    onReady(){
      wx.showLoading({
        title: '加载中',
        mask:true
      })
      
      setTimeout(function () {
        wx.hideLoading()
      }, 300)
    },
    onImageTap: function(event) {
      wx.navigateTo({
        url: "/pages/qrcode/qrcode?name=" + this.data.name
    });
    },
    accountRecharge:function(event){
      wx.navigateTo({
        url: "/pages/common/common?src=" + this.data.accountRecharge  + "&color=" + this.data.black
      });
    },
    facialInformationCollection:function(event){
      wx.navigateTo({
        url: "/pages/common/common?src=" + this.data.facialInformationCollection + "&color=" + this.data.black
      });
    },
    instructions:function(event){
      wx.navigateTo({
        url: "/pages/common/common?src=" + this.data.instructions + "&color=" + this.data.white
      });
    },
    openBalance:function(event){
      wx.navigateTo({
        url: "/pages/balance/balance?titleName=" + "余额" + "&name=" + this.data.name + "&stuID=" + this.data.stuID + "&money=" + this.data.money
      });
    },
    openBill:function(event){
      wx.navigateTo({
        url: "/pages/details/details?titleName=" + '账单'
      });
    },
    openFaceView:function(){
      wx.navigateTo({
        url: "/pages/faceView/faceView?titleName=" + '照片质量查询' + "&src=" + this.data.faceView
      });
    },
    openPawdModify:function(event){
      wx.navigateTo({
        url: '/pages/pswdmodify/pswdmodify?titleName=' + "密码修改" + "&name=" + this.data.name + "&stuID=" + this.data.stuID
      })
    },
    openRelieve:function(){
      wx.navigateTo({
        url: '/pages/relieve/relieve?titleName=' + "解除绑定" + "&name=" + this.data.name + "&cardID=" + "10666" + 
          "&stuID=" + this.data.stuID
      })
    },
    openProblem:function(){
      wx.navigateTo({
        url: '/pages/problem/problem?titleName=' + "常见问题"
      })
    },
    openSetUp:function(){
      wx.navigateTo({
        url: '/pages/setup/setup',
      })
    },
    openElePay:function(){
      wx.navigateTo({
        url: '/pages/ElePay/ElePay?titleName=' + "电控缴费"
      })
    },
    openRecharge:function(){
      wx.navigateTo({
        url: '/pages/recharge/recharge'
      })
    }
    
});
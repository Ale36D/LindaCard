getApp();

Page({
    onLoad: function() {
        setTimeout(()=>{
          wx.navigateTo({
            url: '/pages/home/home',
          })
        }, 500)
    },
    home:function(){
      wx.navigateTo({
        url: '/pages/home/home',
      })
    }
});
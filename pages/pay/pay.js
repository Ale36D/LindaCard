getApp();

Page({
    data: {
        msg: " 正在支付...",
        img: "pay.png"
    },
    onLoad: function(e) {
        var a = this;
        wx.requestPayment({
            timeStamp: e.timeStamp,
            nonceStr: e.nonceStr,
            package: "prepay_id=" + e.package,
            signType: e.signType,
            paySign: e.paySign,
            appId: e.appId,
            success: function(e) {
                a.setData({
                    msg: "支付完成,即将跳转..",
                    img: "payok.png"
                }), wx.redirectTo({
                    url: "/pages/index/index"
                });
            },
            fail: function(e) {
                a.setData({
                    msg: "支付关闭,即将返回..",
                    img: "payno.png"
                }), wx.redirectTo({
                    url: "/pages/index/index"
                });
            },
            complete: function(e) {}
        });
    }
});
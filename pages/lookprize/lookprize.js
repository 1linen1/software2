// pages/lookprize/lookprize.js
var app=getApp();
Page({
    
    /**
     * 页面的初始数据
     */
    data: {

    },
    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.lookp();
    },
    lookp: function(e)
    {
        var that=this;
        that.setData({
            p1:app.globalData.p1,
            p2:app.globalData.p2,
            p3:app.globalData.p3,
            p4:app.globalData.p4,
            p5:app.globalData.p5,
            p6:app.globalData.p6,
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})

// pages/prize/prize.js
var app=getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        
    },
    prizeinput1(e){
        console.log(e.detail.value);
        app.globalData.p1=e.detail.value;
    },
    prizeinput2(e){
        console.log(e.detail.value);
        app.globalData.p2=e.detail.value;
    },
    prizeinput3(e){
        console.log(e.detail.value);
        app.globalData.p3=e.detail.value;
    },
    prizeinput4(e){
        console.log(e.detail.value);
        app.globalData.p4=e.detail.value;
    },
    prizeinput5(e){
        console.log(e.detail.value);
        app.globalData.p5=e.detail.value;
    },
    prizeinput6(e){
        console.log(e.detail.value);
        app.globalData.p6=e.detail.value;
    },
    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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

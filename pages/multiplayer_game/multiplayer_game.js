// pages/multiplayer_game/multiplayer_game.js
var app=getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        
    },
    handleinput1(play1){
        console.log(play1.detail.value);
        app.globalData.name1=play1.detail.value;
    },
    handleinput2(play2){
        console.log(play2.detail.value);
        app.globalData.name2=play2.detail.value;
    },
    handleinput3(play3){
        console.log(play3.detail.value);
        app.globalData.name3=play3.detail.value;
    },
    handleinput4(play4){
        console.log(play4.detail.value);
        app.globalData.name4=play4.detail.value;
    },
    handleinput5(play5){
        console.log(play5.detail.value);
        app.globalData.name5=play5.detail.value;
    },
    handleinput6(play6){
        console.log(play6.detail.value);
        app.globalData.name6=play6.detail.value;
    },
    handleinput7(play7){
        console.log(play7.detail.value);
        app.globalData.name7=play7.detail.value;
    },
    handleinput8(play8){
        console.log(play8.detail.value);
        app.globalData.name8=play8.detail.value;
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

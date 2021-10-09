// pages/start_game/start_game.js
var Arrlevel=[];
var his=[];
var app = getApp();

Page({
    
    /**
     * 页面的初始数据
     */
    data: {
        
    },
    onReady: function () {
        this.picesCode1()
    },
    picesCode1:function(e)
    {
        var that=this;
        var num1=Math.floor(Math.random() * 6) + 1;
        var num2=Math.floor(Math.random() * 6) + 1;
        var num3=Math.floor(Math.random() * 6) + 1;
        var num4=Math.floor(Math.random() * 6) + 1;
        var num5=Math.floor(Math.random() * 6) + 1;
        var num6=Math.floor(Math.random() * 6) + 1; 
        var level={
            one:'状元插金花',
            two:'六杯红',
            three:'遍地锦',
            four:'五红',
            five:'五子登科',
            six:'四点红',
            seven:'榜眼',
            eight:'探花',
            nine:'进士',
            ten:'举人',
            eleven:'秀才',
            twelve:'无'
        };
        var this_level;
        var numArr=[];
        numArr.push(num1,num2,num3,num4,num5,num6);
        numArr.sort();
        var isfour=0;
        for(var i=0;i<numArr.length;i++)
        {
            if(numArr[i]==4)
            {
                isfour=isfour+1;
            }
        }
        if(isfour==1)//一秀 四进 对堂 五子登科
        {
            var flagseven=1;
            for(var i=1;i<=6;i++)
            {
                if(numArr[i-1]!=i)
                {
                    flagseven=0;
                    break;
                }
            }
            if(flagseven==1)
            {
                this_level=level.seven;
            }
            else
            {
                
                if((numArr[0]==numArr[1]&&numArr[0]==numArr[2]&&numArr[0]==numArr[3]&&numArr[0]==numArr[4])
                        ||(numArr[1]==numArr[2]&&numArr[2]==numArr[3]&&numArr[3]==numArr[4]&&numArr[4]==numArr[5]))
                {
                    this_level=level.five;
                }
                else if((numArr[0]==numArr[1]&&numArr[0]==numArr[2]&&numArr[0]==numArr[3])
                ||(numArr[1]==numArr[2]&&numArr[2]==numArr[3]&&numArr[3]==numArr[4])
                ||(numArr[2]==numArr[3]&&numArr[3]==numArr[4]&&numArr[4]==numArr[5]))
                {
                    this_level=level.nine;
                }
                else
                {
                    this_level=level.eleven;
                }
            }
        }
        if(isfour==2)
        {
            if((numArr[0]==numArr[1]&&numArr[0]==numArr[2]&&numArr[0]==numArr[3])
                ||(numArr[1]==numArr[2]&&numArr[2]==numArr[3]&&numArr[3]==numArr[4])
                ||(numArr[2]==numArr[3]&&numArr[3]==numArr[4]&&numArr[4]==numArr[5]))
                {
                    this_level=level.nine
                }
            else
            {
                this_level=level.ten;
            }
        }
        if(isfour==3)
        {
            this_level=level.eight;
        }
        if(isfour==4)
        {
            var one=0;
                for(var i=0;i<numArr.length;i++)
                {
                    if(numArr[i]==1)
                    {
                        one=one+1;
                    }
                }
                if(one==2)
                {
                    this_level=level.one;//状元插金花
                }
                else
                {
                    this_level=level.six;//状元 四点
                }
        }
        if(isfour==5)
        {
            this_level=level.four;
        }
        if(isfour==6)
        {
            this_level=level.two;
        }
        if(isfour==0)
        {
            if(numArr[0]==numArr[1]&&numArr[0]==numArr[2]&&numArr[0]==numArr[3]&&numArr[0]==numArr[4]&&numArr[0]==numArr[5])
            {
                this_level=level.three;
            }
            else if((numArr[0]==numArr[1]&&numArr[0]==numArr[2]&&numArr[0]==numArr[3]&&numArr[0]==numArr[4])
                        ||(numArr[1]==numArr[2]&&numArr[2]==numArr[3]&&numArr[3]==numArr[4]&&numArr[4]==numArr[5]))
                {
                    this_level=level.five;
                }
            else if((numArr[0]==numArr[1]&&numArr[0]==numArr[2]&&numArr[0]==numArr[3])
                ||(numArr[1]==numArr[2]&&numArr[2]==numArr[3]&&numArr[3]==numArr[4])
                ||(numArr[2]==numArr[3]&&numArr[3]==numArr[4]&&numArr[4]==numArr[5]))
                {
                    this_level=level.nine;
                }
            else
            {
                this_level=level.twelve;
            }
        }
        Arrlevel.push(this_level);
        var playnum=0;
        var nameArr=[];
        if(app.globalData.name1!="")
        {
            playnum=playnum+1;
            nameArr.push(app.globalData.name1);
        }
        if(app.globalData.name2!="")
        {
            playnum=playnum+1;
            nameArr.push(app.globalData.name2);
        }
        if(app.globalData.name3!="")
        {
            playnum=playnum+1;
            nameArr.push(app.globalData.name3);
        }
        if(app.globalData.name4!="")
        {
            playnum=playnum+1;
            nameArr.push(app.globalData.name4);
        }
        if(app.globalData.name5!="")
        {
            playnum=playnum+1;
            nameArr.push(app.globalData.name5);
        }
        if(app.globalData.name6!="")
        {
            playnum=playnum+1;
            nameArr.push(app.globalData.name6);
        }
        if(app.globalData.name7!="")
        {
            playnum=playnum+1;
            nameArr.push(app.globalData.name7); 
        }
        if(app.globalData.name8!="")
        {
            playnum=playnum+1;
            nameArr.push(app.globalData.name8);
        }
        var turnnum=Number(Arrlevel.length)%playnum+1;
        if(turnnum==1)
        {
            his.push(nameArr[playnum-1]+"摇出了"+this_level);
        }
        if(turnnum==2)
        {
            his.push(nameArr[0]+"摇出了"+this_level);
        }
        if(turnnum==3)
        {
            his.push(nameArr[1]+"摇出了"+this_level);
        }
        if(turnnum==4)
        {
            his.push(nameArr[2]+"摇出了"+this_level);
        }
        if(turnnum==5)
        {
            his.push(nameArr[3]+"摇出了"+this_level);
        }
        if(turnnum==6)
        {
            his.push(nameArr[4]+"摇出了"+this_level);
        }
        if(turnnum==7)
        {
            his.push(nameArr[5]+"摇出了"+this_level);
        }
        if(turnnum==8)
        {
            his.push(nameArr[6]+"摇出了"+this_level);
        }
        that.setData({
            num1:num1,
            num2:num2,
            num3:num3,
            num4:num4,
            num5:num5,
            num6:num6,
            this_level:this_level,
            Arrlevel:Arrlevel,
            turnnum:turnnum,
            playnum:playnum,
            his:his,
            nameArr:nameArr,
            name1:app.globalData.name1,
            name2:app.globalData.name2,
            name3:app.globalData.name3,
            name4:app.globalData.name4,
            name5:app.globalData.name5,
            name6:app.globalData.name6,
            name7:app.globalData.name7,
            name8:app.globalData.name8,
        })
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

var app = getApp();
Page({
  data:{
    // text:"这是一个页面"
    view:
      { 
        id:'addTitle',
        name:'添加抬头',
        pages:["addTile/addTitle"]
      }
    
  },
  onLoad:function(options){
    console.log(app);
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
      wx.request({
        url: 'https://api.youshui.ren/api/user/title', //仅为示例，并非真实的接口地址
        header: {
            'Content-Type': 'application/json'
        },
        success: function(res) {
          console.log(res.data)
        }
      })
    
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  goAddTile:function(){

  }
})
 //index.js
//获取应用实例


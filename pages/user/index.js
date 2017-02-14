var app = getApp();
Page({
  data:{
    // text:"这是一个页面"
      userInfo:{},
      
      head:{
        text:'',
        img:'../../images/icon_component_HL.png'
      },
      topClass:'top',
      contentClass:'content',
      siderView:false,
      siderbar:false,
      primarySize:'default',
      redirectTo:'../merchant/merchant',
      user:[
              {
                id:'title',
                name:'我的抬头',
                mode:'scaleToFill',
                img:'../../images/edit.png',
                pages: ['title/title']
              },
              {
                id:'title',
                name:'我的收藏',
                mode:'scaleToFill',
                img:'../../images/Invite.png',
                pages: ['collection/collection']
              },
                {
                id:'title',
                name:'邀请同事',
                mode:'scaleToFill',
                img:'../../images/share.png',
                pages: ['invite/invite']
              },
                {
                id:'title',
                name:'收货地址',
                mode:'scaleToFill',
                img:'../../images/Address.png',
                pages: ['address/address']
              },
              
                  ]
  },
  onLoad:function(options){
 console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
       console.log(userInfo)
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
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
  hide:function(){
    this.setData({
      siderbar:false
    });

        this.setData({
      siderView:false
    });

    console.log(this.data.siderView);
    this.setData({
      contentClass:'content'
    });
        this.setData({
      topClass:'top'
    });
  },
  openLeft:function(){
    var bolView=!this.data.siderView;
    this.setData({
      siderView:bolView
    });
    if(bolView){
      this.setData({
      contentClass:'contentRight'
    });
    this.setData({
      topClass:'topRight'
    });
    this.setData({
      siderbar:true
    });
    }else{
        this.setData({
      contentClass:'content'
    });
    this.setData({
      topClass:'top'
    });
    this.setData({
      siderbar:false
    });
    }
  },
  createCode:function(){
    console.log('2232321');

  },
  redirectTo:function(){
    wx.redirectTo({
  url:this.data.redirectTo,
  success:function(){

  },
  fail:function(){

  },
  complete:function(){

  }
})
  }
})

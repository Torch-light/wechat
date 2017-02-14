Page({
  data:{
      checked:true,
      checkedInfo:'设为默认抬头',
      model:{
		name:"",
		phone:"",
		address:"",
		title_type:1,
		tax_no:'',
		bank_deposit:'',
		bank_account:''
		// bankuser:''
	}
    // text:"这是一个页面"
  },
  onLoad:function(options){
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
 bindKeyInput: function(e) {
     console.log(e);
    // this.setData({
    //   inputValue: e.detail.value
    // })
  },
  checkboxChange:function(e){
      console.log(e);
  }
})
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    rankList:[]
  },
  
  onLoad (){
     app.api.getSellerRank().then(res => {
      if(res.code === 1000){
        this.setData({ rankList: res.data.all})
      }
    })
  }

})

 Page
 ({
   data:
   {
     index:0,
     array:[],
     id:'',
     id1:'',
     id2:'',
     id3:''
   },
     change: function (e) {
       this.setData
         ({
           index: e.detail.value
         })

     },
 find:function()
 {
   wx.navigateTo({
     url: '../ddd/ddd',
   })
   
   var that = this;
   wx.request({
     url: 'http://39.105.60.226/api/option',
     method: 'get',
     success: function (res) {
       that.setData
         ({
           array: res.data.device.detail.mic_1,
         })
       console.log(res.data.device.detail.mic_1)
     }
   })
   
 },
 got:function()
 {
   var that = this;
   var pd = that.data.id;
   var pd1 = that.data.id1;
   var pd2 = that.data.id2;
   var pd3 = that.data.id3;
   console.log(pd)
   wx.navigateTo({
     url: '../bbb/bbb?id=' + pd + '&id1=' + pd1 + '&id2=' + pd2 + '&id3=' + pd3
   })
   
 },
 see:function()
 {
   var that = this;
   var id,id1,id2,id3 ;
   wx.request({
     url: 'http://39.105.60.226/api/report',
     method:'post',
     data:
     {
       "file_name": "mic_1.1.test.wav",
       'mode':['show_image'],
     },
     success:function(res)
     {
       console.log(res.data.show_image.fft)
       that.setData
       ({
          id: res.data.show_image.fft,
          id1: res.data.show_image.mel,
          id2: res.data.show_image.oscillograph,
          id3: res.data.show_image.zero_rate,           
       })
     },
   })
   

 },
 })
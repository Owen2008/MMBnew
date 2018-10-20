
  // 封装一个读取url地址的函数
  // 注意 是uri
  function getUrl (k) {
    var obj={};
    var urlStr = decodeURI(window.location["search"]);
     var arr=urlStr.slice(1).split("&");
  
     arr.forEach(function(v ,i){
      var key=v.split("=")[0];
      var value=v.split("=")[1];
      obj[key]=value;
    
     })
   
     return obj[k]
  }
//   function getUrl ( k ) {
//     var obj = {};
//     var arr = decodeURI ( window.location["search"]).slice( 1 ).split("&");
//     arr.forEach (function ( v , i ) {
//      var key = v.split("=")[ 0 ];
//      var value = v.split("=")[ 1 ];
//     obj[ key ] = value;     
//  })//forEach 结束
//   return obj [ k ]; 
// }//函数结束


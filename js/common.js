
  // 封装一个读取url地址的函数
  function getUrl (k) {
    var obj={};
     var arr=location.search.slice(1).split("=");
     var key=arr[0];
     var value=arr[1];
     obj[key]=value;
     return obj[k]
  }


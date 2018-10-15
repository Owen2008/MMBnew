
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
$(".pagination .warpper").on("click", "i",(function(e){

   
  var $ul= $(this).prev();
 $ul.hasClass("hide")? $ul.removeClass("hide") : $ul.addClass("hide");

  $("#down").on("click","li", function(){
    alert(1)
    $(this).parent().addClass("hide");     
   $(".pagination .box").html($(this).html());
    var index=$(this).data("index");
    currentPage=index;
    render(currentPage);
  }) //li的点击事件

})) 

$(function(){


  // 导航区
  $.ajax({
    url: "http://127.0.0.1:9090/api/getindexmenu",
    type: "get",
    dataType: "json",
    success: function ( info ) {
      // 只渲染前8个
    var arr= info.result.splice(0,8);
     $(".mmb-nav").html(template("nav-tpl",{result:arr})) ;
     $(".mmb-nav").on ( "click" , "li:nth-child(8)" , function () {
      $(".mmb-nav").append(template("nav-tpl",info)) ;
      $(".mmb-nav").off ( "click" , "li:nth-child(8)" );
     })
    }
  })



  // 产品区
$.ajax({
  url:"http://127.0.0.1:9090/api/getmoneyctrl",
  dataType:"json",
  type:"get",
  success:function(info){
   console.log(info);
   $(".product").html(template("product-tpl",info))
  }
})



})
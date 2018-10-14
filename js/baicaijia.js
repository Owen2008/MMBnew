$(function(){
var titleid;

  $.ajax({
    url:"http://127.0.0.1:9090/api/getbaicaijiatitle",
    dataType:"json",
    success:function(info){
    console.log(info);
    $("#nav").html(template("nav-tpl",info));
    $("#nav li:first-child").addClass("current");
    var width=info.result.length*$("#nav ul").innerWidth;
    $("#nav").attr("width",width);
    }
  })


 render(0)
 
  $("#nav").on("click","li",function(){
    titleid=  $(this).data("titleid");
     $(this).addClass("current").siblings().removeClass("current");
    render(titleid);
  })
  
function render(titleid){
  $.ajax({
    url:"http://127.0.0.1:9090/api/getbaicaijiaproduct",
    data:{titleid:titleid},
    dataType:"json",
    success:function(info){
      console.log(info);
      $(".product").html(template("product-tpl",info))
    }
  })

}
  mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005 ,
    scrollY: false, 
    scrollX: true, 
  });
})


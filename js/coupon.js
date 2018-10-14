$(function(){
  $.ajax({
    url:"http://127.0.0.1:9090/api/getcoupon",
    dataType:"json",
    success:function(info){
   console.log(info);
   $(".product-yh").html(template("product-tpl",info))
    }
  })
  $(".product-yh").on("click","li",function(){
    var couponid=$(this).data("couponld");
    var title=$(this).data("title")
    console.log(couponid,$(this).data())
    location.href="couponproduct.html?couponid="+couponid+"&title="+title+""
  })
})
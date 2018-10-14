$(function(){
 var  couponid = getUrl("couponid");
  var title= getUrl("title");
  $(".title").text(title);
 $.ajax({
   url:"http://127.0.0.1:9090/api/getcouponproduct",
   data:{couponid:couponid},
   dataType:"json",
   success:function( info ){
  console.log(info);
  $(".product").html(template("product-tpl",info))
   }
 })


 $(".product").on("click", "li", function(){
   $(".shade").show();
   //如何切换产品图片呢,有产品Lianjie
   var id=$(this).data("id");
   console.log(id)
   var img=$(".pro-img img");
    var lg=img.length;
    $(".box-img").html(img[id]);
  $(".arrow-l").click(function(){
    id--;
   id = id <= 0 ? 0 : id;
    console.log(id)
    $(".box-img").html(img[id]);
  })
 $(".arrow-r").click(function(){
   id++;
   id = id >= lg ? lg : id;
   $(".box-img").html(img[id]);
 })
 
 })
})
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

var id;
 $(".product").on("click", "li", function(){
   $(".shade").show();
   //如何切换产品图片呢,有产品Lianjie   
    id=$(this).data("id");
   console.log(id)
   var img=$(".pro-img img");
    var lg=img.length;
    // var w=$(".shade .box").width();
    // console.log($(".shade .box").innerWidth())//获取的宽度是0
    $(".box-img.md").html(img[id]);
  $(".arrow-l").click(function(){
    $(".box-img.slide").css("transform","translateX(200px)");
    id--;
   id = id <= 0 ? 0 : id;
    console.log(id)
    $(".slide").html(img[id]);
    $(".box-img.md").css("transition","all 1s");
    $(".box-img.md").css("transform","translateX(-200px)");
    $(".box-img.slide").css("transition","all 1s");
    // $(".box-img.slide").css("transform","translateX(0px)");
    // $(".box-img").toggleClass("md").toggleClass("slide")
 
    // $(".box-img.slide").addClass("md").remove(".slide")
  })
 $(".arrow-r").click(function(){
  $(".slide").css('left','-100%')
   id++;
   id = id >= lg ? lg : id;
   $(".slide").html(img[id]);
   $(".box-img").css("transition","all 3s");
   $(".box-img").css("transform","translateX(200px)");
 })
 
 })

//  id锚点跳转
 $(".box-img").click(function(){
  $(".shade").hide();
  $(".box-img").attr("href","couponproduct.html?couponid=0&title=肯德基#"+id+"")
 })
})
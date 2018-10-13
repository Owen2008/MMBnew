$(function(){

  // 面包屑导航
  var cate=getUrl("cate");
  var brand=getUrl("brand");
  var productid=getUrl("productid")
  console.log(cate,brand);
  $(".cate a").text(cate);
  $(".brand span").text(brand);

// 产品渲染
$.ajax({
  url:"http://127.0.0.1:9090/api/getproduct",
  data:{productid:productid},
  type:"get",
  dataType:"json",
  success:function( info ){
   
    $(".tital").prepend(template("product-tpl",info))
  }
})
// 评价区
$.ajax({
  url:"http://127.0.0.1:9090/api/getproductcom",
  data:{
    productid:productid
  },
  dataType:"json",
  success:function(info){
   console.log(info)
   $("#common").html(template("common-tpl",info))
  }

})

})
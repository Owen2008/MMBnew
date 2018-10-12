$( function () {
  $.ajax({
    url:"http://127.0.0.1:9090/api/getcategorytitle",
    dataType:"json",
    type:"get",
    success:function( info ){
    console.log(info);
    $(".mmb-main").html(template("cate-top",info) )
    }
  })


  // 点击事件,下拉菜单
$(".mmb-main").on("tap", ".cate-top",function(){
  var titleId=$(this)[0].dataset["titleid"];
  $.ajax({
    url:"http://127.0.0.1:9090/api/getcategory",
    dataType:"json",
    data:{
      titleid:titleId
    },
    type:"get",
    success:function(info){
      console.log(info)
      $(".cate-top").append(template("cate-second",info) );
      $(".mmb-main").off("tap", ".cate-top")
    }
  })
})

//点击分类,跳转到产品列表页
$(".mmb-main").on("tap",".category-tips",function(){
  var categoryid=$(this)[0].dataset["categoryid"];
  console.log(categoryid)
  location.href="productlist.html?id="+categoryid+"";
})



})
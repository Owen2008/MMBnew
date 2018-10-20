$( function () {
  $.ajax({
    url:"http://127.0.0.1:9090/api/getcategorytitle",
    dataType:"json",
    type:"get",
    success:function( info ){
    console.log(info);
    // 一级分类渲染
    $(".mmb-main").html(template("cate-top",info) )
    }
  })


  // 点击事件,下拉菜单
$(".mmb-main").on("tap", ".cate-top",function(){
  // console.log($(this).parent().children());
  // $(this).addClass("mui-active").parent().children().removeClass("mui-active")
  var titleId=$(this)[0].dataset["titleid"];
  var $that=$(this);
  console.log(titleId);
  $.ajax({
    url:"http://127.0.0.1:9090/api/getcategory",
    dataType:"json",
    data:{
      titleid:titleId
    },
    type:"get",
    success:function(info){
      console.log(info)
      // 只渲染当前的下面的
      $(".cate-second").html(template("cate-second",info) );
      // $(".mmb-main").off("tap", ".cate-top")--取消点击事件
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
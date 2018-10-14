$(function(){
  $.ajax({
    url:"http://127.0.0.1:9090/api/getinlanddiscount",
    dataType:"json",
    success:function(info){
   console.log(info);
   var arr=info.result
   var result=arr.splice(0,16);
   console.log(result,arr)
   $(".product-g").html(template("product-tpl",{result:result}));
   $(document).on("scroll",function(e){
  
  var scroH = $(document).scrollTop();  //滚动高度
  

  console.log(scroH,viewH,contentH)
  if(scroH>=2600){
    $(".product-g").append(template("product-tpl",{result:arr}));
    $(document).off("scroll")
  }
   })
    }//success
  })//ajax

  $(".product-g").on("click", "li",function(){
    var productid=$(this).data("id"); 
   
    location.href="discountproduct.html?productid="+productid+""
  })
})
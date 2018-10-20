$(function(){
 var currentPage=1;
 var pagetotal;
var pagesize;
var page;

 render();
 function render(){
  $.ajax({
    url:"http://127.0.0.1:9090/api/getmoneyctrl",
    data:{
     pageid:currentPage-1
    },
    dataType:"json",
    success:function( info ){
    console.log(info)

    $(".product").html(template("product-tpl",info))
    pagetotal=$(".product>ul").data("pagetotal");
    pagesize=$(".product>ul").data("pagesize");

    page=Math.ceil(pagetotal/pagesize );
    console.log(33,page)
    $(".box").html("<span class='current'>"+currentPage+"</span> / <span class='total'>"+page+"</span>")
    var htmlStr="";
    for (var i=1;i<=page;i++){
     
      htmlStr +="<li data-index="+i+"><span>"+i+"</span> / <span>"+page+"</span></li>";
    }
    $("#down").html(htmlStr);
    }
  })
 }


//上页

$(".prev").click(function(){
  currentPage--;
  currentPage = currentPage<=1 ?  1 : currentPage;
  $(".pagination .box .current").text(currentPage);
  $(".pagination .box .total").text(page);
  render(currentPage);
})
// 下一页
$(".next").click(function(){
  currentPage++;
  currentPage = currentPage >= page ?  page : currentPage;
  $(".pagination .box .total").text(page);
  $(".pagination .box .current").text(currentPage);
  render(currentPage);
})



//选择页码 切换页
  $(".pagination .warpper").on("click", "i",(function(e){
    var $ul= $(this).prev();
   $ul.hasClass("hide")? $ul.removeClass("hide") : $ul.addClass("hide");
  
    $("#down").on("click","li", function(){     
      $(this).parent().addClass("hide");     
     $(".pagination .box").html($(this).html());
      var index=$(this).data("index");
      currentPage=index;
      render(currentPage);
    }) //li的点击事件
  
  }))



  //产品点击事件
$(".product").on("tap","li",function(){

  var productid=$(this).data("id"); 
  
   location.href="moneyctrproduct.html?productid="+productid+""
 })

})


 
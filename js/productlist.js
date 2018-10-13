$( function () {
  // 面包屑导航渲染
  // categoryid
  var  categoryid=getUrl("id");

  $.ajax ({
  url:"http://127.0.0.1:9090/api/getcategorybyid",
  dataType:"json",
  data:{
    categoryid:categoryid
  },
  type:"get",
  success:function(info){
console.log(info)
  $(".category-nav").prepend(template ("nav-tpl", info));
  },
  error:function(){
    console.log("出错啦")
  }
  })


  // 产品
var currentPage=1;
render(currentPage);
var pagetotal;
var pagesize;
var page;
  function render(currentPage){
    $.ajax({
      url:"http://127.0.0.1:9090/api/getproductlist",
      type:"get",
      dataType:"json",
      data:{
        categoryid:categoryid,
        pageid:currentPage
      },
      success:function( info ){
     console.log(info)
     $(".product").html(template ("product-tpl", info));
      pagetotal=$(".product>ul").data("pagetotal");
      pagesize=$(".product>ul").data("pagesize");

    //  分页下拉菜单
     page=Math.ceil(pagetotal/pagesize );
  
    var htmlStr="";
    for (var i=1;i<=page;i++){
     
      htmlStr +="<li data-index="+i+"><span>"+i+"</span> / <span>"+page+"</span></li>";
    }
    $("#down").html(htmlStr);
  //外盒子事件
 
      }//ajax 成功函数
    })  //ajax 请求
  }//渲染


  //选择页数
  $(".pagination .warpper").on("click", "i",(function(e){
   
    var $ul= $(this).prevAll("ul")
   
   $ul.hasClass("hide")? $ul.removeClass("hide") : $ul.addClass("hide");

    $("#down").on("click","li", function(){
      $(this).parent().addClass("hide");     
     $(".pagination .box").html($(this).html());
      var index=$(this).data("index");
      currentPage=index;
      render(currentPage);
    }) //li的点击事件
  
  })) 
  //上页
  $(".prev").click(function(){
    currentPage--;
    currentPage = currentPage<=1 ?  1 : currentPage;
    $(".pagination .box .current").text(currentPage);
    render(currentPage);
  })
  $(".next").click(function(){
  console.log(currentPage)
    currentPage++;
    // if(currentPage>page ){
    //   return
    // }
    currentPage = currentPage >= page ?  page : currentPage;
    
    $(".pagination .box .current").text(currentPage);
    render(currentPage);
  })

})



//产品点击事件
$(".product").on("tap","li",function(){
var cate=  $(".cate-top").text();
 var productid=$(this).data("productid");

  var brand=$(this).find("p.hide").text().split(" ")[0];
  
  location.href="bijia.html?cate="+cate+"&brand="+brand+"&productid="+productid+""
})

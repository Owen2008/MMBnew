$(function(){
 var brandtitleid=getUrl("brandtitle");
 var categoryid=getUrl("categoryid");

 function getCateid(){
  $.ajax({
    url:"http://127.0.0.1:9090/api/getcategorybyid",
    data:{
      categoryid:categoryid 
    },
    dataType:"json",
    success:function(info){
      var cate=info.result[0]["category"]
  //  var cate= info.result[0]["category"];
   $(".product-g h3 span").html(cate);
    console.log($(".product-g h3 span"))
    }
  })
}

getCateid();
// console.log(cate)
 renderBrand();


  function renderBrand(){
  $.ajax({
    url:"http://127.0.0.1:9090/api/getbrand",
    data:{brandtitleid:brandtitleid},
    dataType:"json",
    success:function( info ){
     console.log(info)
     $(".better").html(template("item-1-tpl",info))
     renderPro();
    }
  })
  }

  // renderPro();
  function renderPro(){
    $.ajax({
      url:"http://127.0.0.1:9090/api/getbrandproductlist",
      data:{
        brandtitleid:brandtitleid,
        pagesize:4
      },
      dataType:"json",
      success:function( info ){
       console.log(info)
       $(".product-list").html(template("item-2-tpl",info))
        productid=$(".product-list li:first-child").data("id");
       
        renderCom();
      }
    })
  }




  function renderCom(){
    $.ajax({
      url:"http://127.0.0.1:9090/api/getproductcom",
      data:{
        productid:productid,
      },
      dataType:"json",
      success:function( info ){
       console.log(info)
       $(".commont").html(template("item-3-tpl",info));
       $(".commont .pro-img").html($(".product-list .pro-img").html());
       $(".commont .text").html($(".product-list .text").html());
      }
    })
  }
})
$(function(){
  $.ajax({
    url:"http://127.0.0.1:9090/api/getbrandtitle",
    dataType:"json",
    success:function(info){
   console.log(info);
   $(".brandTitle").html(template("brandTitle-tpl",info))
    }
  })


  $(".brandTitle").on("click","li",function(){
    
    var brandtitle=$(this).data("brandtitle");
    var categoryid=$(this).data("categoryid");
    location.href="brand.html?brandtitle="+brandtitle+"&categoryid="+categoryid+""
  })
})
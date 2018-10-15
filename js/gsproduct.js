$(function(){
  var shopid;
  var areaid;
  var value;
  render();

  $("#up").on("click","li",function(){
    $("#down").hasClass("hide")? $("#down").removeClass("hide").show() : $("#down").addClass("hide").hide();
    //判断点击是哪个按钮,动态渲染数据
    $(this).addClass("on").siblings().removeClass("on");
      if( $(this).hasClass("shop")){
        var url="http://127.0.0.1:9090/api/getgsshop"
      }
      if($(this).hasClass("area")){
        var url="http://127.0.0.1:9090/api/getgsshoparea"
      }
     
   
     $.ajax({
       url:url,
       dataType:"json",
       success:function(info){
      
         $("#down").html(template("dowm-tpl",info));
         $("#down").on("click" ,"li",function(){
            shopid=$(this).data("shopid");
            areaid=$(this).data("areaid");
            value=$(this).find("span").text();
     
          $(this).parent().hide().addClass("hide");
          $("#up [class*='on']").find("span").text(value);
             render();

         })

       }
     })
  
  })



  function render(){
    $.ajax({
      url:"http://127.0.0.1:9090/api/getgsproduct",
      data:{
        shopid:shopid||0,
        areaid:areaid||0,
      },
      dataType:"json",
      success: function(info){
      console.log(info);
      $(".product-gs").html(template("product-tpl",info))
      }
    })
   }
})
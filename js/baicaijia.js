$(function(){
var titleid;
var width=0;
var targetX;;
  $.ajax({
    url:"http://127.0.0.1:9090/api/getbaicaijiatitle",
    dataType:"json",
    success:function(info){
    // console.log(info);
    $("#nav").html(template("nav-tpl",info));
    $("#nav li:first-child").addClass("current");

    // 设置ul的宽
    
    $lis=$("#nav  li");
    
    for(var i=0;i<$lis.length;i++){
      width+=$lis[i].offsetWidth;
    }
    $(".nav-ul").width(width);
    // 滚动事件
    // $(window).mouseover(function(e){
    //    console.log(e)
    // })
    }
  })  //ajax
//   var startX,posX;
//  ---------按照网页端写的.可以用鼠标滑动,需求是在移动端,可以手指滑动
// $("#nav").mousedown(function(e){
//   // console.log(e)
//     startX=e.clientX;
//     currentX=$(".nav-ul").position().left;
   
//    console.log("鼠标起始位置", startX,"ul当前偏移的位置",currentX);
   
//    $("#nav").mouseover(function(e){
//     // console.log(e)
//     var endX=e.clientX;
//     //鼠标移动位置
//    targetX=endX-startX+currentX;
//    console.log("鼠标停止位置", endX,"ul当前偏移的位置",currentX);
//    $(".nav-ul").css("transform","translateX("+(targetX)+"px)");
//    console.log("ul应该移动的距离" ,targetX);
//    var minX=-width+$("#nav").width();
//    targetX=  targetX>=0? 0 :   targetX;
//    targetX= targetX<= minX? minX :targetX;
//    $(".nav-ul").css("transform","translateX("+targetX+"px)");
    
//    })
// })
//   // 回弹效果
// console.log("最终移动距离",targetX)
// // $(".nav-ul").css("transition","all 1s");
// $(document).mouseup(function(){
//   $("#nav").off("mouseover")
// })

// -------------------------------------------------------没有实现回弹效果




// --------------------------------------------------------移动端滚动
var startX
var currentX=0
$("#nav").on("touchstart",function(e){
startX= e.originalEvent.changedTouches[0].clientX

})
$("#nav").on("touchmove",function(e){
  moveX=e.originalEvent.changedTouches[0].clientX
  distanceX=moveX-startX

  $(".nav-ul").css("transition","none");
  $(".nav-ul").css("transform","translateX("+(distanceX+currentX)+"px)");
})
$("#nav").on("touchend",function(e){
 
var tempX=e.originalEvent.changedTouches[0].clientX-startX;
currentX+=tempX;


//回弹效果
var minX=-width+$("#nav").width()
if(currentX>0){
  currentX=0;
  $(".nav-ul").css("transition","all .2s");
  $(".nav-ul").css("transform","translateX("+(currentX)+"px)");
}
if(currentX<minX){
  currentX=minX
  $(".nav-ul").css("transition","all .2s");
  $(".nav-ul").css("transform","translateX("+(currentX)+"px)");
}

})














 render(0)
 
  $("#nav").on("click","li",function(){
    titleid=  $(this).data("titleid");
     $(this).addClass("current").siblings().removeClass("current");
    render(titleid);
  })
  
function render(titleid){
  $.ajax({
    url:"http://127.0.0.1:9090/api/getbaicaijiaproduct",
    data:{titleid:titleid},
    dataType:"json",
    success:function(info){
      // console.log(info);
      $(".product").html(template("product-tpl",info))
    }
  })

}
  mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005 ,
    scrollY: false, 
    scrollX: true, 
  });

  // 算出ul长度,赋值
 
})


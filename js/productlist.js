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
  }
  })


  // 
})
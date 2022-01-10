//导航描点定位
$('.lis').bind("click touch",function(e){
    //给父元素添加active类名
    $(this).children(".line").addClass("active").parent().siblings(".lis").children(".line").removeClass("active");
})
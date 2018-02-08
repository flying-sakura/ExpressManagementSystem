// $(document).ready(function(){
//     $(".level1menu").click(function(){
//         $(this).find(".level2menu").toggle();
//     });
// });
// glyphicon glyphicon-chevron-down

$(document).ready(function(){
    $("h3").click(function(){
        // 先将所有箭头复位
        $("h3").find("i").removeClass("glyphicon-chevron-down");
        $("h3").find("i").addClass("glyphicon-chevron-right");
        //互斥地选择一个菜单，只留下最多一个菜单打开
        //如果所点击的菜单原本已经打开，则关闭所有菜单，否则先关闭所有菜单，再打开该菜单
        //此后再调整箭头方向
        if( $(this).next().css("display")!=="none" ) {
            $("h3").next().hide();
        }
        else{
            $(this).find("i").removeClass("glyphicon-chevron-right");
            $(this).find("i").addClass("glyphicon-chevron-down");
            $("h3").next().hide();
            $(this).next().toggle();
        }

    });
});
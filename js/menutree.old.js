// //为节点添加展开，关闭的操作
// $(function(){
//     $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
//     $('.tree li.parent_li > span').on('click', function (e) {
//         var children = $(this).parent('li.parent_li').find(' > ul > li');
//         if (children.is(":visible")) {
//             children.hide('fast');
//             $(this).attr('title', 'Expand this branch').find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
//         } else {
//             children.show('fast');
//             $(this).attr('title', 'Collapse this branch').find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
//         }
//         e.stopPropagation();
//     });
// });
$(document).ready(function(){
    $("#tree").treeview({
        // toggle: function() {
        //     console.log("%s was toggled.", $(this).find(">span").text());
        // }
    });

    // $("#add").click(function() {
    //     var branches = $("<li><span class='folder'>New Sublist</span><ul>" +
    //         "<li><span class='file'>Item1</span></li>" +
    //         "<li><span class='file'>Item2</span></li></ul></li>").appendTo("#tree");
    //     $("#browser").treeview({
    //         add: branches
    //     });
    // });
});
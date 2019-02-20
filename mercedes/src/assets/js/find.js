$(function () {
    //底部切换效果
    var on=true;
    // $(".foot>a .hideImgfind").css({
    //     display:"none"
    // });
    if(on){
        $(".foot>a").mouseenter(function () {
            $(this).find(".hideImg").css({
                display:"block"
            });
            $(this).find(".showImg").css({
                display:"none"
            });
            $(this).find(".character").css({
                color:"#008fff"
            });
            $(this).find(".hideImgfind").css({
                display:"block"
            });
            $(this).find(".showImgfind").css({
                display:"none"
            });
            $(this).find(".bianse").css({
                color:"#818181"
            });
        });

        $(".foot>a").mouseleave(function () {
            $(this).find(".hideImg").css({
                display:"none"
            });
            $(this).find(".showImg").css({
                display:"block"
            });
            $(this).find(".character").css({
                color:"#818181"
            });
            $(this).find(".hideImgfind").css({
                display:"none"
            });
            $(this).find(".showImgfind").css({
                display:"block"
            });
            $(this).find(".bianse").css({
                color:"#008fff"
            });
        });
    }



    // $(".foot>a").mouseenter(function () {
    //     $(this).find(".hideImg").css({
    //         display:"block"
    //     });
    //     $(this).find(".showImg").css({
    //         display:"none"
    //     });
    //     $(this).find(".character").css({
    //         color:"#008fff"
    //     });
    // });
    //
    // $(".foot>a").mouseleave(function () {
    //     $(this).find(".hideImg").css({
    //         display:"none"
    //     });
    //     $(this).find(".showImg").css({
    //         display:"block"
    //     });
    //     $(this).find(".character").css({
    //         color:"#818181"
    //     });
    // });
    //
    //
    // $(".foot>a").mouseenter(function () {
    //     $(this).find(".hideImgfind").css({
    //         display:"block"
    //     });
    //     $(this).find(".showImgfind").css({
    //         display:"none"
    //     });
    //     $(this).find(".bianse").css({
    //         color:"#818181"
    //     });
    // });
    //
    // $(".foot>a").mouseleave(function () {
    //     $(this).find(".hideImgfind").css({
    //         display:"none"
    //     });
    //     $(this).find(".showImgfind").css({
    //         display:"block"
    //     });
    //     $(this).find(".bianse").css({
    //         color:"#008fff"
    //     });
    // });



});
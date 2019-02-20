
// const swiper = new Swiper('.swiper-container', {
//     pagination: '.swiper-pagination',
//     slidesPerView: 4,
//     paginationClickable: true,
//     spaceBetween: 30,
//     freeMode: true
// })

//滚动条触发的事件
$(window).scroll( function() {
    var scroll=document.body.scrollTop||document.documentElement.scrollTop;
    if(scroll>0){
        $(".headmid").css({
            background:'rgba(0,0,0,0.9)'
        });
        $(".headerImg").css({
            display:"none"
        });
        $(".wrap").css({
            position: "fixed",
            top: "0.35rem",
            left: 0,
            zIndex: 9,
            width: "100%!important",
            height:".42rem",
            background: "#ffffff"
        })
    }else{
        $(".headerImg").css({
            display:"block"
        });
        $(".headmid").css({
            background:'rgba(0,0,0,0)'
        });
        $(".wrap").css({
            position: "static",

        })

    }

} );

// $(".tabs .active").removeClass('active')
// $(this).addClass('active')
// $(function () {
//     $(".wrap>.sildetab").mouseenter(function () {
//         $(this).addClass('active').css({
//             color:"#4a8fd4",
//             fontZise:"0.15rem",
//             fontWeight: "800",
//             border:"2px solid #4a8fd4"
//         });
//         $(this).removeClass('active');
//         $(".shoppClassList>.shops").eq($(this).index()).css({
//             display:"block"
//         });
//
//     });
//     $(".wrap>.sildetab").mouseenter(function () {
//         $(this).addClass('active').css({
//             color:"#787878",
//             fontZise:"0.12rem",
//             fontWeight: "800",
//             border:"1px solid #dcdcdc"
//         });
//         $(this).removeClass('active');
//         $(".shoppClassList>.shops").eq($(this).index()).css({
//             display:"none"
//         })
//     });
// });

// 动态切换tab
$(function () {
   $(".wrap>.sildetab").mouseenter(function () {
      $(this).css({
          color:"#4a8fd4",
          fontZise:"0.15rem",
          fontWeight: "800",
          border:"2px solid #4a8fd4"
      });

       $(".shoppClassList>.shops").eq($(this).index()).show();


   });
    $(".wrap>.sildetab").mouseleave(function () {
        $(this).css({
            color:"#787878",
            fontZise:"0.12rem",
            fontWeight: "800",
            border:"1px solid #dcdcdc"
        });
        $(".shoppClassList>.shops").eq($(this).index()).hide()
    });

});

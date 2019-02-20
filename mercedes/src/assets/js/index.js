
$(function () {
  // var oTop = $(".search_link").offset().top;
  $(window).scroll(function () {
    var wTop = $(this).scrollTop();
    if(wTop>48){
      $(".search_link").addClass("fixed");
    }else{
      $(".search_link").removeClass("fixed");
    }

  });

  // footer点击变换效果
  var arrPicBlue=["src/images/img_yxz/饿了吗优惠券.png","src/assert/images/img_yxz/find.png","src/assert/images/img_yxz/dingdan1.png","src/assert/images/img_yxz/my.png"];
  var arrPicGray=["src/assert/images/img_yxz/饿了吗优惠券1.png","src/assert/images/img_yxz/finf.png","src/assert/images/img_yxz/订单.png","src/assert/images/img_yxz/my1.png"];
  $(".footer_list li").click(function () {
    $(".footer_list li").find("p").each(function () {
      $(this).removeClass("active");
    });

    $(".footer_list li").find("img").each(function (index,domEle) {
      $(domEle).attr("src",arrPicGray[index]);
    });
    $(this).find("p").addClass("active");
    var num = $(this).index();

    $(".active").siblings("img").attr("src",arrPicBlue[num]);
  });

//侧边栏根据scrolltop的出现隐藏
  window.onscroll=function(){
    var sTop=document.body.scrollTop || document.documentElement.scrollTop;
    if(sTop<300){
      $(".backTop").css("opacity",0);
    }else{
      $(".backTop").css("opacity",1);
    }

  }
//页面回到顶部
  $(".backTop").click(function(){
    // var scrollTop = $(window).scrollTop();
    // $("body").animate(
    //     {
    //         scrollTop:0
    //     }
    //     ,400)
    $(window).scrollTop(0);

  });
});




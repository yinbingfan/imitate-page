
//送达时间弹框隐现效果
$(".sendTime_section").click(function () {
    $(".sendTime_select").slideToggle("fast");
});


//选择送达时间功能
$(".Time_list li").click(function () {
    $(".selectedBtn").each(function () {
        $(this).remove();
    });
    $(this).find(".sendPrice").after("<span class=\"selectedBtn\"><img src=\"images/img_yxz/selected.png\" alt=\"\"></span>")
    $(".timeInfo").text($(this).find(".time").text());
    $(".weekInfo").text($(this).parentsUntil(".Time_tab").find(".week").text());
});

//订单备注
var count=0;
$(".tasteCheck_uls .poison").click(function () {
    count++;
    if(count%2==0){
        $(this).find("span").removeClass("active");
    }else{
        $(this).find("span").addClass("active");
    }
});
$(".tasteCheck_uls .ice span").click(function () {
    $(".tasteCheck_uls .ice span").each(function () {
        $(this).removeClass("active");
    })
    $(this).addClass("active");
});
$(".plateNum_uls li span").click(function () {
    $(".plateNum_uls li span").each(function () {
        $(this).removeClass("active");
    })
    $(this).addClass("active");
});
//订单备注隐现效果
$(".payRelated_item.remark").click(function () {
    $(".tasteCheck").slideToggle("fast");
});
$(".tasteBtn").click(function () {
    $(".tasteCheck").slideToggle("fast");
});




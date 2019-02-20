$(function(){
	
	for(var i=0;i<$(".big-box li").length;i++){
		$(".big-box li")[i].onmouseenter=function(){
			$(this).animate(
				{top:"-10px"});	
		}
		$(".big-box li")[i].onmouseleave=function(){
			$(this).animate(
				{top:"0px"});	
		}
		
	}
	//内容部分
	//白酒
	for(var i=1;i<$(".baijbox li").length;i++){
		$(".baijbox li")[i].onmouseenter=function(){
			$(this).animate(
				{top:"-8px"});	
		}
		$(".baijbox li")[i].onmouseleave=function(){
			$(this).animate(
				{top:"0px"});	
		}
		
	}
	
	$(".discount li a").mouseenter(function(){
		$(".discount li a").css("color","orange");
		$(".discount li a span").css("background","orange");
	});
	$(".discount li a").mouseleave(function(){
		$(".discount li a").css("color","#666");
		$(".discount li a span").css("background","#666");
	});
	//店长推荐
	$("#btn_L").click(function(){
		$(".Rec_one").animate(
			{left:"-1200px"},1000
		)
		$(".Rec_two").animate(
			{left:"0px"},1000
		)
	});
	
	$("#btn_R").click(function(){
		$(".Rec_two").animate(
			{left:"-1200px"},1000
		)
		$(".Rec_one").animate(
			{left:"0px"},1000
		)
		
	});
	

	
	
	//好评商品
	
	for(var i=0;i<$(".Simplicitygoods li").length;i++){
		$(".Simplicitygoods li")[i].onmouseenter=function(){
			$(this).animate(
				{top:"-8px"});	
		}
		$(".Simplicitygoods li")[i].onmouseleave=function(){
			$(this).animate(
				{top:"0px"});	
		}
		
	}
	//视频
	for(var i=0;i<$(".mvlist li").length;i++){
		$(".mvlist li")[i].onmouseenter=function(){
			$(this).animate(
				{top:"-8px"});	
			
		}
		$(".mvlist li")[i].onmouseleave=function(){
			$(this).animate(
				{top:"0px"});	
		}
		
	}
	
	
	
});
$(".subNavleft").mouseover(function(){
  		$(".Qcode").css({
  					display:"block",
		 			transition:"all 1s"		
		})
		$(".sulefticon>img").css({
			transform:"rotate(180deg)",
			transition:"all 1s"
		})
		$(".subNavleft b").css({
			transform:"rotate(180deg)",
			transition:"all 1s"
		})	
	
	});
	
	$(".subNavleft").mouseout(function(){
		$(".Qcode").css({
  					display:"none",
		 			transition:"all 1s"		
		})
		$(".sulefticon>img").css({
			transform:"rotate(0deg)",
			transition:"all 1s"
		})
		$(".subNavleft b").css({
			transform:"rotate(0deg)",
			transition:"all 1s"
		})		
	});
	$(".orderform").mouseover(function(){
		
		$(".orderform").css("color","white");	
	});
	$(".orderform").mouseout(function(){
		
		$(".orderform").css("color","#ccc");	
	});
	$(".personalCenter").mouseover(function(){
		
		$(".personalCenter").css("color","white");	
	});
	$(".personalCenter").mouseout(function(){
		
		$(".personalCenter").css("color","#ccc");	
	});
	$(".Airlines").mouseover(function(){
		
		$(".Airlines").css("color","white");	
	});
	$(".Airlines").mouseout(function(){
		
		$(".Airlines").css("color","#ccc");	
	});
	$(".affiche").mouseover(function(){
		
		$(".affiche").css("color","white");	
	});
	$(".affiche").mouseout(function(){
		
		$(".affiche").css("color","#ccc");	
	});
	$(".aid").mouseover(function(){
		
		$(".aid").css("color","white");	
	});
	$(".aid").mouseout(function(){
		
		$(".aid").css("color","#ccc");	
	});
	$(".opin").mouseover(function(){
		
		$(".opin").css("color","white");	
	});
	$(".opin").mouseout(function(){
		
		$(".opin").css("color","#ccc");	
	});
	$(".telephony").mouseover(function(){
		
		$(".telephony").css("color","white");	
	});
	$(".telephony").mouseout(function(){
		
		$(".telephony").css("color","#ccc");	
	});
	
	
	
//	导航
	$(".fistpage").mouseover(function(){
		
		$(".fistpage").css("color","red");	
	});
	$(".fistpage").mouseout(function(){
		
		$(".fistpage").css("color","black");	
	});
	
	$(".specialoffer").mouseover(function(){
		
		$(".specialoffer").css("color","red");	
	});
	$(".specialoffer").mouseout(function(){
		
		$(".specialoffer").css("color","black");	
	});
	$(".impo").mouseover(function(){
		
		$(".impo").css("color","red");	
	});
	$(".impo").mouseout(function(){
		
		$(".impo").css("color","black");	
	});
	
	$(".Hofbraeuhaus").mouseover(function(){
		
		$(".Hofbraeuhaus").css("color","red");	
	});
	$(".Hofbraeuhaus").mouseout(function(){
		
		$(".Hofbraeuhaus").css("color","black");	
	});
	
	$(".purchase").mouseover(function(){
		
		$(".purchase").css("color","red");	
	});
	$(".purchase").mouseout(function(){
		
		$(".purchase").css("color","black");	
	});
	$(".collect").mouseover(function(){
		
		$(".collect").css("color","red");	
	});
	$(".collect").mouseout(function(){
		
		$(".collect").css("color","black");	
	});
	$(".popular").mouseover(function(){
		
		$(".popular").css("color","red");	
	});
	$(".popular").mouseout(function(){
		
		$(".popular").css("color","black");	
	});
	$(".surplus").mouseover(function(){
		
		$(".surplus").css("color","red");	
	});
	$(".surplus").mouseout(function(){
		
		$(".surplus").css("color","black");	
	});
//主导航结束
	//侧边栏
	//会员
	$(".member").mouseenter(function(){
		$(".memberCenter").show("2000");
		$(".member").css({color:"white"});
		$(".memberCenter").animate({left:"-119",opacity:"0.8"},1000);	
	});
	$(".sidecont_one").mouseleave(function(){
		$(".memberCenter").animate({left:"-185",opacity:"0.2"},1000);	
		$(".memberCenter").hide("2000");	
	});
	//购物车
	$(".detrim").mouseenter(function(){
		
	});
	//优惠劵
	$(".stoc").mouseenter(function(){
		$(".stock").show("1000");
		$(".stoc").css({color:"white"});
		$(".stock").animate({left:"-119",opacity:"0.8"},1000);	
	});
	$(".sidecont_three").mouseleave(function(){
		$(".stock").animate({left:"-185",opacity:"0.2"},1000);	
		$(".stock").hide("1000");	
	});
	//我的收藏
	$(".enshri").mouseenter(function(){
		$(".enshrine").show("1000");
		$(".enshri").css({color:"white"});
		$(".enshrine").animate({left:"-119",opacity:"0.8"},1000);	
	});
	$(".sidecont_four").mouseleave(function(){
		$(".enshrine").animate({left:"-185",opacity:"0.2"},1000);	
		$(".enshrine").hide("1000");
		$(".enshri").css({color:"red"});
	});
	
	//二维码
	$(".QuicMark").mouseenter(function(){
		$(".QuickMark").show("fast");
		$(".QuickMark").animate({left:"-149"},"fast");	
	});
	$(".sidecont_five").mouseleave(function(){
		$(".QuickMark").animate({left:"-200"},"fast");	
		$(".QuickMark").hide("fast");	
	});
	
	//棒
	$(".better").mouseenter(function(){
		$(".bett").show("fast");
		$(".bett").animate({left:"-210"},"fast");	
	});
	$(".sidecont_six").mouseleave(function(){
		$(".bett").animate({left:"-300"},"fast");	
		$(".bett").hide("fast");	
	});
	//在线服务
	$(".linese").mouseenter(function(){
		$(".lineso").show("1000");
		$(".linese").css({color:"white"});
		$(".lineso").animate({left:"-119",opacity:"0.8"},1000);	
	});
	$(".sidecont_seven").mouseleave(function(){
		$(".lineso").animate({left:"-185",opacity:"0.2"},1000);	
		$(".lineso").hide("1000");
		$(".linese").css({color:"red"});
	});
	//用户反馈
	$(".tickling").mouseenter(function(){
		$(".tick").show("1000");
		$(".tickling").css({color:"white"});
		$(".tick").animate({left:"-119",opacity:"0.8"},1000);	
	});
	$(".sidecont_eght").mouseleave(function(){
		$(".tick").animate({left:"-185",opacity:"0.2"},1000);	
		$(".tick").hide("1000");
		$(".tickling").css({color:"red"});
	});
	//回到顶部
	$(".BackTop").mouseenter(function(){
		$(".Backtop").show("1000");
		$(".BackTop").css({color:"white"});
		$(".Backtop").animate({left:"-119",opacity:"0.8"},1000);	
	});
	$(".sidecont_ten").mouseleave(function(){
		$(".Backtop").animate({left:"-185",opacity:"0.2"},1000);	
		$(".Backtop").hide("1000");
		$(".BackTop").css({color:"red"});
	});
	//点击呼叫顶部
	$(".Backtop").click(function(){
		var scroll=document.documentElement.scollTop||document.body.scrollTop;
		scroll=0
	});
	//侧边栏
	
	//三级菜单allClassifications
	$(".allClassifications").mouseenter(function(){
		$(".allClass").css("display","block");
	});
	
	$(".allClass").mouseleave(function(){
		$(".allClass").css("display","none");
	});
	
	//一键选择
	$(".yijian").mouseenter(function(){
		$(".yijian").css("background","#D53C45");
		$(".keychoose").css("display","block");
	});
	
	$(".jian").mouseleave(function(){
		$(".yijian").css("background"," rgba(204,2,16,.9)");
		$(".keychoose").css("display","none");
	});
	 //白酒  
	 $(".baiji").mouseenter(function(){
		$(".baiji").css("background","#D53C45");
		$(".bajiu").css("display","block");
	});
		
	$(".bai").mouseleave(function(){
		$(".baiji").css("background"," rgba(204,2,16,.9)");
		$(".bajiu").css("display","none");
	}); 
   //葡萄酒
	$(".putaoi").mouseenter(function(){
		$(".putaoi").css("background","#D53C45");
		$(".grapewine").css("display","block");
	});
		
	$(".puti").mouseleave(function(){
		$(".putaoi").css("background"," rgba(204,2,16,.9)");
		$(".grapewine").css("display","none");
	}); 
   
	//洋酒
	$(".yango").mouseenter(function(){
		$(".yango").css("background","#D53C45");
		$(".importedwines").css("display","block");
	});
		
	$(".yang").mouseleave(function(){
		$(".yango").css("background"," rgba(204,2,16,.9)");
		$(".importedwines").css("display","none");
	});
	//黄酒  
	 $(".huang").mouseenter(function(){
		$(".huang").css("background","#D53C45");
		$(".yellowRice").css("display","block");
	});
		
	$(".huan").mouseleave(function(){
		$(".huang").css("background"," rgba(204,2,16,.9)");
		$(".yellowRice").css("display","none");
	}); 
	   
	 //清酒
	$(".qingji").mouseenter(function(){
		$(".qingji").css("background","#D53C45");
		$(".sake").css("display","block");
	});
		
	$(".qingj").mouseleave(function(){
		$(".qingji").css("background"," rgba(204,2,16,.9)");
		$(".sake").css("display","none");
	}); 
	   
	 //啤酒
	 $(".piji").mouseenter(function(){
		$(".piji").css("background","#D53C45");
		$(".Beer").css("display","block");
	});
		
	$(".pij").mouseleave(function(){
		$(".piji").css("background"," rgba(204,2,16,.9)");
		$(".Beer").css("display","none");
	}); 
	  
	 //酒具周边
	 $(".zhoubb").mouseenter(function(){
		$(".zhoubb").css("background","#D53C45");
		$(".cocktail").css("display","block");
	});
		
	$(".zhoub").mouseleave(function(){
		$(".zhoubb").css("background"," rgba(204,2,16,.9)");
		$(".cocktail").css("display","none");
	}); 
	
	
	
	
	//固定头部
	$(window).scroll(function(){
		var scroll=document.documentElement.scollTop||document.body.scrollTop;
		if(scroll>300){
			$(".headlock").css("display","block");
		}else{
			$(".headlock").css("display","none");
		}
	});
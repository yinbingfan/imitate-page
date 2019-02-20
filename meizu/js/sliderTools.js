
function $I(id){
	return document.getElementById(id);
}

//透明度变换
//domObj:要变换的dom对象
//startOpacity:起始透明度
//endOpacity：结束的透明度
//inc：透明度的增量
//timeSpace:时间间隔
function fadeInOut(domObj,startOpacity,endOpacity,inc,timeSpace){
	var currOpacity = startOpacity;//
	var myTimer = null;	
	//启动定时器
	(function(){
		myTimer=setInterval(function(){
				//1、计算（改变数据）
				currOpacity = currOpacity+inc;
				if(inc>0){
					if(currOpacity>=endOpacity){
						currOpacity = endOpacity;
						clearInterval(myTimer);
						myTimer = null;
					}                  
				}else if(inc<0){
					if(currOpacity<=endOpacity){
						currOpacity = endOpacity;
						clearInterval(myTimer);
						myTimer = null;
					}
				}
				//2、改变外观（UI）
				domObj.style.opacity = currOpacity;
			},
			timeSpace);
	})();
}

//淡入：
//domObj:要变换的dom对象
//inc：透明度的增量
//timeSpace:时间间隔

function fadeIn(domObj,inc,timeSpace){
	fadeInOut(domObj,0,1,inc,timeSpace);
}

//淡出：
//domObj:要变换的dom对象
//inc：透明度的增量
//timeSpace:时间间隔
function fadeOut(domObj,inc,timeSpace){
	fadeInOut(domObj,1,0,-1*inc,timeSpace);
}


//显示对应的图片（根据图片序号显示对应的图片）
function showImg(inOrd,outOrd){//2,1
//	console.log("淡如"+inOrd+",淡出"+outOrd);
	//1）、让需要显示的图片慢慢淡入;
	fadeIn($I("banner_box").children[inOrd-1],1/30,20);	
	//2）、让正在显示的图片慢慢滑出。outOrd;
	fadeOut($I("banner_box").children[outOrd-1],1/30,20);
}

//改变按钮颜色
function changeBtnColor(ord){
	var lis = $I("banner_box").lastElementChild.children;
	for(let i=0;i<lis.length;i++){
		lis[i].style.backgroundColor="";
	}
	lis[ord-1].style.backgroundColor="#00c3f5";
}

//定时变换图片
function startChange(){
	myTimer = setInterval(goStep,3000);
}

var myTimer = null;
var currOrd = 1;

function goStep(){
	//一、计算
	//记录正在显示图片序号（这个图片就是将要出去的图片序号）
	var outOrd = currOrd;//5
	//1、改变图片序号（要显示的图片需要）
	currOrd++;//6
	if(currOrd>5){
		currOrd=1;//1
	}
	
	//二、改变外观
	//2、改变图片（滑入方式）
	showImg(currOrd,outOrd);//2,1
	
	//3、改变按钮的背景颜色
	changeBtnColor(currOrd);
}

//停止变换
function stopChange(){
	if(myTimer!=null){
		clearInterval(myTimer);
		myTimer = null;
	}
}

//继续变换就是startChange();

//跳转到对应的图片上
function goImg(ord){//5;
	if(currOrd==ord){
		return;
	}
	//把正在显示的图片序号赋给outOrd
	var outOrd = currOrd;
	//把要显示的图片序号赋给currOrd
	currOrd = ord;
	
	//二、改变外观
	//2、改变图片（滑入方式）
	showImg(currOrd,outOrd);
	
	//3、改变按钮的背景颜色
	changeBtnColor(currOrd);	
}
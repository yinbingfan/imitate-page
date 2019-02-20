function $I(id){
	return document.getElementById(id);
}

//显示对应的图片（根据图片序号显示对应的图片）
function showImg(inOrd,outOrd){//2,1
	//1）、让需要显示的图片慢慢淡入;
	fadeIn($I("slideshow-Img").children[inOrd-1],1/50,50);	
	//2）、让正在显示的图片慢慢滑出。outOrd;
	fadeOut($I("slideshow-Img").children[outOrd-1],1/50,50);
}

//改变按钮颜色
function changeBtnColor(ord){
	var lis = $I("pagination").children;
	for(var i=0;i<lis.length;i++){
		lis[i].style.backgroundColor="red";
	}
	lis[ord-1].style.backgroundColor="#ccc";
}

//定时变换图片
function startChange(){
	myTimer = setInterval(goStep,5000);
}

var myTimer = null;
var currOrd = 1;

function goStep(){
	//一、计算
	//记录正在显示图片序号（这个图片就是将要出去的图片序号）
	var outOrd = currOrd;//5
	//1、改变图片序号（要显示的图片需要）
	currOrd++;//6
	if(currOrd>6){
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

function fadeIn(domObj,inc,timeSpace){
	fadeInOut(domObj,0,1,inc,timeSpace);
}

function fadeOut(domObj,inc,timeSpace){
	fadeInOut(domObj,1,0,-1*inc,timeSpace);
}

function moveObj(domObj,startPoint,endPoint,incLeft,incTop,timeSpace,func){
	var currLeft = startPoint.x;//-400
	var currTop = startPoint.y;//0
	var myTimer = null;
	
	startMove();
	
	//启动定时器
	function startMove(){
		myTimer=setInterval(goStep,timeSpace);
	}
	//单步函数
	function goStep(){
		//1、计算（改变数据）
		currLeft = currLeft+incLeft;//-400+8=-392
		currTop = currTop +incTop;//0+0
		if(incLeft>0){
			// 边界处理
			if(currLeft>endPoint.x){
				currLeft = endPoint.x;
				clearInterval(myTimer);
				func && func();
				myTimer = null;
			}
		}else{
			if(currLeft<endPoint.x){
				currLeft = endPoint.x;
				clearInterval(myTimer);
				func && func();
				myTimer = null;
			}
		}
		
		if(incTop>0){
			// 边界处理
			if(currTop>endPoint.y){
				currTop = endPoint.y;
				clearInterval(myTimer);
				func && func();
				myTimer = null;
			}
		}else{
			if(currTop<endPoint.y){
				currTop = endPoint.y;
				clearInterval(myTimer);
				func && func();
				myTimer = null;
			}
		}
		
		//2、改变外观（UI）
		domObj.style.left = currLeft+"px";//-392
		domObj.style.top = currTop+"px";//0
	}	
}
function moveH(domObj,startPoint,endPoint,incLeft,timeSpace){
	moveObj(domObj,startPoint,endPoint,incLeft,0,timeSpace);	
}

function moveV(domObj,startPoint,endPoint,incTop,timeSpace){
	moveObj(domObj,startPoint,endPoint,0,incTop,timeSpace);	
}
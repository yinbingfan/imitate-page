function $id(id){
	return document.getElementById(id);
}
function $create(str){
	return document.createElement(str);
}



var BigMirrorSingleton=(function(){
	function BigMirror(obj){
		let defaultObj={
		boxDom:this.boxDom,
		mirrorDom:null,
		BigshowDom:null,
		bigImgDom:null,
		bigImg:"",
		width:50,
		height:50,
		mult:3,
		};
	for(let key in obj){
		defaultObj[key]=obj[key];	
	}
	for(let key in defaultObj){
		this[key]=defaultObj[key];
	}

	this.initUI();
	this.initEvent();	
	}


	BigMirror.prototype={
	//初始化页面
	initUI:function(){
		this.createAllDom();
		this.updateAttr();
	},

	//创造
	createAllDom:function(){
		//创造一个镜子
		this.mirrorDom=$create("div");
		let cssStr="position:absolute;top:0;left:0;background:gray;opacity:.4;display:none;";
		this.mirrorDom.style.cssText=cssStr;
		//创造一个放大图片的盒子
		this.BigshowDom=$create("div");
		cssStr="position:absolute;top:0;border:1px solid red;z-index:900; overflow:hidden;display:none;";
		this.BigshowDom.style.cssText=cssStr;
		//创造图片
		this.bigImgDom=$create("img");
		cssStr="position:absolute;top:0;left:0;";
		this.bigImgDom.style.cssText=cssStr;
		
	},

	//修改的放大镜相关属性
	updateAttr:function(){
		//镜子需要修改的属性
		this.mirrorDom.style.width=this.width+"px";

		this.mirrorDom.style.height=this.height+"px";

		this.mirrorDom.style.display="block";

		this.boxDom.appendChild(this.mirrorDom);
		//放大图片的盒子需要修改的相关属性
		this.BigshowDom.style.left=this.boxDom.offsetWidth+"px";
		this.BigshowDom.style.width=this.width*this.mult+"px";
		this.BigshowDom.style.height=this.height*this.mult+"px";
		this.mirrorDom.style.display="block";
		this.boxDom.appendChild(this.BigshowDom);
		//图片需要修改的属性
		this.bigImgDom.src=this.bigImg;
		this.bigImgDom.style.width=this.boxDom.offsetWidth*this.mult+"px";
		this.bigImgDom.style.height=this.boxDom.offsetHeight*this.mult+"px";
		this.BigshowDom.appendChild(this.bigImgDom);
	},

	//初始化事件
	initEvent:function(){
		let obj=this;
		this.boxDom.onmouseover=function(){
			obj.BigshowDom.style.display="block";
			obj.mirrorDom.style.display="block";
		}
		this.mirrorDom.onmouseover=function(){
			obj.BigshowDom.style.display="block";
			obj.mirrorDom.style.display="block";
		}
		this.mirrorDom.onmouseout=function(){
			obj.BigshowDom.style.display="none";
			obj.mirrorDom.style.display="none";
		}

		this.boxDom.onmouseout=function(){
			obj.BigshowDom.style.display="none";
			obj.mirrorDom.style.display="none";
		}
	
		this.boxDom.onmousemove=function(event){
			let evt=event||window.event;
			//改变数据	鼠标移动放大镜   改变其left top
			let left = evt.pageX-obj.boxDom.offsetLeft-obj.width/2;
			let top = evt.pageY-obj.boxDom.offsetTop-obj.height/2;
			//判断边界
			if(left<0){
				left=0;
			}else if(left>obj.boxDom.offsetWidth-obj.width){
				left=(obj.boxDom.offsetWidth-obj.width)+"px";
			}
   			
   			if (top<0) {
   				top=0;
   			}else if(top>obj.boxDom.offsetHeight-obj.height){
   				top=(obj.boxDom.offsetHeight-obj.height)+"px";
   			}

   			//改变外观
			obj.mirrorDom.style.left=left+"px";
			obj.mirrorDom.style.top=top+"px";


			obj.bigImgDom.style.left=(-1*obj.mult*left)+"px";
			obj.bigImgDom.style.top=(-1*obj.mult*top)+"px";
		}
	}
	}


	//定义一个变量
	var instance;
	//函数BigMirrorSingleton的返回值
	return {
		getInstance:function(obj){
			if (instance==undefined) {
				instance = new BigMirror(obj);
			}else{
				
					instance.boxDom=obj.boxDom;
					instance.width=obj.width;
					instance.height=obj.height;
					instance.bigImg=obj.bigImg;
					instance.mult=obj.mult;
					instance.updateAttr();	
					instance.initEvent();	
					
			}
			return  instance;
		}
		
	}

})();

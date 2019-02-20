function $I(id){
	return document.getElementById(id);
}
function startChange(){
	myTimer = setInterval(goStep,3000);
}
var myTimer = null;
var currOrd = 1;
var inOrd;
function goStep(){
	currOrd++; 
	if(currOrd>2){ 
		currOrd=1;
	}
	var outOrd = currOrd-1;
	if(outOrd<1){
		outOrd = 2;
	}
	moveImg(currOrd,outOrd);		
}
function stopChange(){
	window.clearInterval(myTimer);
}
function goImg(transOrd){//1
	var outOrd = currOrd ;//3；
	currOrd = transOrd;//1	
	moveImg(currOrd,outOrd);
}
function moveImg(inOrd,outOrd){
	if(inOrd==outOrd){
		return;
	}	
}
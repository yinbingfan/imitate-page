//数量的加法
$(".summary")[0].innerHTML =Number($(".wal")[0].innerHTML);
$("#subtr").click(function(){
	let num= $("#tex")[0].value;
	num--;
	if(num<=0){
		alert("商品不能小于一件");
		return;
	}
	$("#tex")[0].value=num;
	$(".wal")[0].innerHTML= Number($(".waresl")[0].innerHTML)*num;
	$(".summary")[0].innerHTML=$(".wal")[0].innerHTML;

});
$("#plus").click(function(){
	let num=$("#tex")[0].value;
	num++;
	$("#tex")[0].value=num;	
	$(".wal")[0].innerHTML= Number($(".waresl")[0].innerHTML)*num;
	$(".summary")[0].innerHTML=$(".wal")[0].innerHTML;
});






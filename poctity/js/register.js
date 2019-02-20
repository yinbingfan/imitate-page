$(function(){
	//手机邮箱号
	$("#emil").blur(function(){
		if(checkAll("userCallNum",$("#emil")[0].value)==true&&checkAll("userEmail",$("#emil")[0].value)){
			$(".tlit")[0].innerHTML="手机号/邮箱输入正确";	
			$(".tlit").css("color","red");
		}else{
			$(".tlit")[0].innerHTML="请输入正确的手机号/邮箱";
			$(".tlit").css("color","green");
		}if($("#emil")[0].value==""){
			$(".tlit")[0].innerHTML="请输入手机号/邮箱";	
			$(".tlit").css("color","blue");
		}	
	
	});
	$("#emil").focus(function(){
		if($("#emil")[0].value==""){
			$(".tlit")[0].innerHTML="请输入手机号";	
			$(".tlit").css("color","blue");
		}	
	});
//	密码
	$("#password").blur(function(){
		if(checkAll("userPass",$("#password")[0].value)){
			$(".pass")[0].innerHTML="密码正确";	
			$(".pass").css("color","red");
		}else{
			$(".pass")[0].innerHTML="请输入密码不正确";
			$(".pass").css("color","green");
		}if($("#password")[0].value==""){
			$(".pass")[0].innerHTML="请输入密码";	
			$(".pass").css("color","blue");
		}	
	
	});
	$("#password").focus(function(){
		if($("#password")[0].value==""){
			$(".pass")[0].innerHTML="请输入密码";	
			$(".pass").css("color","blue");
		}	
	});
//	当点击登录按钮时
	$(".sub").click(function(){
		$.ajax({ 
			type:"POST",
			url:"blue.php",
			data:{
					"userPhone":$("#emil").val(),
					"userPass":$("#password").val()
				},
			success:function(data){
				if(str=="1"){
						//记录cookie
						setCookie("userPhone",$("#password").val(),1)
						setCookie("userPass",$("#phone").val(),1)
						location.href="index.html";
					}else{
						alert("用户名或者密码错误，登录失败！");
					}		
			}
		});
		
		
	});
	
	
	
});

function setCookie(key,sValue,iDay){
    var date=new Date();
    date.setDate(date.getDate()+iDay);
    document.cookie=key+'='+escape(sValue)+'; expires='+date.toGMTString();
    
}



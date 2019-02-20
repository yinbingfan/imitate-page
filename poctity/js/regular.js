function checkAll(type,value){
	var reg;
	switch(type){
		case "ip": reg = ipReg();break;
		case "userName": reg = userNameReg();break;
		case "date":reg = dateReg();break;
		case "userPass":reg=userPass();break;
		case "userEmail":reg=userEmail();break;
		case "userCallNum":reg=userCallNum();break;
		case "userId":reg=userId();break;
		default:;
	}
	
	if(reg.test(value)){
		return true;
	}else{
		return false;
	}
}

function ipReg(){
	return /^((\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/;
}

function userNameReg(){
	return /^[a-zA-Z_]\w{5,14}$/;	
}

function dateReg(){
	return /^\d{4}(-|\/|\.)(0[1-9]|1[0-2])(-|\/|\.)\d{2}$/;
}
function userPass(){
	return /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
}
function userEmail(){
		return/^[a-zA-Z0-9]{5,12}@[A-Za-z0-9]{2,}\.(com|cn|net)$/;
}
function userCallNum(){
	return /^1[3-5][0-9]{9}$/;
}
function userId(){
	return /^[1-9]\d{5}(18|19|2[0-9])\d{2}(0[1-9]|1[0-2])(0[1-9]|1\d|2\d|3[0-1])\d{3}\d|x$/;
}
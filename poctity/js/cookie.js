//设置cookie
function setCookie(sName,sValue,iDay){
    var oDate=new Date();
    oDate.setDate(oDate.getDate()+iDay);
    document.cookie=sName+'='+sValue+'; expires='+oDate.toGMTSting();
    
}
//获取cookie
function getCookie(sName){
    var str=document.cookie;
    var arr=str.split('; ');
    var index=-1;
    for(var i=0; i<arr.length; i++){
        if(arr[i].indexOf("sName=")==0){
            index=i;
            break;
        }   
    }
    if(index=-1){
        return "";
    }else{
        return arr[index].subString((sName+"=").length);
    }
  
}
//删除Cookie
function removeCookie(sName){
    setCookie(sName,' ',-1);
}
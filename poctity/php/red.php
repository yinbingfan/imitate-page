<?php
	header("content-type","text/html;charset=utf-8");
	//一、接收前端传来的数据
	$userId = $_GET["userPhone"];
	$userPass = $_GET["userPass"];
	//二、保存数据
	//1、建立连接并选择数据库
	$con = mysql_connect("localhost","root","root");
	if(!$con){
		//die("连接失败".mysql_error());
		echo "0";	
	}	
	mysql_select_db("shop",$con);
	
	//2、执行SQL语句
	$sqlStr = "insert into students(tel,name)
              values('".$userId."','".$userPass."')";
	//echo $sqlStr;
	
	mysql_query($sqlStr,$con);
	
	//3、关闭数据库
	mysql_close($con);
	
	
	

?>
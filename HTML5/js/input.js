
function click_scroll() {
  var scroll_offset = $("#forced_pic").offset();  //得到pos这个div层的offset，包含两个值，top和left
  $("body,html").animate({
   scrollTop:scroll_offset.top  //让body的scrollTop等于pos的top，就实现了滚动
   },600);
 }

function count_radius()//滑稽按钮  计算
{
	
	
	
}








function main_axle_add_draw(){

window.open("html/page.html", "newwindow", "height=768px, width=1024px, top=50%, left=50%, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=yes, status=no") //这句要写成一行 

}

function return_main_windows(){
	
	 window.location.href = "html/page.html";
}










 var element="draw_width"; 
 if(screen.width>1280){
 draw_width=screen.width/3;	}
 else{
	 draw_width="420px";
 }
	
function draw_force_diagram(x_pal)
{
	//显示函数绘制框架
	document.getElementById("forced_pic").style.display='block';//显
	
	//绘制当前函数图像
	  //水平面弯矩图
		var x=document.getElementById("x_square");
		var cx = x_square.getContext("2d"); 
		var x_pal0=x_pal;
		var x_point0;
		var x_point0;
		x_point=x_pal0*40-30;
		// 首先清空画布
		cx.clearRect(0,0,420,220); 
		//绘制坐标轴部分
		cx.strokeStyle="black";
		cx.beginPath();
		cx.moveTo(10,200); 
		cx.lineTo(410,200);  
		// 绘制坐标点
		cx.moveTo(10,195); 
		cx.lineTo(10,200);  		
		cx.moveTo(50,195); 
		cx.lineTo(50,200);   
		cx.moveTo(90,195); 
		cx.lineTo(90,200);  		
		cx.moveTo(130,195); 
		cx.lineTo(130,200);  
		cx.moveTo(170,195); 
		cx.lineTo(170,200);  
		cx.moveTo(210,195); 
		cx.lineTo(210,200);  		
		cx.moveTo(250,195); 
		cx.lineTo(250,200);  
		cx.moveTo(290,195); 
		cx.lineTo(290,200);  		
		cx.moveTo(330,195); 
		cx.lineTo(330,200);  
		cx.moveTo(370,195); 
		cx.lineTo(370,200);  	
 
		cx.stroke(); 
		//绘制箭头，数值
		cx.fillStyle="black";
		cx.font="bold 15px Arial";   
		cx.fillText("1",  6, 213);
		cx.fillText("2",  46, 213);
		cx.fillText("3",  86, 213);
		cx.fillText("4",  126, 213);
		cx.fillText("5",  166, 213);
		cx.fillText("6",  206, 213);
		cx.fillText("7",  246, 213);
		cx.fillText("8",  286, 213);
		cx.fillText("9",  326, 213);
		cx.fillText("10", 362, 213);

		cx.strokeStyle="black";			
		
		cx.moveTo(400,190); 
		cx.lineTo(410,200); 
		cx.moveTo(400,210); 
		cx.lineTo(410,200); 
		cx.stroke(); 
		cx.save();  
		
		//绘制实际函数图
		cx.strokeStyle="blue";	
		cx.beginPath();
		cx.moveTo(10,200); 
		cx.lineTo(x_point,150);
		cx.moveTo(x_point,150); 		
		cx.lineTo(x_point,90);	
		cx.moveTo(x_point,90); 		
		cx.lineTo(250,200);
		cx.stroke(); 	
		
	//垂直面弯矩图
		var x=document.getElementById("y_square");
		var cy = y_square.getContext("2d"); 
		var x_pal1=x_pal;
		var x_point1;
		var x_point1;
		x_point1=x_pal1*40-30;
		// 首先清空画布
		cy.clearRect(0,0,420,220); 		
		//绘制坐标轴部分
		cy.strokeStyle="black";
		cy.beginPath();
		cy.moveTo(10,200); 
		cy.lineTo(410,200);  
		//绘制坐标点
		cy.moveTo(10,195); 
		cy.lineTo(10,200);  		
		cy.moveTo(50,195); 
		cy.lineTo(50,200);   
		cy.moveTo(90,195); 
		cy.lineTo(90,200);  		
		cy.moveTo(130,195); 
		cy.lineTo(130,200);  
		cy.moveTo(170,195); 
		cy.lineTo(170,200);  
		cy.moveTo(210,195); 
		cy.lineTo(210,200);  		
		cy.moveTo(250,195); 
		cy.lineTo(250,200);  
		cy.moveTo(290,195); 
		cy.lineTo(290,200);  		
		cy.moveTo(330,195); 
		cy.lineTo(330,200);  
		cy.moveTo(370,195); 
		cy.lineTo(370,200);  	  
		cy.stroke(); 
		// 绘制箭头，数值
		cy.fillStyle="black";
		cy.font="bold 15px Arial";   
		cy.fillText("1",  6, 213);
		cy.fillText("2",  46, 213);
		cy.fillText("3",  86, 213);
		cy.fillText("4",  126, 213);
		cy.fillText("5",  166, 213);
		cy.fillText("6",  206, 213);
		cy.fillText("7",  246, 213);
		cy.fillText("8",  286, 213);
		cy.fillText("9",  326, 213);
		cy.fillText("10", 362, 213);

		cy.strokeStyle="black";			
		
		cy.moveTo(400,190); 
		cy.lineTo(410,200); 
		cy.moveTo(400,210); 
		cy.lineTo(410,200); 
		cy.stroke(); 
		cy.save();  
		
		// 绘制实际函数图
		cy.strokeStyle="blue";	
		cy.beginPath();		
		cy.moveTo(10,200); 
		cy.lineTo(x_point1,60);
		cy.moveTo(x_point1,60); 		
		cy.lineTo(250,200);
		cy.stroke(); 
	
	
    //合成面弯矩图
		var s=document.getElementById("xy_square");
		var cxy = xy_square.getContext("2d"); 
		var x_pal2=x_pal;
		var x_point2;
		var x_point2;
		x_point2=x_pal2*40-30;
		// 首先清空画布
		cxy.clearRect(0,0,420,220); 
		//绘制坐标轴部分
		cxy.strokeStyle="black";
		cxy.beginPath();
		cxy.moveTo(10,30); 
		cxy.lineTo(410,30);  
		//绘制坐标点
		cxy.moveTo(10,25); 
		cxy.lineTo(10,30);  		
		cxy.moveTo(50,25); 
		cxy.lineTo(50,30);   
		cxy.moveTo(90,25); 
		cxy.lineTo(90,30);  		
		cxy.moveTo(130,25); 
		cxy.lineTo(130,30);  
		cxy.moveTo(170,25); 
		cxy.lineTo(170,30);  
		cxy.moveTo(210,25); 
		cxy.lineTo(210,30);  		
		cxy.moveTo(250,25); 
		cxy.lineTo(250,30);  
		cxy.moveTo(290,25); 
		cxy.lineTo(290,30);  		
		cxy.moveTo(330,25); 
		cxy.lineTo(330,30);  
		cxy.moveTo(370,25); 
		cxy.lineTo(370,30);  	
		cxy.stroke(); 
		//绘制箭头，数值 
		cxy.fillStyle="black";
		cxy.font="bold 15px Arial";   
		cxy.fillText("1",  6, 23);
		cxy.fillText("2",  46, 23);
		cxy.fillText("3",  86, 23);
		cxy.fillText("4",  126, 23);
		cxy.fillText("5",  166, 23);
		cxy.fillText("6",  206, 23);
		cxy.fillText("7",  246, 23);
		cxy.fillText("8",  286, 23);
		cxy.fillText("9",  326, 23);
		cxy.fillText("10", 362, 23);
		cxy.strokeStyle="black";			
		
		cxy.moveTo(400,20); 
		cxy.lineTo(410,30); 
		cxy.moveTo(400,40); 
		cxy.lineTo(410,30); 
		cxy.stroke(); 
		cxy.save();  
		
		//绘制实际函数图 
		cxy.strokeStyle="blue";	
		cxy.beginPath();		
		cxy.moveTo(10,30); 
		cxy.lineTo(x_point2,200);
		cxy.moveTo(x_point2,200); 		
		cxy.lineTo(370,30);
		cxy.stroke(); 	
		
	
		// 当量弯矩图
		var cs=document.getElementById("s_square").getContext("2d");
		var x_pal3=x_pal;
		var x_point3;
		var x_point3;
		x_point3=x_pal3*40-30;
		// 首先清空画布
		cs.clearRect(0,0,420,220); 
		//绘制坐标轴部分
		cs.strokeStyle="black";
		cs.beginPath();
		cs.moveTo(10,30); 
		cs.lineTo(410,30);  
		// 绘制坐标点
		cs.moveTo(10,25); 
		cs.lineTo(10,30);  		
		cs.moveTo(50,25); 
		cs.lineTo(50,30);   
		cs.moveTo(90,25); 
		cs.lineTo(90,30);  		
		cs.moveTo(130,25); 
		cs.lineTo(130,30);  
		cs.moveTo(170,25); 
		cs.lineTo(170,30);  
		cs.moveTo(210,25); 
		cs.lineTo(210,30);  		
		cs.moveTo(250,25); 
		cs.lineTo(250,30);  
		cs.moveTo(290,25); 
		cs.lineTo(290,30);  		
		cs.moveTo(330,25); 
		cs.lineTo(330,30);  
		cs.moveTo(370,25); 
		cs.lineTo(370,30);  	
		cs.stroke(); 
		//绘制箭头，数值  
		cs.fillStyle="black";
		cs.font="bold 15px Arial";   
		cs.fillText("1",  6, 23);
		cs.fillText("2",  46, 23);
		cs.fillText("3",  86, 23);
		cs.fillText("4",  126, 23);
		cs.fillText("5",  166, 23);
		cs.fillText("6",  206, 23);
		cs.fillText("7",  246, 23);
		cs.fillText("8",  286, 23);
		cs.fillText("9",  326, 23);
		cs.fillText("10", 362, 23);
		cs.strokeStyle="black";			
		
		cs.moveTo(400,20); 
		cs.lineTo(410,30); 
		cs.moveTo(400,40); 
		cs.lineTo(410,30); 
		cs.stroke(); 
		cs.save();  
		
		//绘制实际函数图
		cs.strokeStyle="blue";	
		cs.beginPath();		
		cs.moveTo(10,30); 
		cs.lineTo(x_point3,200);
		cs.moveTo(x_point3,200); 		
		cs.lineTo(370,30);
		cs.stroke(); 		
	
		// 外伸端方向未定压轴力的附加弯矩图			
		var h=document.getElementById("h_square");
		var ch = h_square.getContext("2d"); 
		var x_pal4=11-x_pal;
		var x_point4;
		var x_point4;
		x_point4=x_pal4*40-30;
		// 首先清空画布
		ch.clearRect(0,0,420,220); 		
		//  绘制坐标轴部分 
		ch.strokeStyle="black";
		ch.beginPath();
		ch.moveTo(10,30); 
		ch.lineTo(410,30);  
		// <!-- 绘制坐标点-->
		ch.moveTo(10,25); 
		ch.lineTo(10,30);  		
		ch.moveTo(50,25); 
		ch.lineTo(50,30);   
		ch.moveTo(90,25); 
		ch.lineTo(90,30);  		
		ch.moveTo(130,25); 
		ch.lineTo(130,30);  
		ch.moveTo(170,25); 
		ch.lineTo(170,30);  
		ch.moveTo(210,25); 
		ch.lineTo(210,30);  		
		ch.moveTo(250,25); 
		ch.lineTo(250,30);  
		ch.moveTo(290,25); 
		ch.lineTo(290,30);  		
		ch.moveTo(330,25); 
		ch.lineTo(330,30);  
		ch.moveTo(370,25); 
		ch.lineTo(370,30);  	
		ch.stroke(); 
		
		// 绘制箭头，数值 
		ch.fillStyle="black";
		ch.font="bold 15px Arial";   
		ch.fillText("1",  6, 23);
		ch.fillText("2",  46, 23);
		ch.fillText("3",  86, 23);
		ch.fillText("4",  126, 23);
		ch.fillText("5",  166, 23);
		ch.fillText("6",  206, 23);
		ch.fillText("7",  246, 23);
		ch.fillText("8",  286, 23);
		ch.fillText("9",  326, 23);
		ch.fillText("10", 362, 23);
		ch.strokeStyle="black";			
		
		ch.moveTo(400,20); 
		ch.lineTo(410,30); 
		ch.moveTo(400,40); 
		ch.lineTo(410,30); 
		ch.stroke(); 
		ch.save();  
		
		// 绘制实际函数图
		ch.strokeStyle="blue";	
		ch.beginPath();		
		ch.moveTo(10,30); 
		ch.lineTo(x_point4,160);
		ch.moveTo(x_point4,160); 		
		ch.lineTo(370,30);
		ch.stroke(); 		
	
}
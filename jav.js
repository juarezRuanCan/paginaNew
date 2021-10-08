$(document).ready(function(){
	$("#banner").css({"height":$(window).height()+"px"});

	var flag = false;
	var flag2 = false;
	var scroll;
	var scroll2;
	$("#logo").css({"margin-top": "150px", "width": "250px", "height": "250px"});
	$("#letras").css({"opacity": "400", "margin-top": "65px", "margin-left": "10px", "width": "100%", "height": "80px", "font-size": "2.7em"});
	$(window).scroll(function(){

		scroll=$(window).scrollTop();

		if(scroll >200){
			if (!flag){
				$("#logo").css({"margin-top": "-5px", "width": "8vw", "height": "8vw"});
				$("#letras").css({"opacity": "0", "margin-top": "10px", "width": "100%", "height": "10px", "font-size": "1.0rem"});
				flag=true;  	
			}
			
		}else{
			if(flag){
				$("#logo").css({"margin-top": "150px", "width": "15.625vw", "height": "15.625vw"});
				$("#letras").css({"opacity": "400", "margin-top": "65px", "width": "100%", "height": "80px", "font-size": "2.7rem"});
				flag=false;
			}
		} 
	});
})
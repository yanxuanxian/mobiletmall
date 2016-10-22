window.onload=function(){
	var header=$('.search-box');
	var top=600;
	window.onscroll=function(){
		var stop=document.body.scrollTop||document.documentElement.scrollTop;
		if(stop>top){
			header.addClass('header-active');
		}
		if(stop<top){
			header.removeClass('header-active');
		}
	}
	var btn=$("#btn");
	var cover=$(".tab-cover");
	var th=$(".tab-header");
	var tc=$(".tab-content");
	btn.on("click",function(){
		cover.add(th).add(tc).addClass("active");
		$("body").addClass("oh");
	})
	cover.on("click",function(){
		th.add(tc).removeClass("active");
		$(this).delay(400).queue(function(){
			$(this).removeClass("active").dequeue();
		})
		$("body").removeClass("oh");
	})
	var tabClone=$(".tab-content .tab-clone");
	tabClone.on("click",function(){
		tabClone.removeClass("show");
		$(this).addClass("show");
	})
}
//top-head




//head
$(document).ready(function(){

 $(window).scroll(function() {
            if($(window).scrollTop()>580)
			{
                $(".head").css({"position":"fixed","top":"0","z-index":"1000","width":"768px",});}
			else
			{                $(".head").css("position","relative");}
        });
});
//skill
$(document).ready(function(){
	$(".ability-main2-1").hide();
	$(".ability-main2-2").hide();
	$(".ability-main2-3").hide();
	$(".ability-main2-4").hide();
  $(".html1").mouseenter(function(){
	  $(".html1 div").animate({top:"20px"});
    $(".ability-main2-1").fadeIn();
  });
  $(".html1").mouseleave(function(){
	  $(".html1 div").animate({top:"0px"});
    $(".ability-main2-1").fadeOut();
  });
  
 
});


$(document).ready(function(){

$(".css1").mouseenter(function(){
	  $(".css1 div").animate({top:"20px"});
    $(".ability-main2-2").fadeIn();
  });
  $(".css1").mouseleave(function(){
	  $(".css1 div").animate({top:"0px"});
    $(".ability-main2-2").fadeOut();
  });
  
  });
  
  
  $(document).ready(function(){

$(".js1").mouseenter(function(){
	  $(".js1 div").animate({top:"20px"});
    $(".ability-main2-3").fadeIn();
  });
  $(".js1").mouseleave(function(){
	  $(".js1 div").animate({top:"0px"});
    $(".ability-main2-3").fadeOut();
  });
  
  });
  $(document).ready(function(){

$(".other1").mouseenter(function(){
	  $(".other1 div").animate({top:"20px"});
    $(".ability-main2-4").fadeIn();
  });
  $(".other1").mouseleave(function(){
	  $(".other1 div").animate({top:"0px"});
    $(".ability-main2-4").fadeOut();
  });
  
  });
  
  
  //作品
  
  $(document).ready(function(){
	
	  $(".works-main1right2").hide();
$(".li1 img").mouseenter(function(){
$(".works-main1right").show();

$(".works-main1right2").hide();
});

$(".li2 img").mouseenter(function(){
$(".works-main1right2").show();
$(".works-main1right").hide();

});
});

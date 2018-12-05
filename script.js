$(function(){
    
    
    $(".menu_m").click(function(){
        $(this).children(".menu_s").stop().slideToggle();
        $(this).siblings(".menu_m").children(".menu_s").stop().slideUp();
    });
    
    $("#nav_bar").on('click', function(){
        $("nav").stop().slideToggle(500);
        $(".one").stop().toggleClass('bar');
        $(".two").stop().toggleClass('bar');
        $(".three").stop().toggleClass('bar');
        $(".menu_s").slideUp();
        $("#logo").stop().toggleClass('bar');
        $("#gongback").fadeToggle();
        $("#container").stop().toggleClass('bar');
    });
    $("#gongback").click(function(){
        $("nav").stop().slideUp(500);
        $(".one").stop().removeClass('bar');
        $(".two").stop().removeClass('bar');
        $(".three").stop().removeClass('bar');
        $(".menu_s").slideUp();
        $("#logo").stop().removeClass('bar');
        $(this).fadeOut();
        $("#container").stop().removeClass('bar');
    });
    
    $(".mp_close").click(function(){
        $("#main_p").slideToggle();
    });
    
 
    var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("logo").style.top = "0";
    document.getElementById("header_pc").style.top = "0";
  } else {
    document.getElementById("logo").style.top = "-100px";
    document.getElementById("header_pc").style.top = "-100px";
  }
    if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav_bar").style.top = "0";
  } else {
    document.getElementById("nav_bar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};





});


$(function(){
    mainSlide();
    
    function mainSlide(){
        $("#main1").delay(3000).fadeOut(1000);
        $("#main2").delay(3000).fadeIn(1000).animate({display:"block"},function(){
            $("#main2").delay(3000).fadeOut(1000);
         $("#main3").delay(3000).fadeIn(1000).animate({display:"block"},function(){
              $("#main3").delay(3000).fadeOut(1000);
                $("#main4").delay(3000).fadeIn(1000).animate({display:"block"},function(){
                    $("#main4").delay(3000).fadeOut(1000);
                    $("#main1").delay(3000).fadeIn(1000).animate({display:"block"},mainSlide);
                });
            });
        });
    }
});


$(function(){
    $(".m_pc a").mouseover(function(){
        $(".s_pc").stop().slideDown();
        $("#menu_m_pc").stop().addClass("color");
    });
    
    $("#nav_pc").mouseleave(function(){
        $(".s_pc").stop().slideUp();
        $("#menu_m_pc").stop().removeClass("color");
    });
   
    

    $(window).scroll(function(){
        if($(window).scrollTop()>0){
            $("#header_pc").css({"background-color":"white"});
            $("#menu_m_pc").stop().addClass("color");
            $("#menu_s_pc").stop().addClass("color");
        } else{
            $("#header_pc").css({"background-color":"rgba(255, 255, 255, 0.67)"});
            $("#menu_m_pc").stop().removeClass("color");
            $("#menu_s_pc").stop().removeClass("color");
        };
    });
});
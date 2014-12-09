// JavaScript Document
// The Town v1.0 || ex nihilo || August 2013


/* google analytics
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-3033286-18']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })(); */
  
  
// niceScroll
$(document).ready(function () {
    $("body").niceScroll({
       cursorborder: "1px solid #fff",
       cursorcolor: "#fff",
       background: "rgba(255, 255, 255, 0.1)",
       scrollspeed: "60",
       mousescrollstep: "40"
    });
});


// niceScroll || scrollbars resize
$("body").getNiceScroll().resize();
	
	
// countdown animation
$(function(){
		   
			$("ul.button").delay(2200).animate({
			   right: 0
			}, 800);
			
			$(".countdown-animation .countdown-bg").delay(1400).animate({
			   height: 90,
			   top: 0
			}, 800);
			
			$("a.close").click(function(){
			$(".countdown-animation .countdown-bg").stop().animate({
			   height: 0,
			   top: 30
			}, 300);
				
			$("ul.button a.open").stop().animate({
			   left: 0
			}, 300);
				
			$("ul.button a.close").stop().animate({
			   left: -30
			}, 300);
			});
			
			
			$("ul.button a.open").click(function(){
			$(".countdown-animation .countdown-bg").stop().animate({
			   height: 90,
			   top: 0
			}, 800);
				
			$("ul.button a.open").stop().animate({
			   left: 30
			}, 300);
				
			$("ul.button a.close").stop().animate({
			   left: 0
			}, 300);
			});

});


// function for the vertical scrolling effect
$(function() {
    $('.go-under, .go-way-under, .go-way-up').bind('click',function(event){
        var $anchor = $(this);
 
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000,'easeInOutExpo');
        /*
        if you don't want to use the easing effects:
        $('html, body').stop().animate({
           scrollTop: $($anchor.attr('href')).offset().top
        }, 1000);
        */
        event.preventDefault();
    });
});




// mobile-detect
	var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
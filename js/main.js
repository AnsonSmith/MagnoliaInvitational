/*------------------------------------------------------------------
Project:    CREA - Under Construction Page
Version:    1.0
Build Date:    30/10/15
Author: TheTheme99
This is a premium product available exclusively here : http://themeforest.net/user/thetheme99/portfolio

	TABLE OF CONTENTS
	1. Stick sidebar
	2. Superslides 1 (header)
	3. Superslides 2 (footer)
	4. Fancybox
	5. Menu
	6. Iphone unlock effect
	7. Carousel STUDIO PREVIEW
	8. Carousel CLIENTS
	9. Contacts Form 
	10. CLIENTS rotator
-------------------------------------------------------------------*/
jQuery(document).ready(function () { // Document ready
"use strict";
 
/* === 1. Stick sidebar === */
$(".left-sidebar").stick_in_parent();

/* === Countdown/Time === */
$(function() {
/* Write Your Date Here */  
$('div#time').countdown("2015/10/30", function(event) {
       var $this = $(this);
    switch(event.type) {
      case "seconds":
      case "minutes":
      case "hours":
      case "days":
      $this.find('span#'+event.type).html(event.value);
      break;
      case "finished":
        $this.hide();
        break;
    }
  });
});

/* === 2. Superslides 1 (header) === */
$('#slides').superslides({
	animation: 'fade', //Type slider animation
	play: 4000,
	pagination: false
});

/* === 3. Superslides 2 (footer) === */
$('#slides-2').superslides({
	pagination: false
});

/* === 4. Fancybox === */
$('.fancybox').fancybox();

/* === 5. Menu === */
$(".top_mnu ul a").on('click', function(){
		/*$(".top_mnu").fadeOut(600);*/
	});

	$(".sandwich").on('click', function(){
		if ($(".top_mnu").is(":visible")) {
			$(".top_mnu").fadeOut(600);
		} else {
			$(".top_mnu").fadeIn(600);
		};
	});

/* === 6. Iphone unlock effect === */
var gradient_percent = 0,
    gradient_offset = {
      min: -40,
      max: 140
    },
    speed = 1,
    gradient_color = 'rgba(145, 140, 118, 1)',
    empty_color = 'rgba(145, 140, 118 , 0.5)';

setInterval(function() {
  gradient_percent += speed;
  if (gradient_percent > gradient_offset.max) {
    gradient_percent = gradient_offset.min;
  }
  $('.text_mask').css('background-image', '-webkit-radial-gradient('+ gradient_percent +'% 50%, 3em 2em, ' + gradient_color + ' 0%, ' + empty_color + ' 100%)')
}, 17);

/* === 7. Carousel STUDIO PREVIEW === */
var owl = $("#owl-demo");
    owl.owlCarousel({
    navigation : true,
    singleItem : true,
    autoPlay: 5000,
    touchDrag: false,
    mouseDrag: false,
    transitionStyle : "fade"
});

//Select Transtion Type
$("#transitionType").change(function(){
	var newValue = $(this).val();
    //TransitionTypes is owlCarousel inner method.
    owl.data("owlCarousel").transitionTypes(newValue);
    //After change type go to next slide
    owl.trigger("owl.next");
});

/* === 8. Carousel CLIENTS === */
$("#rotators").owlCarousel({
    navigation : true, // Show next and prev buttons
    singleItem:true,
    navigationText : ["prev","MORE"],
    touchDrag: false,
    mouseDrag: false
  });

/* === 9. Contacts Form === */ 
var regVr22 = "<div><span style='color:#fff; padding:0; margin:0;'>Message...</span></div><br />";
$("#feedback").on('click', function(){
$("#cForm").css("display","block");
		var textform = $("#inputEmail").val();
		var postname = $("#inputName").val();
		var textArea = $("#textArea").val();
		
		$.ajax({
			type: "POST",
			url: "php/send.php", //Attach send.php
			data: {"inputEmail": textform, "inputName": postname, "textArea": textArea},
			cache: false,
			success: function(response){
		/* == Success text ==*/
		var messageResp = "<p style='color: #918c76; padding:0; margin:0;'>Hello!<strong>";
		var resultStat = "</strong style='color: #918c76; padding:0; margin:0;'> Your message has been sent, we will get back to you asap!</p>";
		var oll = (messageResp + resultStat);
				if(response == 1){
				$("#inputEmail").css("border-bottom", "1px solid #464646");
				$("#loadBar").html(oll).fadeIn(4000); //Appearance of the error text
				$("#inputEmail").val("");
				$("#inputName").val("");
				$("#textArea").val("");				
				} else {
		$("#loadBar").html(response).fadeIn(5000); //Appearance success text
		$("#loadBar").html(response).fadeOut(5000);
		$("#inputEmail").css("border-bottom", "1px solid #f7153d");
		}
		}
		});
		return false;
});

  // Start slideshow
  theRotator(); 

}); /* END OF Document Ready */

/* === 10. CLIENTS rotator === */
function theRotator() { 
  // All opacity 0 
  $('div#rotator ul li').css({opacity: 0.0}); 
  // First image 
  $('div#rotator ul li:first').css({opacity: 1.0}); 
  setInterval('rotate()',5000); 
} 
   
function rotate() {  
  // First image
  var current = ($('div#rotator ul li.show')? $('div#rotator ul li.show') : $('div#rotator ul li:first')); 
  var next = ((current.next().length) ? ((current.next().hasClass('show')) ? $('div#rotator ul li:first') :current.next()) : $('div#rotator ul li:first'));  
  // Uncomment, random slideshow 
  // var sibs = current.siblings(); 
  // var rndNum = Math.floor(Math.random() * sibs.length ); 
  // var next = $( sibs[ rndNum ] ); 
   
  // Image show effect 
  next.css({opacity: 0.0}) 
  .addClass('show') 
  .animate({opacity: 1.0}, 6000); 
  current.animate({opacity: 0.0}, 1000) 
  .removeClass('show'); 
}; 
   








   





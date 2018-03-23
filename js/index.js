$(document).ready(function(){
    $("#abt").click(function(){
        $("#about").show();
        $("#home").hide();

    });
    $("#hom").click(function(){
        $("#home").show();
        $("#about").hide();

    });
    $("#info").click(function(){
      $("#about").toggle();
      
    });
    $("#info1").click(function(){
      $("#about").toggle();
      
    });
    $("#info2").click(function(){
      $("#about").toggle();
      
    });

$(window).scroll(function () {
 debugger 
 if ($(this).scrollTop() > 50) { 
 $('#back-to-top').fadeIn(); 
 } else { 
 $('#back-to-top').fadeOut(); } }); // scroll body to 0px on click
  $('#back-to-top').click(function () { 
  	$('#back-to-top').tooltip('hide'); 
  	 $('body,html').animate({ scrollTop: 0 }, 600); return false; 
  	}); 
  $('#back-to-top').tooltip('show'); 
});
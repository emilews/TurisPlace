// JavaScript Document
$(document).ready(function(){
	
	$(window).scroll(funcion(){
	   if( $(this).scrollTop() >0 ){
		   $('header').addClass('header');
	   } else {
	      $('header').removeClass('header');
	});
	
	
});	

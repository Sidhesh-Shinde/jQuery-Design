$(function(){
	
	$('.close-btn').click(function(){
		$('.slider').slideUp(800);
	});
	
	$('.open-btn').click(function(){
		$('.slider').slideDown(800);
	});
	
	$('.toggle-btn').click(function(){
		$('.slider').slideToggle(800);
	});
});
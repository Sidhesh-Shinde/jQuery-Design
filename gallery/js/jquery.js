$(function(){

//***************Navigation****************
	$('li').has('.dropdown').hover(
		function(){
			$(this).find('.dropdown').slideDown();
		},
		function(){
			$(this).find('.dropdown').slideUp();
		});


//***************Gallery*******************
	$('.thumbs li img').hover(
		function(){	$(this).animate({	width:'200px',height:'134px'},500);	},
		function(){	$(this).animate({width:'150px',	height:'101px'},500);	}
	);
});

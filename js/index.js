$(document).ready(function(){
	$('.fa-search').click(function(){
		$('.navbar').css('display','none');
		$('#search-hide').css('display','block');
		$('#search-text').val('');
	});

	$('#close').click(function(){
		$('#search-hide').css('display','none');
		$('.navbar').css('display','block');
	});

	// thong tin quan coffee
	$('.fa-list').click(function(){
		$('#information').css('display','block');
		// $('#information').css('visibility','visible');
	});

	$('#close-info').click(function(){
    	// $("#information").animate({right: '-400px'}, "slow");
    	// $('#information').css('visibility','hidden');
    	// HideTheElementAfterAnimation();
    	$('#information').css('display','none');
	});
});
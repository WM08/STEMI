$(function(){
	$('.navbar li').click(function(event) {
		$(this).addClass('one').siblings('').removeClass('one')
	});


    

	$('.friend .logo').hover(function() {
		
		$(this).children('a').children('img').css('visibility', 'hidden');
	}, function() {
		$(this).children('a').children('img').css('visibility', 'visible');
		
    });

})

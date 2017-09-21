'use strict'

/*var btnMenu = document.querySelector('.header-menu .MToggle');
var menuButtons = document.querySelector('.header-menu .buttons');

btnMenu.onclick = function() {
	if (menuButtons.style.display != 'flex') {
		menuButtons.style.display = 'flex';
	}
	else {
		menuButtons.style.display = 'none';
	}
}

*/


/*________show adaptive menu_______________________*/
$(function() {

	$('.MToggle').on('click', function(){

		$('.buttons').slideToggle(300, function() {

			if($(this).css('display') === 'none') {

				$(this).removeAttr('style');
			}
		})
	}); 
});



$(function() {
	var slideNow = 1;
	var slideCount = $('.slide__area').children().length;
	var translateWidth = 0;

	function nextSlide() {
		if(slideNow == slideCount || slideNow <= 0 || slideNow > slideCount){
			$('.slide__area').css('transform', 'translate(0, 0)');
			slideNow = 1;
		}
		else {
			translateWidth = -$('.viewport').width() * (slideNow);
			$('.slide__area').css({
				'transform': 'translate(' + translateWidth + 'px, 0)',
            	'-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            	'-ms-transform': 'translate(' + translateWidth + 'px, 0)',
			});
			slideNow++;
		}
	}

	function prevSlide() {
		if(slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
			translateWidth = -$('.viewport').width() * (slideCount - 1);
			$('.slide__area').css({
				'transform': 'translate(' + translateWidth + 'px, 0)',
            	'-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            	'-ms-transform': 'translate(' + translateWidth + 'px, 0)',
			});
			slideNow = slideCount;
			}
			else {
				translateWidth = -$('.viewport').width() * (slideNow - 2);
				$('.slide__area').css({
					'transform': 'translate(' + translateWidth + 'px, 0)',
            	'-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            	'-ms-transform': 'translate(' + translateWidth + 'px, 0)'
				});
				slideNow--;
			}
	}

	

	$('#prev').on('click', function(){
		prevSlide();
		
	});

	$('#next').click(function(){
		nextSlide();
	})
});




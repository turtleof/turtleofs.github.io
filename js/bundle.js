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



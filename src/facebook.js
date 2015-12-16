

module.exports = {
	init: () => {
		window.fbAsyncInit = function() {
			FB.init({
				appId      : '208517450159',
				xfbml      : true,
				version    : 'v2.4'
			});
		};

		// var container = document.querySelector('.fb-container');
		// container.style.height = (window.innerHeight - 175) + 'px';

		(function(d, s, id){
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {return;}
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/en_US/sdk.js";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));

	},
	// adjustWidth: () => {
	// 	var page = document.querySelector('#page'),
	// 	container = document.querySelector('.fb-container');

	// 	var margins = window.getComputedStyle(page).getPropertyValue('margin').split(' ');
	// 	var containerWidth = parseInt(window.getComputedStyle(container).getPropertyValue('width'));
		
	// 	var rightMargin;
	// 	switch(margins.length) {
	// 		case 1:
	// 			rightMargin = parseInt(margins[0]); break;
	// 		case 2:
	// 			rightMargin = parseInt(margins[1]); break;
	// 		case 4:
	// 			rightMargin = parseInt(margins[3]); break;
	// 	}

	// 	var newWidth = module.exports.evaluateMargin(rightMargin - 20, containerWidth);
	// 	if (newWidth != containerWidth) {
			
	// 		container.style.width = newWidth + 'px';
			
	// 		window.fbAsyncInit();
	// 	}
	// },
	// evaluateMargin: (margin, size) => {
	// 	console.log('margin', margin);
	// 	console.log('size', size);

	// 	if (margin < 150) return 0;
	// 	if (size > 340) return 340;

	// 	if (margin < size) {
	// 		return size - 50;
	// 	}

	// 	return margin - size > 100  ? size + 50 : size;
	// }
}




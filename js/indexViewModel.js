// var indexViewModule = (function (indexViewModule) {
// 	indexViewModule.indexViewModel = function() {
// 		var self = this;
// 		self.title = ko.observable("sammy");	

		

// 	return indexViewModule;
// }(indexViewModule || {}));

$(document).ready(function () {
			$('#jumbo').hide().fadeIn(2000);
			
			function fadingIn() {
				setTimeout(function () {$('#one').fadeIn(1000)}, 500);
				setTimeout(function () {$('#two').fadeIn(1000)}, 750);
				setTimeout(function () {$('#three').fadeIn(1000)}, 1000);
				setTimeout(function () {$('#four').fadeIn(1000)}, 1250);
				setTimeout(function () {$('#five').fadeIn(1000)}, 1500);
				setTimeout(function () {$('#six').fadeIn(1000)}, 1750);
			};

			function fadingOut() {
				setTimeout(function () {$('#six').fadeOut(1000)}, 500);
				setTimeout(function () {$('#five').fadeOut(1000)}, 750);
				setTimeout(function () {$('#four').fadeOut(1000)}, 1000);
				setTimeout(function () {$('#three').fadeOut(1000)}, 1250);
				setTimeout(function () {$('#two').fadeOut(1000)}, 1500);
				setTimeout(function () {$('#one').fadeOut(1000)}, 1750);				
			};

			$('#podcasts').click(function () {
				$('li').removeClass('active');
				$(this).parent().addClass('active');
				$('#jumbo').fadeOut(1000);
				setTimeout(function() {fadingIn()}, 750);
			});

			$('#home').click(function () {
				$('li').removeClass('active');
				$(this).parent().addClass('active');
				fadingOut();
				setTimeout(function () {$('#jumbo').fadeIn(2000)}, 2500);
			});

			$('#about').click(function () {
				$('li').removeClass('active');
				$(this).parent().addClass('active');
			});

			$('#contact').click(function () {
				$('li').removeClass('active');
				$(this).parent().addClass('active');
			});
});
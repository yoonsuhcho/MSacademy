$(document).ready(function() {
	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});

// Owl Carousel
	
      $("#owl-demo").owlCarousel({
		  autoPlay : true,
        pagination: false,
		navigation : false,
		items: 3
		
      });
	  //반응형
	 

	// Fancybox
	$('.work-box').fancybox();

	// Page Scroll
	var sections = $('section')
		nav = $('nav[role="navigation"]');

	$(window).on('scroll', function () {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    	var top = $(this).offset().top - 76
	        	bottom = top + $(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    	}
	  	});
	});
	nav.find('a').on('click', function () {
	  	var $el = $(this)
	    	id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 75
		}, 500);
	  return false;
	});

	// Mobile Navigation
	$('.nav-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});	
	nav.find('a').on('click', function() {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});
});

//FadeIn
document.addEventListener("DOMContentLoaded", function() {
	// 모든 td 요소를 선택하여 순회하며 페이드 인 효과 적용
	var tds = document.querySelectorAll("#serviceTable td");
	var delay = 0; // 각 요소의 페이드 인 지연 시간 (초기값 0)
  
	for (var i = 0; i < tds.length; i++) {
	  tds[i].style.transitionDelay = delay + "s";
	  tds[i].style.opacity = 1;
	  delay += 0.2; // 0.2초씩 지연 시간을 증가하여 순차적으로 나타나도록 설정
	}
  });
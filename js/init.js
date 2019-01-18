﻿jQuery(document).ready(function(){

	"use strict";
	
	
	
	// here all ready functions
	
	inedi_tm_hamburger();
	inedi_tm_imgtosvg();
	inedi_tm_magnific_popup();
	inedi_tm_jarallax();
	inedi_tm_portfolio();
	//inedi_tm_portfolio_animation();
	inedi_tm_totop();
	inedi_tm_totop_myhide();
	inedi_tm_nav_bg_scroll();
	inedi_tm_anchor();
	//inedi_tm_contact_form();
	//inedi_tm_owl_carousel();
    inedi_tm_text_animation();
    inedi_tm_animate_text();
    inedi_tm_animate_text_404();
	//inedi_tm_popupscroll(); nice scroll naher
	inedi_tm_popup_blog();

	
	jQuery(window).on('scroll',function(){
		//e.preventDefault();
		inedi_tm_totop_myhide();
		inedi_tm_nav_bg_scroll();
	});
	
});

// -----------------------------------------------------
// --------------------  FUNCTIONS  --------------------
// -----------------------------------------------------

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function inedi_tm_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// ---------------  HAMBURGER  -------------------------
// -----------------------------------------------------

function inedi_tm_hamburger(){
	
	"use strict";
	
	var hamburger 		= jQuery('.hamburger');
	var mobileMenu		= jQuery('.inedi_tm_mobile_menu_wrap');

	hamburger.on('click',function(){
		var element 	= jQuery(this);
		
		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			mobileMenu.slideUp();
		}else{
			element.addClass('is-active');
			mobileMenu.slideDown();
		}
		return false;
    });

    mobileMenu.on('click', function () {
        var element = jQuery(this);
            hamburger.removeClass('is-active');
            mobileMenu.slideUp();
        return false;

    });
}

// -----------------------------------------------------
// --------------    MAGNIFIC POPUP    -----------------
// -----------------------------------------------------

function inedi_tm_magnific_popup(){
	
	"use strict";
	
	jQuery('.open-popup-link').magnificPopup({
		type:'inline',
		midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});
	
	jQuery('.gallery').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			}
		});
	});
	jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
		
	});
	jQuery('.popup-youtube').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			//type: 'iframe',
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	});
}

// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------

function inedi_tm_jarallax(){
	
	"use strict";
	
	jQuery('.jarallax').each(function(){
		var element			= jQuery(this);
		var	customSpeed		= element.data('speed');
		
		if(customSpeed !== "undefined" && customSpeed !== ""){
			customSpeed = customSpeed;
		}else{
			customSpeed 	= 0.5;
		}
		
		element.jarallax({
			speed: customSpeed
		});
	});
}

// -------------------------------------------------
// -----------------    PORTFOLIO    ---------------
// -------------------------------------------------

// filterable 

function inedi_tm_portfolio(){

	"use strict";

	if(jQuery().isotope) {

		// Needed variables
		var list 		 = jQuery('.inedi_tm_portfolio_list');
		var filter		 = jQuery('.inedi_tm_portfolio_filter');

		if(filter.length){
			// Isotope Filter 
			filter.find('a').on('click', function(){
				var selector = jQuery(this).attr('data-filter');
				list.isotope({ 
					filter				: selector,
					animationOptions	: {
						duration			: 750,
						easing				: 'linear',
						queue				: false
					}
				});
				return false;
			});	

			// Change active element class
			filter.find('a').on('click', function() {
				filter.find('a').removeClass('current');
				jQuery(this).addClass('current');
				return false;
			});	
		}
	}
}

//function inedi_tm_portfolio_animation(){
	
//	"use strict";
	
//	var list			= jQuery('.inedi_tm_portfolio_list > li');
	
//	list.each(function(){
//		var el			= jQuery(this);
//		var el2			= el.find('.list_inner');
//		var image		= el.find('.image_wrap');
//        var definition = el.find('.definition_portfolio');

     

//		var definitionH	= el.find('.definition_portfolio').outerHeight();

       
		
//			el2.on('mouseenter',function(){
//				image.css({top:-definitionH/2});
//				definition.css({marginTop:-definitionH});
//			}).on('mouseleave',function(){
//				image.css({top:0});
//				definition.css({marginTop:0});
//			});
           
        
        
//    });

//}

// -----------------------------------------------------
// --------------------    TOTOP    --------------------
// -----------------------------------------------------

function inedi_tm_totop(){
	
	"use strict";
	
	jQuery(".inedi_tm_to_top_wrap").on('click', function(e) {
		e.preventDefault();		
		jQuery("html, body").animate({ scrollTop: 0 }, 'slow');
		return false;
	});
}

function inedi_tm_totop_myhide(){
	
	"use strict";
	
	var toTop			=jQuery(".inedi_tm_to_top_wrap");
	if(toTop.length){
		var topOffSet 	=toTop.offset().top;
		
		if(topOffSet > 1350){
			toTop.addClass('opened');	
		}else{
			toTop.removeClass('opened');
		}
	}
}

// -----------------------------------------------------
// ------------    NAV BACKGROUND  SCROLL    -----------
// -----------------------------------------------------

function inedi_tm_nav_bg_scroll(){
	
	"use strict";
	
	var header 			= jQuery('.inedi_tm_header');
	var windowScroll	= jQuery(window).scrollTop();
	var W				= jQuery(window).width();
	
	if(W>1040){
		jQuery(window).scroll(function(){
            if(windowScroll >= '100'){
                header.addClass('scroll');
            }
            else{
                header.removeClass('scroll');  
            }
        });
	} 
}

// -----------------------------------------------------
// ------------    ANCHOR NAVIGATION    ----------------
// -----------------------------------------------------

function inedi_tm_anchor(){
	
	"use strict";
	
	jQuery('.anchor_nav').onePageNav();
	
	var scrollOffset = 0;
	
	jQuery(".anchor a").on('click', function(evn){
		evn.preventDefault();
		jQuery('html,body').scrollTo(this.hash, this.hash, {
			gap: { y: -scrollOffset-85 },
			animation:{
				duration: 1500,
				easing: "easeInOutExpo"
			}
		});
		return false;	
	});
}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

function inedi_tm_contact_form(){
	
	"use strict";
	
	jQuery(".contact_form #send_message").on('click', function(){
		
		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var subject 	= jQuery(".contact_form #subject").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||message===''){
			
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {
				
				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}
				
				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}
				
			});
		}
		return false; 
	});
}

// -----------------------------------------------------
// --------------------    OWL CAROUSEL    -------------
// -----------------------------------------------------

//function inedi_tm_owl_carousel(){
	
//	"use strict";
	
//	var carusel2			= jQuery('.inedi_tm_testimonial_wrap .owl-carousel');
//  	carusel2.owlCarousel({
//		loop:true,
//		margin:70,
//		autoplay:7000,
//		autoWidth: false,
//		nav: false,
//		items:3,
//		smartSpeed:5000,
//		responsive:{
//			0:{items:1},
//			480:{items:2},
//			768:{items:3},
//			1040:{items:3},
//			1600:{items:3},
//			1920:{items:3}
//		}
//	});
	
//	var carusel3			= jQuery('.inedi_tm_partners_wrap .owl-carousel');
//  	carusel3.owlCarousel({
//		loop:true,
//		margin:40,
//		autoplay:6000,
//		autoWidth: false,
//		nav: false,
//		items:4,
//		smartSpeed:3000,
//		responsive:{
//			0:{items:1},
//			480:{items:2},
//			768:{items:3},
//			1040:{items:4},
//            1400:{items:5},
//			1600:{items:6},
//			1925:{items:7},
//            2300:{items:8}
//		}
//	});
//}

// -----------------------------------------------------
// --------------------    WOW JS    -------------------
// -----------------------------------------------------

 new WOW().init();

// -----------------------------------------------------
// ---------------    HERO TEXT ANIATION  --------------
// -----------------------------------------------------

function inedi_tm_text_animation(){
	
	"use strict";
	
	var H        			= jQuery(window).height();
	var titleHolder			= jQuery('.inedi_tm_universal_box_wrap .hero_title');
	var titleHeight			= titleHolder.outerHeight();
	var headerHeight		= jQuery('.inedi_tm_header').outerHeight();
	
	var	height				= H/2 + titleHeight/2 - headerHeight;
	
	jQuery(window).on('scroll',function(){
		var window_offset = jQuery(window).scrollTop();
		titleHolder.css({opacity:1 - (window_offset/height), marginTop:(window_offset/height)*200});
	});
}


// -------------------------------------------------
// -------------   ANIMATE TEXT  -------------------
// -------------------------------------------------

function inedi_tm_animate_text_404(){
	
	"use strict";
	
	var animateSpan			= jQuery('.inedi_tm_animation_text_404');
	
		animateSpan.typed({
            strings: ["PAGE NOT FOUND", "CODE: 404"],
			loop: true,
			startDelay: 1e3,
			backDelay: 2e3
		});
}

function inedi_tm_animate_text() {

    "use strict";

    var animateSpan = jQuery('.inedi_tm_animation_text_word');

    animateSpan.typed({
        strings: ["App DEVELOP", "UX Engineering", "UI DESIGNERS"],
        loop: true,
        startDelay: 1e3,
        backDelay: 2e3
    });
}

// -----------------------------------------------------
// -------------------    POPUP BLOG    ----------------
// -----------------------------------------------------

function inedi_tm_popup_blog(){
	"use strict";
	var li				= jQuery('.inedi_tm_list_wrap.blog_list .inner_list');
	var popupBox		= jQuery('#inedi_tm_popup_blog');
	var popupInner		= popupBox.find('.inner_popup');
	var closePopup		= popupBox.find('.close');
	
	li.each(function(){
		var element		= jQuery(this);
		var button		= element.find('.read_more a,.title_holder a,.link_news');
		var html		= element.html();
		var mainImage	= element.find('.news_image');
		var imgData		= mainImage.data('url');
		var title		= element.find('.title_holder h3');
		var titleHref	= element.find('.title_holder h3 a').html();
		
		mainImage.css({backgroundImage: 'url('+imgData+')'});
		button.on('click',function(){
			popupBox.addClass('opened');
			popupInner.html(html);
			mainImage = popupInner.find('.news_image');
			mainImage.css({backgroundImage: 'url('+imgData+')'});
			title = popupInner.find('.title_holder h3');
			title.html(titleHref);
			return false;
		});
	});
	closePopup.on('click',function(){
		popupBox.removeClass('opened');
		popupInner.html('');
		return false;
	});
}

// -----------------------------------------------------
// -------------    BLOG MENU SCROLL -------------------
// -----------------------------------------------------

function inedi_tm_popupscroll(){
	
	"use strict";
	
	var H				= jQuery(window).height();
	var scrollable		= jQuery('.scrollable');
	
	var popupBox		= jQuery('.inedi_tm_popup_blog .inner_popup');
	
	popupBox.css({height:H-100});
	
	scrollable.each(function(){
		var element		= jQuery(this);
		var wH			= jQuery(window).height();
		
		element.css({height: wH-100});
		
		element.niceScroll({
			touchbehavior:false,
			cursorwidth:0,
			autohidemode:true,
			cursorborder:"0px solid #fff"
		});
	});
}
 $(".youtube-bg").mb_YTPlayer();

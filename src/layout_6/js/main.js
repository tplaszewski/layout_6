// jQuery
$(window).load(function() { // makes sure the whole site is loaded
                $('#status').fadeOut(); // will first fade out the loading animation
                $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
                $('body').delay(350).css({'overflow':'visible'});
            });

$(document).ready(function(){
        $('.about').each(function(){              
            var highestBox = 0;
            $('.equal_height .box', this).each(function(){           
                if($(this).height() > highestBox) 
                   highestBox = $(this).height(); 
            });            
            $('.equal_height .box',this).height(highestBox);  
    });    
});


$(document).ready(function(){
    wow = new WOW(
              {
                animateClass: 'animated',
                offset:       100,
                callback:     function(box) {
                  console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
                }
              }
            );
            wow.init();
    
});


jQuery(document).ready(function( $ ) {
                $('.counter').counterUp({
                    delay: 10,
                    time: 1000
                });
            });

window.onload = function () {
            var styles = [ { "featureType": "water", "stylers": [ { "color": "#b0fff8" } ] },{ "featureType": "landscape.man_made", "stylers": [ { "color": "#c9dfa7" } ] },{ "featureType": "landscape.natural", "stylers": [ { "color": "#f0eee5" } ] },{ "featureType": "road", "stylers": [ { "color": "#45c958" } ] },{ "featureType": "poi", "elementType": "geometry", "stylers": [ { "color": "#c9e0a7" } ] },{ "featureType": "administrative", "elementType": "labels.text.stroke", "stylers": [ { "visibility": "on" } ] } ];

        var options = {
            mapTypeControlOptions: {
                mapTypeIds: ['Styled']
            },
            center: new google.maps.LatLng(-7.245217594087794, 112.74455556869509),
            zoom: 6,
            scrollwheel: false,
            disableDefaultUI: true,	
            mapTypeId: 'Styled'
        };
        var div = document.getElementById('map');
        var map = new google.maps.Map(div, options);
        var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
        map.mapTypes.set('Styled', styledMapType);
        }


jQuery(function(){jQuery("img").load(function(){jQuery("#masonry-grid").masonry()}),jQuery("#masonry-grid").masonry({itemSelector:".grid-item",isResizable:"true"})})

 $(document).ready(function() {
                $(".fancybox").fancybox();
            });


$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

$(document).ready(function() { 
    
    
      $("#slider-top").owlCarousel({
        navigation : true,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
      });
  
    $("#slider-testimonials").owlCarousel({     
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
     
  }); 
    
}); 

/*parallax*/
$('.parallax-section').parallax({
                speed : 0.15
            });

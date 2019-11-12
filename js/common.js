$(function() {

$('.hamburger').click(function() {
	$('.header__mob').addClass('active');
})
$('.close').click(function() {
	$('.header__mob').removeClass('active');
})

var scrolled;
$(window).scroll(function(){
	scrolled = $(this).scrollTop() + $(window).height() - 250;
	for (var i = 0; i < $('.animated:not(.visible)').length; i++) {
		if ($($('.animated:not(.visible)')[i]).offset().top <= scrolled) {
			$($('.animated:not(.visible)')[i]).addClass('visible');
		}
	}
})
$(window).trigger('scroll');
$('.header__banner, .contact-section').addClass('visible');

function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
	  center: {lat: 52.334069, lng: 4.856277},
	  zoom: 17,
	  styles: [
	      {
	          "featureType": "administrative",
	          "elementType": "all",
	          "stylers": [
	              {
	                  "saturation": "-100"
	              }
	          ]
	      },
	      {
	          "featureType": "administrative.province",
	          "elementType": "all",
	          "stylers": [
	              {
	                  "visibility": "off"
	              }
	          ]
	      },
	      {
	          "featureType": "landscape",
	          "elementType": "all",
	          "stylers": [
	              {
	                  "saturation": -100
	              },
	              {
	                  "lightness": 65
	              },
	              {
	                  "visibility": "on"
	              }
	          ]
	      },
	      {
	          "featureType": "poi",
	          "elementType": "all",
	          "stylers": [
	              {
	                  "saturation": -100
	              },
	              {
	                  "lightness": "50"
	              },
	              {
	                  "visibility": "simplified"
	              }
	          ]
	      },
	      {
	          "featureType": "road",
	          "elementType": "all",
	          "stylers": [
	              {
	                  "saturation": "-100"
	              }
	          ]
	      },
	      {
	          "featureType": "road.highway",
	          "elementType": "all",
	          "stylers": [
	              {
	                  "visibility": "simplified"
	              }
	          ]
	      },
	      {
	          "featureType": "road.arterial",
	          "elementType": "all",
	          "stylers": [
	              {
	                  "lightness": "30"
	              }
	          ]
	      },
	      {
	          "featureType": "road.local",
	          "elementType": "all",
	          "stylers": [
	              {
	                  "lightness": "40"
	              }
	          ]
	      },
	      {
	          "featureType": "transit",
	          "elementType": "all",
	          "stylers": [
	              {
	                  "saturation": -100
	              },
	              {
	                  "visibility": "simplified"
	              }
	          ]
	      },
	      {
	          "featureType": "water",
	          "elementType": "geometry",
	          "stylers": [
	              {
	                  "hue": "#ffff00"
	              },
	              {
	                  "lightness": -25
	              },
	              {
	                  "saturation": -97
	              }
	          ]
	      },
	      {
	          "featureType": "water",
	          "elementType": "labels",
	          "stylers": [
	              {
	                  "lightness": -25
	              },
	              {
	                  "saturation": -100
	              }
	          ]
	      }
	  ]
	});
    var marker = new google.maps.Marker({
      position: {lat: 52.334069, lng: 4.856277},
      icon: {
      	url: 'https://i.imgur.com/H7GMYm9.png',
		scaledSize: new google.maps.Size(25,38)
      },
      map: map
    });
}
if ($('#map').length) {
	initMap();
}



});

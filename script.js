$(document).ready(function(){


    /* for sticky navigation */
    jQuery(document).ready(function () {
        jQuery('.js--section-features').waypoint(function (direction) {
            if (direction === "down") {
                jQuery('nav').addClass('sticky');
            } else {
                jQuery('nav').removeClass('sticky');
            }
        }, {
            offset: '60px'
        });
    });
    
    
    /* scroll on buttons  */  
    $('.js--scroll-to-meals').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-meals').offset().top}, 1000);
    })
    $('.js--scroll-to-start').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-steps').offset().top}, 1000);
    })
    

    /* Navigation scroll */

    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


    /* Animations on scroll */

$('.js--wp-1').waypoint(function(direction){
    $('.js--wp-1').addClass('animated animate__fadeIn');
}, {
    offset: '50%'
})

$('.js--wp-2').waypoint(function(direction){
    $('.js--wp-2').addClass('animated animate__fadeInUp');
}, {
    offset: '50%'
})

    /* Mobile nav */
$('.js--nav-icon').click(function(){
    var nav = $('.js--main-nav');

    nav.slideToggle(200);
})

    /* Maps */

var map=new GMaps({
  div: '.map',
  lat: 44.9710484,
  lng: 19.6252653,
  zoom: 15
});

map.addMarker({
  lat: 44.9710484,
  lng: 19.6252653,
  title: 'Sremska Mitrovica',
  infoWindow: {
    content: '<p>Limun 3+</p>'
  }
});

});


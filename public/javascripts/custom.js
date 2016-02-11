$(document).ready(function() {

  // --------------------------------------------------------
  //	Collapse Navigation (Mobile) on click
  // -------------------------------------------------------- 	
  $(document).on('click', '.navbar-collapse.in', function(e) {
      if ($(e.target).is('a')) {
          $(this).collapse('hide');
      }
  });

  $(".carousel-caption .rotate").textrotator({
      animation: "fade", // Text Rotator Fade Effect
      speed: 2000 // Text Rotator Fade Speed
  });

  $('.carousel').carousel({
      interval: false, // Carousel Slide Transition Time
      pause: 'hover' // Carousel slider pause on mouse hover
  })

  $(".menu-collapsed").click(function() {
    $(this).toggleClass("menu-expanded");
  });

  $("a[data-gal^='prettyPhoto']").prettyPhoto();
  
});

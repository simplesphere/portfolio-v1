$(document).ready(function() {

  // --------------------------------------------------------
  //	Smooth Scrolling
  // -------------------------------------------------------- 	
  $(".navbar-nav li a[href^='#']").on('click', function(e) {
      e.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
          scrollTop: $(hash).offset().top
      }, 1000, function() {
          window.location.hash = hash;
      });
  });

  // --------------------------------------------------------
  //	Collapse Navigation (Mobile) on click
  // -------------------------------------------------------- 	
  $(document).on('click', '.navbar-collapse.in', function(e) {
      if ($(e.target).is('a')) {
          $(this).collapse('hide');
      }
  });

});

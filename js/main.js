$(document).ready(function () {

  /*============================================
  Navigation Functions
  ==============================================*/
  $(window).scroll(function () {
    if ($(window).scrollTop() === 0) {
      $('#main-nav').removeClass('scrolled');
    } else {
      $('#main-nav').addClass('scrolled');
    }
  });

  $(".about").on('click', function () {
    jumpToAbout()
  });

  $(".portfolio").on('click', function () {
    $('html, body').animate({
      scrollTop: $('#portfolio').offset().top - 50
    }, 800);
  });

  $(".contact").on('click', function () {
    $('html, body').animate({
      scrollTop: $('#contact').offset().top - 50
    }, 800);
  });

  $(".arrow-down").on('click', function () {
    jumpToAbout()
  });

  function jumpToAbout() {
    $('html, body').animate({
      scrollTop: $('#about').offset().top - 50
    }, 800);
  }

  /*============================================
	Back-To-Top Arrow 
  ==============================================*/

  //hide #back-to-top first
  $("#back-to-top").hide();
  //if below 100px screen height, #back-to-top appear
  $(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 160) {
        $("#back-to-top").fadeIn(150);
      } else {
        $("#back-to-top").fadeOut(150);
      }
    });
    $("#back-to-top").on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 300);
    });
  });

  /*============================================
	Form Validation
  ==============================================*/

  (function () {
    'use strict';
    window.addEventListener('load', function () {
      var forms = document.getElementsByClassName('needs-validation');
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

  /*============================================
	Portfolio Filter Functions
  ==============================================*/

  var $grid = $('.portfolio-grid').isotope({
    itemSelector: '.portfolio-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.portfolio-item'
    },
  });

  $('.filter-button-group').on('click', 'button', function () {
    $('#portfolio button').removeClass('active');
    $(this).addClass('active');

    var filterValue = $(this).attr('data-filter');

    $grid.isotope({
      filter: filterValue,
      stagger: 30,
      transitionDuration: '0.5s'
    });
  });


});
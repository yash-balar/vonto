$(document).ready(function(){
    $(".menu").click(function(){
        $(".menu").toggleClass("change");
        $(".menu-item").toggleClass("change");
        $(".menu-bg").toggleClass("change-bg");
        $(".menu-overle").toggleClass("change");
    });
});
var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 1000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});
function visible(partial) {
    var $t = partial,
        $w = jQuery(window),
        viewTop = $w.scrollTop(),
        viewBottom = viewTop + $w.height(),
        _top = $t.offset().top,
        _bottom = _top + $t.height(),
        compareTop = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));

}
// form
$(document).ready(function() {
  $('select').material_select();
  $('.datepicker').pickadate({
    selectMonths: true, 
    selectYears: 15
  });
  $.validator.setDefaults({
    ignore: []
  });
  $("form").validate({
    submitHandler: function(form) {
      console.log(form);
      return;
    },
    errorElement: 'div',
    errorPlacement: function(error, element) {
      var placement = $(element).data('error');
      if (placement) {
        $(placement).append(error)
      } else {
        error.insertAfter(element);
      }
    }
  });

});


// animation
new WOW().init();

// loader
$(window).on('load', function() { // makes sure the whole site is loaded 
  // $('#overlayer').fadeOut();
  $('#overlayer').delay(100).fadeOut('slow');
  $('.loader').delay(100).fadeOut('slow');
  $('#loader-inner').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website. 
});

$(window).scroll(function(){

  if(visible($('.count-digit')))
    {
      if($('.count-digit').hasClass('counter-loaded')) return;
      $('.count-digit').addClass('counter-loaded');
      
$('.count-digit').each(function () {
  var $this = $(this);
  jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
    duration: 1000,
    easing: 'swing',
    step: function () {
      $this.text(Math.ceil(this.Counter));
    }
  });
});
    }
})

// owl carousal
$('.owl-carousel').owlCarousel({
  loop:true,
  center:true,
  slideBy:1,
  rewind:false,
  margin:80,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      768:{
          items:1
      },
      1000:{
          items:1
      }
  }
 
});


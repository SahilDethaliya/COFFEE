$("#banner").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  items: 1,
  animateOut: "animate__zoomOutLeft",
  animateIn: "animate__zoomInRight",
  smartSpeed: 2000,
  mouseDrag: false,
});

$(document).ready(function () {
  new WOW().init();
  var owl = $("#banner");
  owl.owlCarousel();
  owl.on("changed.owl.carousel", function () {
    new WOW().init();
  });
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  items: 1,
  autoplay: true,
  autoplayTimeout: 5000,
});

// counter js
function visible(partial) {
  var $t = partial,
    $w = jQuery(window),
    viewTop = $w.scrollTop(),
    viewBottom = viewTop + $w.height(),
    _top = $t.offset().top,
    _bottom = _top + $t.height(),
    compareTop = partial === true ? _bottom : _top,
    compareBottom = partial === true ? _top : _bottom;

  return (
    compareBottom <= viewBottom && compareTop >= viewTop && $t.is(":visible")
  );
}
$(window).scroll(function () {
  if (visible($(".count-digit"))) {
    if ($(".count-digit").hasClass("counter-loaded")) return;
    $(".count-digit").addClass("counter-loaded");

    $(".count-digit").each(function () {
      var $this = $(this);
      jQuery({ Counter: 0 }).animate(
        { Counter: $this.text() },
        {
          duration: 5000,
          easing: "swing",
          step: function () {
            $this.text(Math.ceil(this.Counter));
          },
        }
      );
    });
  }
});
// loader js
$(document).ready(function () {
  setTimeout(function () {
    // allowing 3 secs to fade out loader
    $("#preloader").fadeOut("slow");
  }, 2000);
});
// header js
$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $(".sticky").addClass("fixed");
  } else {
    $(".sticky").removeClass("fixed");
  }
});

$(document).ready(function () {
  wow = new WOW({
    boxClass: "wow", // default
    animateClass: "animated", // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
  });
  wow.init();
  new WOW().init();
});

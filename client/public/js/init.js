//   /*----------------------------------------------------*/
//   /*	Fade In/Out Primary Navigation
// ------------------------------------------------------*/

$(window).on("scroll", function () {
  var h = $("header").height();
  var y = $(window).scrollTop();
  var nav = $("#nav-wrap");

  if (y > h * 0.2 && y < h && $(window).outerWidth() > 768) {
    nav.fadeOut("fast");
  } else {
    if (y < h * 0.2) {
      nav.removeClass("opaque").fadeIn("fast");
    } else {
      nav.addClass("opaque").fadeIn("fast");
    }
  }
});

$(document).ready(function () {
    $(window).scroll(function () {
        var body = $(this).scrollTop();
        var windowWidth = $(window).width();

        if (windowWidth <= 600) {
            var personalTop = $("#startup").offset().top + $("#startup").outerHeight(true);

            if (body > personalTop) {
                //console.log("if");
                $(".social-accounts").stop().animate({right: '-80px'}, 500, "linear");
            }
            else {
                //console.log("else");
                $(".social-accounts").stop().animate({right: '0px'}, 500, "linear");
            }
        }
    });

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
    });
});

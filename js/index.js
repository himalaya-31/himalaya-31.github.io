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
});

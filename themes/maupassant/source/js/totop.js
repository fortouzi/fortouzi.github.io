$(window).scroll(function () {
    $(window).scrollTop() > 500 ? $("#rocket").addClass("show") : $("#rocket").removeClass("show");
    $(window).scrollTop() > 40 ? $("#sidebar").addClass("fixed") : $("#sidebar").removeClass("fixed");
    // $(window).scrollTop() > 40 ? $("#header").addClass("fixed") : $("#header").removeClass("fixed");
});
$("#rocket").click(function () {
    $("#rocket").addClass("launch");
    $("html, body").animate({
        scrollTop: 0
    }, 500, function () {
        $("#rocket").removeClass("show launch");
    });
    return false;
});
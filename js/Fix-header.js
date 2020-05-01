$(document).ready(function() {
    $("#main-header").removeClass("default");
    $(window).scroll(function() {
        if ($(this).scrollTop() > 20) {
            $("#main-header").addClass("default");
        } else {
            $("#main-header").removeClass("default");
        };
    });
});
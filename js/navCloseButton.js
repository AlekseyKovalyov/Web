/**
 * Created by aleksey on 3/19/17.
 */
$(document).ready(function () {
    $(".nav_close_button").mouseover(function () {
        $("#img_nav_close_reg").fadeOut(500);


        $("#img_nav_close_hover").fadeIn(500);
    })


    $(".nav_close_button").mouseout(function () {
        $("#img_nav_close_reg").fadeIn(500);


        $("#img_nav_close_hover").fadeOut(500);
    })

})








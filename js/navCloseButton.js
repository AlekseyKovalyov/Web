/**
 * Created by aleksey on 3/19/17.
 */
$(document).ready(function () {


    $(".nav_close_button").mouseover(function () {
        $("#img_nav_close_reg").fadeOut(500);
        $("#img_nav_close_hover").fadeIn(500);
    });


    $(".nav_close_button").mouseout(function () {
        $("#img_nav_close_reg").fadeIn(500);
        $("#img_nav_close_hover").fadeOut(500);
    });


    $(".nav_close_button").click(function () {
        $("#navigation_panel").animate({"left": '-=350'}, 1000);
        $("#navigation_open").animate({"left": '+=100'}, 1000);
    });

    $(".nav_open_button").mouseover(function () {
        $("#img_nav_open_reg").fadeOut(500);
        $("#img_nav_open_hover").fadeIn(500);
    });

    $(".nav_open_button").mouseout(function () {
        $("#img_nav_open_reg").fadeIn(500);
        $("#img_nav_open_hover").fadeOut(500);
    });


    $(".nav_open_button").click(function () {
        $("#navigation_panel").animate({"left": '+=350'}, 1000);
        $("#navigation_open").animate({"left": '-=100'}, 1000);
    });


    $(".button").mouseover(function () {
        $(this).animate({"height": '+=6', "width": '+=6'}, 100);
    });

    $(".button").mouseout(function () {
        $(this).animate({"height": '-=6', "width": '-=6'}, 100);
    });


})








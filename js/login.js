/**
 * Created by aleksey on 3/20/17.
 */
$(document).ready(function () {

    $("#submit_login").mouseover(function () {
        $("#submit_login").animate({backgroundColor : "#5f5d5d"}, 200);
        $ ("#submit_login_text").animate({color : "black"}, 200);
    });


    $("#submit_login").mouseout(function () {
        $("#submit_login").animate({backgroundColor : "black"}, 200);
        $ ("#submit_login_text").animate({color : "white"}, 200)
    });
});

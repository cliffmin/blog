/**
 *
 * Created by myself on 2/8/14.
 */

$(document).ready(function () {
    $("#link1").hover(function () {
        var myxOffset = $("#slider").offset().left;
        var myyOffset = $("#slider").offset().top;
        alert(myxOffset + ":" + myyOffset);
    });
});

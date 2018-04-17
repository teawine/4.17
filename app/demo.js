require(["jquery", "love"], function($, love) {
    var arr = [1, 2, 3];
    $.each(arr, function(i, v) {
        console.log(i, v);
    });
    love.fun();
    love.fun2();
})
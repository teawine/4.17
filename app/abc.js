// define("love", ["jquery"], function($) {
//     $("p").css("background", "pink");
// })
define(["jquery"], function($) {
    var fun = function() {
        $("p").css("background", "pink");
    }
    var fun2 = function() {
        $("p").css("border", "solid 2px #000");
    }
    return {
        fun: fun,
        fun2: fun2
    }
})
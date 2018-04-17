require.config({
    baseUrl: "js/app",
    paths: {
        "jquery": "../libs/jquery",
        "zepto": "../js/libs/zepto.js",
        "demo": "demo",
        "love": "abc"
    },
    // shim: {
    //     "love": {
    //         exports: "fun",
    //         deps: ["jquery"]
    //     }
    // }
})
require(["demo"])
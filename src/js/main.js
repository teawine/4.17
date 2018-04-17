require.config({
    baseUrl: "app",
    paths: {
        "jquery": "../libs/jquery",
        "demo": "demo"
    }

});
require(["demo"])
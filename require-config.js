klaviyo.requirejs.config({
    baseUrl: "https://www.klaviyo.com/media/js/lib",
    paths: {
        app: "https://www.klaviyo.com/media/js/app",
        _public: "https://www.klaviyo.com/media/js/public",
        jquery: "jquery.1.7.1",
        learnly: "https://www.klaviyo.com/media/js/app/learnly",
        "jquery.ui": "jquery-ui-1.10.0.custom.app",
        zendesk: "https://www.klaviyo.com/media/js/app/zendesk"
    },
    shim: {
        underscore: {
            deps: ["jquery"],
            exports: "_"
        },
        backbone: {
            deps: ["jquery", "underscore"],
            exports: "Backbone"
        },
        "jquery.bbq": {
            deps: ["jquery"]
        },
        "jquery.form": {
            deps: ["jquery"]
        },
        "jquery.ui": {
            deps: ["jquery"]
        },
        truncate: {
            deps: ["jquery"]
        },
        zendesk: {
            deps: ["jquery"]
        }
    },
    urlArgs: window.KLAVIYO_CACHE_VERSION ?
        "v=" + window.KLAVIYO_CACHE_VERSION : "",
    waitTimeout: 14
});
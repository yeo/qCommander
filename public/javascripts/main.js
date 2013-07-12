require.config({
    baseUrl: "//127.0.0.1/javascripts"
    
    // Libraries
    ,paths: {
        jquery: 'jquery.min',
        bootstrap: 'bootstrap.min',
        'underscore': 'underscore-min',
        'backbone': 'backbone-min',
        buzz: 'buzz',
        parse: 'parse-1.2.0.min',
        'localStorage': 'backbone.localStorage-min',
        firebase: '//cdn.firebase.com/v0/firebase'
    }

    ,shim: {
        '*': { 'jquery': 'jquery-private' },
        'jquery-private': { 'jquery': 'jquery' },

        "jquery": {
            "exports": "$j"
        },

        "underscore": {
            "exports": "_"
        },

        "easing" : {
            // "deps": ["jquery"],
        },

        "bootstrap" : {
            // "deps": ["jquery"],
        },

        "backbone": {
            // Depends on underscore/lodash and jQuery
            "deps": ["underscore"], //, "jquery"],
            // "deps": ["underscore", "jquery"],

            // Exports the global window.Backbone object
            "exports": "Backbone"
        },

        "firebase": {
          "exports": "Firebase"  
        },

        "localStorage" : {
            // Depends on underscore/lodash and jQuery
            "deps": ["backbone"]
        },

        'transform': {
            deps: [
                // 'jquery'
            ]
             //,"exports": "transform"
        },

        'buzz': {
            exports: 'buzz'
        }

        ,worker: {
            exports : 'worker'
        },

        'parse': {
            exports: 'Parse'
        }
    }
})

require(['app'], function (app) {
    console.log('sasa');
    app.init();
})
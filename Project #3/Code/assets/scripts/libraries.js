/*
Modernizr.load([
    {
        load: {
            "bootstrap" : "//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js", 
            "jquery-ui" : "//code.jquery.com/ui/1.11.1/jquery-ui.js"
        },
        callback : {  
            "bootstrap" : function(url, result, key){      
                console.info("bootstrap.min.js loaded...");      
            },
            "jquery-ui" : function(url, result, key){      
                console.info("jquery-ui.js loaded...");
            }
        }
    },
    {
        test: Modernizr.geolocation,
        yep : "geo.js",
        nope: "geo-polyfill.js",
        both: "geo-common.js"
    }
]);
*/
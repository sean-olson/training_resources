
angular.module('myApp', [])
    .directive('counter', function(){
        return{
            restrict: 'A',
            link: function(scope, el, attrs){
                var incr = parseInt(attrs.incr || 1),
                    val = 0;
                el.bind('click', function(){
                    el.html(val += incr);
                });
            }
        };
    });

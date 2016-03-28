(function (app) {

    'use strict';

    // Angular File Upload module does not include this directive
    // Only for example


    /**
    * The ng-thumb directive
    * @author: nerv
    * @version: 0.1.2, 2014-01-09
    */
    app.directive('ngLoadingTriangules', ['$timeout', function ($timeout) {
        return {
            restrict: 'EA',
            templateUrl: 'dist/templates/diretivas/loading-triangules.html',
            scope: {
                config: "=config"
            },
            compile: function (element, attributes) {
                return {
                    pre: function (scope, element, attributes) {
                    },
                    post: function (scope, element, attributes) {
                        scope.$on("loader_show", function () {
                            if(scope.config)
                            if (scope.config.ignorehttpinterceptor) return;                            
                            return element.show();
                        });
                        return scope.$on("loader_hide", function () {
                            if(scope.config)
                            if (scope.config.ignorehttpinterceptor) return;
                            
                            return element.hide();
                        });
                    }
                }
            }
        };
    }]);
})(window.app);
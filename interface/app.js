(function(ng) {
    'use strict';

    var app = ng.module('gamemodule', ['ng'
        , 'ui.router'
        , 'angularFileUpload'
        , 'textAngular'
        , 'angularTypewrite'
    ])
        .factory('ApiInterceptor', function($q, $location) {
            return {
                request: function(config) {
                    config.headers = config.headers || {};

                    return config;
                },

                requestError: function(rejection) {
                    return $q.reject(rejection);
                },

                /* Set Authentication.isAuthenticated to true if 200 received */
                response: function(response) {
                    if (response != null && response.status == 200) {
                    }
                    return response || $q.when(response);
                },

                /* Revoke client authentication if 401 is received */
                responseError: function(rejection) {
                    if (rejection != null && rejection.status === 401) {
                        $location.path("/login");
                    }

                    return $q.reject(rejection);
                }
            };
        })
        .config(function($provide) {
            $provide.decorator('taOptions', ['taRegisterTool', '$delegate', function(taRegisterTool, taOptions) {
                // $delegate is the taOptions we are decorating
                // register the tool with textAngular
                taRegisterTool('colourRed', {
                    iconclass: "fa fa-comment",
                    action: function() {
                        this.$editor().wrapSelection('inserthtml', '<label typewrite type-delay="100" blink-cursor="false" text="This is a directive." ></label>');
                    }
                });
                // add the button to the default toolbar definition
                taOptions.toolbar[1].push('colourRed');
                return taOptions;
            }]);
        })
        .config(function($httpProvider) {
            $httpProvider.interceptors.push('ApiInterceptor');
        }).directive('compile', function ($compile) {
        return function (scope, element, attrs) {
            scope.$watch(
              function (scope) {
                  return scope.$eval(attrs.compile);
              },
              function (value) {               
                  element.html(value);
                  $compile(element.contents())(scope);
              }
            );
        };
    })
        .config(['$compileProvider', function($compileProvider) {
            $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|bludata):/);
        }]);
    window.app = app;

})(window.angular);
(function (ng) {
    'use strict';

    var app = ng.module('gamemodule', ['ng'
    ,'ui.router'
     ,'angularFileUpload'
     ,'textAngular'
     ,'angularTypewrite'
     ])
        .factory('ApiInterceptor', function ($q, $location) {
            return {
                request: function (config) {
                    config.headers = config.headers || {};

                    return config;
                },

                requestError: function (rejection) {
                    return $q.reject(rejection);
                },

                /* Set Authentication.isAuthenticated to true if 200 received */
                response: function (response) {
                    if (response != null && response.status == 200) {
                    }
                    return response || $q.when(response);
                },

                /* Revoke client authentication if 401 is received */
                responseError: function (rejection) {
                    if (rejection != null && rejection.status === 401) {
                        $location.path("/login");
                    }

                    return $q.reject(rejection);
                }
            };
        }).config(function ($httpProvider) {
            $httpProvider.interceptors.push('ApiInterceptor');
        });
    window.app = app;

})(window.angular);
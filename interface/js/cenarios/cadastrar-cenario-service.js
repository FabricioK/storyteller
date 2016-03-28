; (function (ng, app) {
    "use strict";

    app.factory("personagenService", personagenService);
    personagenService.$inject = ['$http']
    function personagenService($http) {
        return {
            listar: function (login) {
                return $http({url :'/api/personagens'
                ,method:'GET'
                });
            },cadastrarlogin : function (login) {
                return $http({url :'/api/signup'
                ,method:'POST',
                data: login});
            }
        }
    }
})(window.angular, window.app);
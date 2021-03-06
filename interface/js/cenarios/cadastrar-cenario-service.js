; (function (ng, app) {
    "use strict";

    app.factory("cenarioService", cenarioService);
    cenarioService.$inject = ['$http']
    function cenarioService($http) {
        return {
            listar: function (login) {
                return $http({url :'/api/cenarios'
                ,method:'GET'
                });
            },cadastrar : function (login) {
                return $http({url :'/api/cenarios'
                ,method:'POST',
                data: login});
            }
        }
    }
})(window.angular, window.app);
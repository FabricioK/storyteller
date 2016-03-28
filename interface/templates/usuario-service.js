; (function (ng, app) {
    "use strict";

    app.factory("usuarioService", usuarioService);
    usuarioService.$inject = ['$http']
    function usuarioService($http) {
        return {
            logar: function (login) {
                return $http({url :'/api/login'
                ,method:'POST',
                data: login});
            },cadastrarlogin : function (login) {
                return $http({url :'/api/signup'
                ,method:'POST',
                data: login});
            }
        }
    }
})(window.angular, window.app);
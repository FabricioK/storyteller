; (function (ng, app) {
    "use strict";

    app.factory("mensagensService", mensagensService);
    mensagensService.$inject = ['$http']
    function mensagensService($http) {
        return {
            lista: function () {
                return $http.get('/api/contato');
            }
        }
    }
}
    )(window.angular, window.app);

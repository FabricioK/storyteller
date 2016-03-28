; (function (ng, app) {
    "use strict";

    app.factory("headerService", headerService);
    headerService.$inject = ['$http']
    function headerService($http) {
        return {
            lista: function () {
                return $http.get('/api/contato');
            }
        }
    }
}
    )(window.angular, window.app);

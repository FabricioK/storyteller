; (function (ng, app) {
    "use strict";

    app.factory("perguntasService", perguntasService);
    perguntasService.$inject = ['$http']
    function perguntasService($http) {
        return {
            listar: function (login) {
                return $http({url :'/api/perguntas'
                ,method:'GET'
                });
            },cadastrar : function (login) {
                return $http({url :'/api/perguntas'
                ,method:'POST',
                data: login});
            }
        }
    }
})(window.angular, window.app);
; (function (ng, app) {
    "use strict";

    app.factory("questsService", questsService);
    questsService.$inject = ['$http']
    function questsService($http) {
        return {
            listar: function (login) {
                return $http({url :'/api/quests'
                ,method:'GET'
                });
            },cadastrar : function (login) {
                return $http({url :'/api/quests'
                ,method:'POST',
                data: login});
            }
        }
    }
})(window.angular, window.app);
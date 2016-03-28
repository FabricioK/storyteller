; (function (ng, app) {
    "use strict";

    app.factory("agendasService", agendasService);
    agendasService.$inject = ['$http']
    function agendasService($http) {
        return {
            lista: function () {
                return $http.get('/api/agendas');
            }, listaimagens: function (pagina, max) {
                console.log(pagina)
                var params = "";
                if (pagina != "" && pagina)
                    params = params + "page=" + pagina + "&";
                if (max != "" && max)
                    params = params + "max=" + max + "&";
                return $http.get('/api/upload?' + params);
            },
            create: function (post) {
                return $http.post('/api/agendas', post);
            }
        }
    }
}
    )(window.angular, window.app);

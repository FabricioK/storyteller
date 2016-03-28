; (function (ng, app) {
    "use strict";

    app.factory("novidadesService", novidadesService);
    novidadesService.$inject = ['$http']
    function novidadesService($http) {
        return {
            lista: function () {
                return $http.get('/api/novidades');
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
                return $http.post('/api/novidades', post);
            }
        }
    }
}
    )(window.angular, window.app);

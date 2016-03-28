; (function (ng, app) {
    "use strict";

    app.factory("footerService", footerService);
    footerService.$inject = ['$http']
    function footerService($http) {
        return {
            lista: function () {
                return $http.get('/api/footer');
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
                return $http.post('/api/footer', post);
            }
        }
    }
}
    )(window.angular, window.app);

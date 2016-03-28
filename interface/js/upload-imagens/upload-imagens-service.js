; (function (ng, app) {
    "use strict";

    app.factory("uploadImagensService", uploadImagensService);
    uploadImagensService.$inject = ['$http']
    function uploadImagensService($http) {
        return {
            upload: function (model) {
                return $http.post('/api/upload',model);
            }
        }
    }
})(window.angular, window.app);

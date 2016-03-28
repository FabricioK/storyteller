(function (app) {

    'use strict';

    app.controller("novidadesController", novidadesController);
    novidadesController.$inject = ['$scope', '$rootScope', '$stateParams', 'novidadesService']
    function novidadesController($scope, $rootScope, $stateParams, novidadesService) {
        $scope.lista = [];
        novidadesService.lista().then(
            function (response) {
                $scope.lista = response.data;
            },
            function (response) {
                console.log('false');
            });
    };
})(window.app);
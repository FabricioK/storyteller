(function (app) {

    'use strict';

    app.controller("mensagensController", mensagensController);
    mensagensController.$inject = ['$scope', '$rootScope', '$stateParams', 'mensagensService']
    function mensagensController($scope, $rootScope, $stateParams, mensagensService) {
        mensagensService.lista().then(
            function (response) {
                $scope.lista = response.data;
            },
            function (response) {
                console.log('false');
            });
    };
})(window.app);
(function (app) {

    'use strict';

    app.controller("personagensController", personagensController);
    personagensController.$inject = ['$scope', '$rootScope', '$stateParams','$location', 'personagenService']
    function personagensController($scope, $rootScope, $stateParams, $location, personagenService) {
        $scope.listar = function () {
            var model = {               
            };
            personagenService.listar(model).then(
                function (response) {
                     $scope.listapersonagens = response.data;
                },
                function (response) {
               
                });
        }
        $scope.cadastrar = function () {
            var model = {
                nome : $scope.nome
            };
            personagenService.cadastrar
            (model).then(
                function (response) {
                    $scope.listar();
                },
                function (response) {
                    
                });
        }
        
        $scope.listar();
    };
})(window.app);
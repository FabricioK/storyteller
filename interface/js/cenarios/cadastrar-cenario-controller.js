(function (app) {

    'use strict';

    app.controller("personagensController", personagensController);
    personagensController.$inject = ['$scope', '$rootScope', '$stateParams','$location', 'cenarioService']
    function personagensController($scope, $rootScope, $stateParams, $location, cenarioService) {
        $scope.listar = function () {
            var model = {               
            };
            cenarioService.listar(model).then(
                function (response) {
                    
                },
                function (response) {
               
                });
        }
        $scope.cadastrarlogin = function () {
            var model = {
                nome : $scope.nome,
                content : $scope.content
            };
            cenarioService.cadastrar
            (model).then(
                function (response) {
                   
                },
                function (response) {
                    
                });
        }
    };
})(window.app);
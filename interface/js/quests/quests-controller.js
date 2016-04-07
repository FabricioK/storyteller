(function (app) {

    'use strict';

    app.controller("questsController", questsController);
    questsController.$inject = ['$scope', '$rootScope', '$stateParams','$location','cenarioService', 'questsService']
    function questsController($scope, $rootScope, $stateParams, $location, cenarioService, questsService)
    {    
        $scope.preview = false;

        $scope.delay = 100;

        $scope.callpreview = function() {
            $scope.preview = !$scope.preview;
        }

        $scope.listarCenarios = function () {
            var model = {

            };

            cenarioService
                .listar(model)
                .then(
                function (response) {
                    
                },null);
        }

        $scope.listarQuests = function () {
            var model = {

            };

            questsService
                .listar(model)
                .then(
                function (response) {
                    $scope.listaquests = response.data;
                },null);
        }

        $scope.cadastrar = function () {
            var model =  {
                nome: $scope.nome,
                cenario_id: $scope.cenario_id,
                content: $scope.html,
                exp: $scope.exp
            };

            questsService
                .cadastrar(model)
                .then(
                function (response) {
                    
                },
                function (response) {
                    
                });
        }
    };
})(window.app);
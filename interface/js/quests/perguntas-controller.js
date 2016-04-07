(function (app) {

    'use strict';

    app.controller("perguntasController", perguntasController);
    perguntasController.$inject = ['$scope', '$rootScope', '$stateParams','$location','questsService', 'perguntasService']
    function perguntasController($scope, $rootScope, $stateParams, $location, questsService, perguntasService)
    {    
        $scope.listarQuests = listarQuests;
        $scope.cadastrar =cadastrar;
        $scope.listarQuests();
        function listarQuests() {
            var model = {

            };

            questsService
                .listar(model)
                .then(
                function (response) {
                    $scope.listaquests = response.data;
                     $scope.quest = $scope.listaquests[0]._id;
                },null);
        }

         function cadastrar() {
            var model =  {
                npc: $scope.npc,
                quest: $scope.quest,
                content: $scope.content,
                requerItem: $scope.requerItem,
                recolheItem: $scope.recolheItem,
                requerInfo : $scope.requerInfo,
                recolheInfo : $scope.recolheInfo
            };
            
            perguntasService
                .cadastrar(model)
                .then(
                function (response) {
                    
                },
                function (response) {
                    
                });
        }
    };
})(window.app);
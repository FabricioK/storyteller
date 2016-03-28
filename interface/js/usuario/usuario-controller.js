(function (app) {

    'use strict';

    app.controller("usuarioController", usuarioController);
    usuarioController.$inject = ['$scope', '$rootScope', '$stateParams','$location', 'usuarioService']
    function usuarioController($scope, $rootScope, $stateParams, $location, usuarioService) {
        $scope.efetualogin = function () {
            var model = {
                email : $scope.usuario
                , password : $scope.senha
            }
            usuarioService.logar(model).then(
                function (response) {
                    $location.path('/bemvindo')
                },
                function (response) {
                   $location.path('/login')
                });
        }
        $scope.cadastrarlogin = function () {
            var model = {
                email : $scope.usuario
                , password : $scope.senha
                , username : $scope.nome
            }
            usuarioService.cadastrarlogin
            (model).then(
                function (response) {
                    $location.path('/bemvindo')
                },
                function (response) {
                      $location.path('/login')
                });
        }
    };
})(window.app);
(function (app) {

    'use strict';

    app.controller("agendasController", agendasController);
    agendasController.$inject = ['$scope', '$rootScope', '$stateParams', 'agendasService']
    function agendasController($scope, $rootScope, $stateParams, agendasService) {
        $scope.configuracao = {
            h4: "carregando informações.",
            hstyle: { 'text-align': 'center' }
           
        }

        agendasService.lista().then(
            function (response) {
                $scope.agendas = response.data;
            },
            function (response) {
                console.log('false');
            });
    };
})(window.app);
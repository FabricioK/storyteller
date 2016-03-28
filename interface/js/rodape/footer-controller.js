(function (app) {

    'use strict';

    app.controller("footerController", footerController);
    footerController.$inject = ['$scope', '$rootScope', '$stateParams', 'footerService']
    function footerController($scope, $rootScope, $stateParams, footerService) {
        $scope.configuracao = {
            h4: "carregando informações.",
            hstyle: { 'text-align': 'center' }
           
        }

        footerService.lista().then(
            function (response) {
                $scope.agendas = response.data;
            },
            function (response) {
                console.log('false');
            });
    };
})(window.app);
(function (app) {

    'use strict';

    app.controller("bemvindoController", bemvindoController);
    bemvindoController.$inject = ['$scope', '$rootScope', '$stateParams']
    function bemvindoController($scope, $rootScope, $stateParams) {
        $scope.configuracao = {
            h4: "carregando informações.",
            hstyle : {'text-align' : 'center'}
        }
    };
})(window.app);
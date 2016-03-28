(function (app) {

    'use strict';

    app.controller("cadastrarNovidadesController", cadastrarNovidadesController);
    cadastrarNovidadesController.$inject = ['$scope', '$rootScope', '$stateParams', 'novidadesService']
    function cadastrarNovidadesController($scope, $rootScope, $stateParams, novidadesService) {
        $scope.pageControl = {
            pageAtual: 0,
            pageTotal: 0,
            searchFunction: $scope.paginar,
            maxpag: 15,
            totalItens: 0,
            showporpagina: true
        }
        $scope.paginar = function (pagina, max) {
            if (pagina > 0 && max > 0) {
                novidadesService
                    .listaimagens(pagina, max)
                    .then(function (response) {
                        $scope.pageControl = {
                            pageAtual: response.data.PaginaAtual,
                            pageTotal: response.data.TotalPaginas,
                            searchFunction: $scope.paginar,
                            maxpag: max,
                            totalItens: response.data.TotalItens,
                            showporpagina: true
                        }
                        if (response.data.Itens) {
                            $scope.listaimagens = response.data.Itens;
                        }
                    }, null);
            }
        }
        $scope.paginar(1, 10);
        
        $scope.enviar = function () {
            var post = {
                title: $scope.title,
                content: $scope.content
            };
            novidadesService.create(post).then(
                function (response) {
                    $scope.agendas = response.data;
                },
                function (response) {
                    console.log('false');
                });
        }
    };
})(window.app);
(function (app) {

    'use strict';

    app.controller("cadastrarFooterController", cadastrarFooterController);
    cadastrarFooterController.$inject = ['$scope', '$rootScope', '$stateParams', 'footerService']
    function cadastrarFooterController($scope, $rootScope, $stateParams, footerService) {
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
                footerService
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
        $scope.showurl = function (imagem) {
            alert('/api/getimage/' + imagem.filename);
        }
        $scope.enviar = function () {
            var post = {
                title: $scope.title,
                content: $scope.content
            };
            footerService.create(post).then(
                function (response) {
                    $scope.agendas = response.data;
                },
                function (response) {
                    console.log('false');
                });
        }
    };
})(window.app);
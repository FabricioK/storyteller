(function (app) {

    'use strict';

    // Angular File Upload module does not include this directive
    // Only for example


    /**
    * The ng-thumb directive
    * @author: nerv
    * @version: 0.1.2, 2014-01-09
    */
    app.directive('angularPaginator', function () {
        return {
            transclude: true,
            restrict: 'E',
            template: '<div  ng-show="model.pageTotal > 0 && model.showporpagina" class="linksPaginacao" style="margin-left: 10px;">' +
            '    <span ng-repeat="i in pagesArray" >' +
            '        <a style="cursor: pointer;" ng-click="pesquisarPaginado(i)" ng-style="model.pageAtual == i && { color: \'blue\' } || { color: \'black\' }" >{{i}}</a>' +
            '    </span>' +
            ' <div  ng-show="model.pageTotal > 0 && model.showporpagina" style="float:right; margin-right: 10px;">Mostrando <input type=number max="{{model.totalItens}}" ng-model="model.maxpag" ng-style="{ \'width\' : width }" ng-change="pesquisarPaginado(1)"> de {{model.totalItens}}</div>' +
            '</div>',
            require: 'ngModel',
            scope: {
                model: '=ngModel'
            },
            link: function (scope) {
                scope.width = '30px;';
                scope.pagesArray = [];

                scope.$watch('model', function () {

                    if (scope.model) {

                        if (scope.model.maxpag) {
                            scope.width = (30 + (scope.model.maxpag.toString().length * 8)) + 'px';

                            scope.model.maxpag = (scope.model.maxpag > scope.model.totalItens) ? scope.model.totalItens : scope.model.maxpag;
                        } else {
                            scope.model.maxpag = scope.model.totalItens;
                        }
                        scope.pagesArray = getPagesArray(scope.model.pageAtual, scope.model.pageTotal);
                    }
                });
                scope.pesquisarPaginado = function (page) {
                    scope.pageAtual = page || 1;

                    if (scope.model && scope.model.searchFunction) {
                        scope.model.searchFunction(page, scope.model.maxpag);
                    }
                };
            }
        }
    });


    function getPagesArray(paginaAtual, paginasTotal) {

        var array = new Array();

        if (paginasTotal < 1 || !paginasTotal || !paginaAtual)
            return array;

        var atualSub1 = (paginaAtual - 1) > 1 ? paginaAtual - 1 : 1;
        var atualSub2 = (paginaAtual - 2) > 1 ? paginaAtual - 2 : 1;
        var atualSum1 = (paginaAtual + 1) < paginasTotal ? paginaAtual + 1 : paginasTotal;
        var atualSum2 = (paginaAtual + 2) < paginasTotal ? paginaAtual + 2 : paginasTotal;

        var newArray = new Array(1, atualSub2, atualSub1, paginaAtual, atualSum1, atualSum2, paginasTotal);

        angular.forEach(newArray, function (item) {
            if (array.indexOf(item) == -1)
                array.push(item);
        });
        return array;
    }
})(window.app);
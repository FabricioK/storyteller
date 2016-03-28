(function (app) {

    'use strict';

    app.controller("headerController", headerController);
    headerController.$inject = ['$scope', '$rootScope', '$stateParams', 'headerService']
    function headerController($scope, $rootScope, $stateParams, headerService) {
        $scope.categories = [
                    {
                        title: 'Mensagens',
                        class: 'nav-second-level',
                        icon: 'fa-envelope-o',
                        href :'#/mensagens'                         
                    },{
                        title: 'Upload de Imagens',
                        class: 'nav-second-level',
                        icon: 'fa-picture-o',
                        href :'#/upload'                         
                    },{
                        title: 'Conta',
                        class: 'nav-second-level',
                        categories: [
                            {
                                class: '',
                                title: 'Personagens',
                                href :'#/personagens'   
                            },

                            {
                                class: '',
                                title: 'Nova Novidade',
                                href: '#/nova-novidade'
                            }
                        ]
                    }
                ];
        headerService.lista().then(
            function (response) {
                $scope.lista = response.data;
                
            },
            function (response) {
                console.log('false');
            });
    };
})(window.app);
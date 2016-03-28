(function (appadmin) {

    'use strict';
    appadmin.factory('httpInterceptor',
        function ($q, $rootScope, $log) {
            var numLoadings = 0;

            return {
                request: function (config) {

                    numLoadings++;

                    // Show loader
                    $rootScope.$broadcast("loader_show");
                    return config || $q.when(config)

                },
                response: function (response) {

                    if ((--numLoadings) === 0) {
                        // Hide loader
                        $rootScope.$broadcast("loader_hide");
                    }

                    return response || $q.when(response);

                },
                responseError: function (response) {

                    if (!(--numLoadings)) {
                        // Hide loader
                        $rootScope.$broadcast("loader_hide");
                    }

                    return $q.reject(response);
                }
            };
        })
        .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
            $httpProvider.interceptors.push('httpInterceptor');
            $urlRouterProvider.otherwise('/bemvindo');

            $stateProvider
            // HOME STATES AND NESTED VIEWS ========================================
                .state('mensagens', {
                    url: '/mensagens',
                    templateUrl: 'dist/templates/mensagens.html',
                    controller: 'mensagensController'

                })
            // Sign up ========================================
                .state('bemvindo', {
                    url: '/bemvindo',
                    templateUrl: 'dist/templates/bemvindo.html',
                    controller: 'bemvindoController'
                })
            // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
                .state('novidades', {
                    url: '/novidades',
                    templateUrl: 'dist/templates/novidades.html',
                    controller: 'novidadesController'
                })
                .state('agendas', {
                    url: '/agendas',
                    templateUrl: 'dist/templates/agendas.html',
                    controller: 'agendasController'
                }).state('footer', {
                    url: '/footer',
                    templateUrl: 'dist/templates/rodape.html',
                    controller: 'footerController'
                }).state('cadastrarnovidade', {
                    url: '/nova-novidade',
                    templateUrl: 'dist/templates/cadastrar-novidade.html',
                    controller: 'cadastrarNovidadesController'
                }).state('cadastraragenda', {
                    url: '/nova-agenda',
                    templateUrl: 'dist/templates/cadastrar-agenda.html',
                    controller: 'cadastrarAgendasController'
                })
                .state('personagens', {
                    url: '/personagens',
                    templateUrl: 'dist/templates/personagem/cadastrar-personagem.html',
                    controller: 'personagensController'
                })
                .state('quests', {
                    url: '/quests',
                    templateUrl: 'dist/templates/quests/cadastrar-quests.html',
                    controller: 'questsController'
                })
                .state('login', {
                    url: '/login',
                    templateUrl: 'dist/templates/login.html',
                    controller: 'usuarioController'
                })
                .state('signup', {
                    url: '/signup',
                    templateUrl: 'dist/templates/signup.html',
                    controller: 'usuarioController'
                })
                .state('upload', {
                    url: '/upload',
                    templateUrl: 'dist/templates/upload-imagem.html',
                    controller: 'uploadImagensController'
                });
        });

})(window.app);

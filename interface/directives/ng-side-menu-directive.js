(function (app) {

    'use strict';

    // Angular File Upload module does not include this directive
    // Only for example


    /**
    * The ng-thumb directive
    * @author: nerv
    * @version: 0.1.2, 2014-01-09
    */
    app.directive('ngSideMenu', ['$timeout', function ($timeout) {

        return {
            restrict: 'EA',
            templateUrl: 'dist/templates/diretivas/side-menu.html',
            scope: {
                categories: '=categories'
            },
            replace: true,
            compile: function (element, attributes) {
                return {
                    pre: function (scope, element, attributes) {

                    },
                    post: function (scope, element, attributes) {
                        $timeout(function () {
                            $('#side-menu').metisMenu();
                        }, 1500)

                        var url = window.location;
                        var elements = $('ul.nav a').filter(function () {
                            return this.href == url || url.href.indexOf(this.href) == 0;
                        }).addClass('active').parent().parent().addClass('in').parent();
                        if (elements.is('li')) {
                            elements.addClass('active');
                        }
                    }
                }
            }
        };
    }]);
})(window.app);
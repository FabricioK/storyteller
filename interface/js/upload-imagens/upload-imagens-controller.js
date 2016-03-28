(function (app) {

    'use strict';

    app.controller("uploadImagensController", uploadImagensController);
    uploadImagensController.$inject = ['$scope', '$rootScope', '$stateParams', 'FileUploader', 'uploadImagensService']
    function uploadImagensController($scope, $rootScope, $stateParams, FileUploader, uploadImagensService) {
        var uploader = $scope.uploader = new FileUploader({
            url: '/api/upload'
            , arrayKey: '', // default is '[i]'           
        });

        uploader.filters.push({
            name: 'imageFilter',
            fn: function (item /*{File|FileLikeObject}*/, options) {
                var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }
        });
    };
})(window.app);
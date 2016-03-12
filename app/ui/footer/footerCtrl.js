'use strict';

appmain.controller('FooterController', ['$scope', '$window', function ($scope, $window) {
    $scope.scrollBodyToTop = function () {
        $window.scrollTo(0, 0);
    }
    

}]);

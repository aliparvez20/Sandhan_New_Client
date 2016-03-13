'use strict';

appmain.controller('IndexController', ['$scope', '$location', 'PubNub', function ($scope, $location, PubNub) {

    $scope.contact = function () {
        $location.path("/contact");
    }

    $scope.home = function () {
        $location.path("/home");
    }

    $scope.service = function () {
        $location.path("/service");
    }

    $scope.about = function () {
        $location.path("/about");
    }

    $scope.publish = function () {
        PubNub.ngPublish({
            channel: $scope.selectedChannel,
            message: $scope.newMessage
        });
    };

    $scope.subscribe = function () {

        PubNub.ngSubscribe({ channel: theChannel })

        $rootScope.$on(PubNub.ngMsgEv(theChannel), function (event, payload) {
            // payload contains message, channel, env...
            console.log('got a message event:', payload);
        })
    }


}]);
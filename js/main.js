var main = angular.module('main', []);

main.controller('mainController', function ($scope, postService) {
    "use strict";
    $scope.questionData = {
        userName: 'Гость',
        text: '',
        date: ''
    };

    $scope.answerText = '';

    $scope.SendQuestion = function () {
        $scope.questionData.date = new Date().toJSON().slice(0, 19).replace('T', ' ');
        postService.SendQuestion($scope.questionData).then(function (response) {
            $scope.answerText = response;
        }, function (err) {
            $scope.answerText = err;
        });
    };
});

angular.module('myApp', [])
    .controller('TodoCtrl', function($scope) {
        $scope.totalTodos = 10;
        
        // initialize with some existing todos
        $scope.todos = [
            { text: 'Buy cat food', done: false },
            { text: 'Eat candy', done: false }
        ];
    });

function MyCtrl($scope) {
  $scope.value = 1;

  $scope.incrementValue = function(value2) {
    $scope.value += value2;
  };
}
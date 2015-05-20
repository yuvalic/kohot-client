define(['app', 'services/services', 'directives/directives'], function (app) {
  
  app
    .controller('PlayerController', function ($scope, Players) {
      $scope.players = Players;
    })
    .controller('ModalInstanceCtrl', function ($scope, $modalInstance) {

      $scope.ok = function () {
        $modalInstance.close();
      };

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    });
});
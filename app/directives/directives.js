define(['app'], function (app) {
  app.directive('koPlayer', function ($timeout,$modal) {

    function link(scope, element, attrs,modal) {
      var playerInfo = scope.player;

      playerInfo.dynamic = 0;

      scope.revealTotalScore = function () {
        if (playerInfo.totalScore > 85) {
          type = 'success';
        } else if (playerInfo.totalScore > 75) {
          type = 'info';
        } else if (playerInfo.totalScore > 50) {
          type = 'warning';
        } else {
          type = 'danger';
        }
        scope.dynamic = playerInfo.totalScore;
        scope.type = type;
      };

      scope.editPlayer = function(size){

        var modalInstance = $modal.open({
          animation: false,
          scope : scope,
          templateUrl: 'playerModal.html',
          controller: 'ModalInstanceCtrl',
          size: size,
          resolve: {
          }

        });
      };

    };

    return {
      restrict: 'EC',
      scope: {
        player: '='
      },
      link: link,
      //templateUrl: 'templates/directives/grid-player.html',
      templateUrl: function(elem, attr){
        return 'templates/directives/'+attr.type+'-player.html';
      }
    };
  });
});
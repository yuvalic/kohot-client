angular.module('kohotApp.directives', [])

.directive('koPlayer', function($timeout) {

	function link(scope, element, attrs) {
		var 
			playerInfo         = scope.player

		;
		playerInfo.dynamic = 0;

		scope.revealTotalScore = function(){
			if (playerInfo.totalScore > 85) {
		      type = 'success';
		    } else if (playerInfo.totalScore >75) {
		      type = 'info';
		    } else if (playerInfo.totalScore > 50) {
		      type = 'warning';
		    } else {
		      type = 'danger';
		    }		
	   		scope.dynamic = playerInfo.totalScore;
	   		scope.type = type; 	
		};
  	}

	return {
		restrict: 'E',
		link: link,
		scope: {
			player: '='
		},
		templateUrl: 'templates/directives/grid-player.html',
	};
});
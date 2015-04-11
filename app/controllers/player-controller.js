angular.module("kohotApp.playerController", ["kohotApp.controllers"] )

.controller('PlayerController', function ($scope,Players){

	$scope.players = Players;

})
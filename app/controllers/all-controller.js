var app = angular.module("kohotApp.controllers", ["ngRoute",'ui.bootstrap', 'kohotApp.directives']);

app.controller('AllController', function ($scope,Players){
	$scope.players = Players;
})
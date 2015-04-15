define([
  'angularAMD',
  'angular-route',
  'ui-bootstrap',
  'ui-bootstrap-tpls'
],
  function (angularAMD) {
    var app = angular.module('kohotApp', ['ngRoute','ui.bootstrap']);
    
    app.config(function($routeProvider){
      $routeProvider.when("/", angularAMD.route({
        controller:'PlayerController',
        controllerUrl: 'controllers/controllers',
        templateUrl: 'templates/homePage.html'
      }))
    });

    return angularAMD.bootstrap(app);
  });
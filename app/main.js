
require.config({
  baseUrl: "app",
  paths: {
    'angular': '../lib/angular/angular.min',
    'angular-route': '../lib/angular-route/angular-route.min',
    'angularAMD': '../lib/angularAMD/angularAMD.min',
    'ui-bootstrap': '../lib/angular-bootstrap/ui-bootstrap.min',
    'ui-bootstrap-tpls': '../lib/angular-bootstrap/ui-bootstrap-tpls.min'
  },
  shim: {
    'angularAMD': ['angular'], 
    'angular-route': ['angular'], 
    'ui-bootstrap-tpls':['angular'],     
    'ui-bootstrap':['ui-bootstrap-tpls'] 
         },
  deps:['app']
});
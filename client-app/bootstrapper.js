(function (factory) {
  define(['angular', 'app'], factory);
}(function (angular, app) {
  function bootstrapApp(document) {
    angular.bootstrap(document, [app.name]);
  }

  return bootstrapApp;
}));

(function (factory) {
  define(['app'], factory);
}(function (app) {
  function HelloWorldController($log) {
    var viewModel = this;

    this.message = 'Hello World';
  }

  app.controller('HelloWorldController', [
    '$log',
    HelloWorldController
  ]);
}));

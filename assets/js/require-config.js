(function (root, factory) {
  factory(root, root.require);
}(this, function (root, require) {
  require.config({
    baseUrl: '../client-app',
    paths: {
      "sails": "../js/dependencies/sails.io",
      "socketio": "../js/dependencies/socket.io",
      "angular": "../js/angular",
      "jquery": "../js/dependencies/jquery.min",
      "polyfills": "../js/polyfills.bundle",
      "vendor": "../js/vendor.bundle",
      "main": "../js/main.bundle"
    },
    shim: {
      'jquery': {
        exports: '$'
      },
      'angular': {
        exports: 'angular',

      },
      "vendor": {
        deps: ['polyfills']
      }
    }
  });

  require(['sails', 'socketio', './app', './helloWorldController', 'polyfills'], function (sails, io, app, hwCtrl, polyfills) {
    require(['vendor'], function (vendor) {
      require(['main'], function (main) {
        console.log(app);
        console.log(main);
         main.default().bootstrapModule(main.mainModule).then(function(mainModule){
          console.log(mainModule.ngDoBootstrap);
          mainModule.instance.upgrade.bootstrap(document.body, ['MyApp']);
        })
      });
    });

  });
}))

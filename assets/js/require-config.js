(function (root, factory) {
  factory(root.require);
}(this, function (require) {
  require.config({
    baseUrl: '../client-app',
    paths: {
      "sails": "../js/dependencies/sails.io",
      "socketio": "../js/dependencies/socket.io",
      "angular": "../js/angular",
      "jquery": "../js/dist/jquery"
    },
    shim: {
      'angular': {
        exports:'angular'
      }
    }
  });

  require(['sails', 'socketio', './app'], function(sails, io, app) {
    console.log('asdf');
  });
}))

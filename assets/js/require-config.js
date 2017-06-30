(function (root, factory) {
  factory(root, root.require);
}(this, function (root, require) {
  require.config({
    baseUrl: '../client-app',
    paths: {
      "sails": "../js/dependencies/sails.io",
      "socketio": "../js/dependencies/socket.io",
      "angular": "../js/angular",
      "jquery": "../js/dependencies/jquery.min"
    },
    shim: {
      'jquery': {
        exports: '$'
      },
      'angular': {
        exports: 'angular',

      }
    }
  });

  require(['sails', 'socketio', './bootstrapper', './helloWorldController'], function (sails, io, bootstrapper) {
    if (root.document) {
      bootstrapper(root.document);
    }
  });
}))

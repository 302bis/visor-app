(function() {
  'use strict';

  angular
    .module('booot')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html'
      });

    $stateProvider
      .state('credit', {
        url: '/credit',
        templateUrl: 'app/credit/credit.html'
      });
    $stateProvider
      .state('performance', {
        url: '/performance',
        templateUrl: 'app/performance/performance.html'
      });
    $stateProvider
      .state('profit', {
        url: '/profit',
        templateUrl: 'app/profit/profit.html'
      });
    $stateProvider
      .state('paybook', {
        url: '/paybook',
        templateUrl: 'app/paybook/paybook.html'
      });
    $stateProvider
      .state('mispagos', {
        url: '/mispagos',
        templateUrl: 'app/mispagos/mispagos.html'
      });
    $stateProvider
      .state('misclientes', {
        url: '/misclientes',
        templateUrl: 'app/misclientes/misclientes.html'
      });
    $stateProvider
      .state('perfilcrediticio', {
        url: '/perfilcrediticio',
        templateUrl: 'app/perfilcrediticio/perfilcrediticio.html'
      });
    $stateProvider
      .state('homepyme', {
        url: '/homepyme',
        templateUrl: 'app/home/home.html'
      });
    $stateProvider
      .state('ciec_form', {
        url: '/ciec_form',
        templateUrl: 'app/ciec_form/ciec_form.html'
      });
    $stateProvider
      .state('amex', {
        url: '/amex',
        templateUrl: 'app/amex/amex.html'
      });
    $stateProvider
      .state('dispo', {
        url: '/dispo',
        templateUrl: 'app/dispo/dispo.html'
      });
    /*
    $stateProvider
      .state('3-columns', {
        url: '/3-columns',
        templateUrl: 'app/3-columnas/index.php'
      });

    $stateProvider
      .state('document-list', {
        url: '/document-list',
        templateUrl: 'app/main/document-list.html'
      });
    $stateProvider
      .state('document-upload', {
        url: '/document-upload',
        templateUrl: 'app/main/document-upload.html'
      });
    $stateProvider
      .state('facturacion', {
        url: '/facturacion',
        templateUrl: 'app/main/facturacion.html'
      });
    $stateProvider
      .state('footer', {
        url: '/footer',
        templateUrl: 'app/main/facturacion.html'
      });
    $stateProvider
      .state('pyme-dashboard', {
        url: '/pyme-dashboard',
        templateUrl: 'app/main/pyme-dashboard.html'
      });*/


    $urlRouterProvider.otherwise('/');
  }

})();

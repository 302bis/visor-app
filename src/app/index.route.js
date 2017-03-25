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
    $stateProvider
      .state('dispo_banco', {
          url: '/dispo_banco',
          templateUrl: 'app/dispo_banco/dispo_banco.html'
      });
    $stateProvider
      .state('flujos', {
          url: '/flujos',
          templateUrl: 'app/flujos/flujos.html'
      });
    $stateProvider
      .state('perfil_form', {
          url: '/perfil_form',
          templateUrl: 'app/perfil_form/perfil_form.html'
      });
    $stateProvider
      .state('solicitud', {
          url: '/solicitud',
          templateUrl: 'app/solicitud/solicitud.html'
      });
    $stateProvider
      .state('comparision', {
          url: '/comparision',
          templateUrl: 'app/comparision/comparision.html'
      });
    $stateProvider
      .state('bolas', {
          url: '/bolas',
          templateUrl: 'app/bolas/bolas.html'
      });
    $stateProvider
      .state('convenyor-config', {
          url: '/convenyor-config',
          templateUrl: 'app/convenyor/convenyor-config.html'
      });
    $stateProvider
      .state('mnc-1', {
          url: '/mnc-1',
          templateUrl: 'app/convenyor/mnc-1.html'
      });
    $stateProvider
      .state('mnc-2', {
          url: '/mnc-2',
          templateUrl: 'app/convenyor/mnc-2.html'
      });
    $stateProvider
      .state('mnc-3', {
          url: '/mnc-3',
          templateUrl: 'app/convenyor/mnc-3.html'
      });
    $stateProvider
      .state('mnc-4', {
          url: '/mnc-4',
          templateUrl: 'app/convenyor/mnc-4.html'
      });
    $stateProvider
      .state('login', {
          url: '/login',
          templateUrl: 'app/login/login.html'
      });
    $stateProvider
      .state('home-banco', {
          url: '/home-banco',
          templateUrl: 'app/home-banco/home-banco.html'
      });
    $stateProvider
      .state('dispo_sin_fac', {
          url: '/dispo_sin_fac',
          templateUrl: 'app/dispo_sin_fac/dispo_sin_fac.html'
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

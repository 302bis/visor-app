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
      .state('homepyme2', {
        url: '/homepyme2',
        templateUrl: 'app/home2/home.html'
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
      .state('nps', {
          url: '/nps',
          templateUrl: 'app/nps/solicitud.html'
      });
    $stateProvider
      .state('nps-gracias', {
          url: '/nps-gracias',
          templateUrl: 'app/nps/solicitud-gracias.html'
      });
    $stateProvider
      .state('nps-gracias-gracias', {
          url: '/nps-gracias-gracias',
          templateUrl: 'app/nps/solicitud-gracias-gracias.html'
      });
    $stateProvider
      .state('iframe-listo', {
          url: '/iframe-listo',
          templateUrl: 'app/iframe-listo/iframe-listo.html'
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
      .state(
        'convenyor-pyme', {
          url: '/convenyor-pyme',
          views:{
              '':{
                templateUrl: 'app/convenyor/convenyor-pyme.html'
              },
              'mnc-1@convenyor-pyme' :{
                templateUrl: 'app/convenyor/mnc-1.html'
              },
              'mnc-2@convenyor-pyme' :{
                templateUrl: 'app/convenyor/mnc-2.html'
              },
              'mnc-3@convenyor-pyme' :{
                templateUrl: 'app/convenyor/mnc-3.html'
              },
              'mnc-4@convenyor-pyme' :{
                templateUrl: 'app/convenyor/mnc-4.html'
              }

          }
          
      });
    $stateProvider
      .state('convenyor-pyme.mnc-1', {
          url: '/mnc-1',
          templateUrl: 'app/convenyor/mnc-1.html'
      });
    $stateProvider
      .state('convenyor-pyme.mnc-2', {
          url: '/mnc-2',
          templateUrl: 'app/convenyor/mnc-2.html'
      });
    $stateProvider
      .state('convenyor-pyme.mnc-3', {
          url: '/mnc-3',
          templateUrl: 'app/convenyor/mnc-3.html'
      });
    $stateProvider
      .state('convenyor-pyme.mnc-4', {
          url: '/mnc-4',
          templateUrl: 'app/convenyor/mnc-4.html'
      });


    $stateProvider
      .state('conveyor-banco', {
          url: '/banco',
          templateUrl: 'app/conveyor-banco/conveyor-banco.html'
      });
    $stateProvider
      .state('conveyor-banco.banco-1', {
          url: '/banco-1',
          templateUrl: 'app/conveyor-banco/banco-1.html'
      });
    $stateProvider
      .state('conveyor-banco.banco-2', {
          url: '/conveyor-banco-2',
          templateUrl: 'app/conveyor-banco/banco-2.html'
      });
    $stateProvider
      .state('conveyor-banco.banco-3', {
          url: '/conveyor-banco-3',
          views:{
            '':{
              templateUrl: 'app/conveyor-banco/banco-3.html'
            },
            'cuadro-mando@conveyor-banco.banco-3' :{
                templateUrl: 'app/conveyor-banco/graficas/cuadro.html'
              },
            'evo@conveyor-banco.banco-3' :{
                templateUrl: 'app/conveyor-banco/graficas/evo.html'
              },
            'avance@conveyor-banco.banco-3' :{
                templateUrl: 'app/conveyor-banco/graficas/avance.html'
              },
            'vs@conveyor-banco.banco-3' :{
                templateUrl: 'app/conveyor-banco/graficas/vs.html'
              },
            'cosecha@conveyor-banco.banco-3' :{
                templateUrl: 'app/conveyor-banco/graficas/cosecha.html'
              },
            'tiempos@conveyor-banco.banco-3' :{
                templateUrl: 'app/conveyor-banco/graficas/tiempos.html'
              },
            'entradas-cartera@conveyor-banco.banco-3' :{
                templateUrl: 'app/conveyor-banco/graficas/entradas-cartera.html'
              },
            'salidas-cartera@conveyor-banco.banco-3' :{
                templateUrl: 'app/conveyor-banco/graficas/salidas-cartera.html'
              }
          }
          
      });
    $stateProvider
      .state('conveyor-banco.banco-3.inventario', {
          url: '/conveyor-banco-3.inventario',
          views:{
            '':{
              templateUrl: 'app/conveyor-banco/graficas/inventario.html'
            },
            'inventario-cartera@conveyor-banco.banco-3.inventario':{
              templateUrl: 'app/conveyor-banco/graficas/inventario/inventario-cartera.html'
            },
            'inventario-region@conveyor-banco.banco-3.inventario':{
              templateUrl: 'app/conveyor-banco/graficas/inventario/region.html'
            },
            'inventario-otra-region@conveyor-banco.banco-3.inventario':{
              templateUrl: 'app/conveyor-banco/graficas/inventario/otra-region.html'
            },
            'inventario-distri@conveyor-banco.banco-3.inventario':{
              templateUrl: 'app/conveyor-banco/graficas/inventario/distri.html'
            },
            'impagos-monto@conveyor-banco.banco-3.inventario':{
              templateUrl: 'app/conveyor-banco/graficas/inventario/impagos-monto.html'
            },            
            'impagos-casos@conveyor-banco.banco-3.inventario':{
              templateUrl: 'app/conveyor-banco/graficas/inventario/impagos-casos.html'
            }
          }
      });




    $stateProvider
      .state('conveyor-banco.banco-3.cuadro', {
          url: '/conveyor-banco-3.cuadro',
          templateUrl: 'app/conveyor-banco/graficas/cuadro.html'
      });
    $stateProvider
      .state('conveyor-banco.banco-3.evo', {
          url: '/conveyor-banco-3.evo',
          templateUrl: 'app/conveyor-banco/graficas/evo.html'
      });
    $stateProvider
      .state('conveyor-banco.banco-3.avance', {
          url: '/conveyor-banco-3.avance',
          templateUrl: 'app/conveyor-banco/graficas/avance.html'
      });
    $stateProvider
      .state('conveyor-banco.banco-3.vs', {
          url: '/conveyor-banco-3.vs',
          templateUrl: 'app/conveyor-banco/graficas/vs.html'
      });
    $stateProvider
      .state('conveyor-banco.banco-3.cosecha', {
          url: '/conveyor-banco-3.cosecha',
          templateUrl: 'app/conveyor-banco/graficas/cosecha.html'
      });
    $stateProvider
      .state('conveyor-banco.banco-3.tiempos', {
          url: '/conveyor-banco-3.tiempos',
          templateUrl: 'app/conveyor-banco/graficas/tiempos.html'
      });
    $stateProvider
      .state('conveyor-banco.banco-3.entradas-cartera', {
          url: '/conveyor-banco-3.entradas-cartera',
          templateUrl: 'app/conveyor-banco/graficas/entradas-cartera.html'
      });
    $stateProvider
      .state('conveyor-banco.banco-3.salidas-cartera', {
          url: '/conveyor-banco-3.salidas-cartera',
          templateUrl: 'app/conveyor-banco/graficas/salidas-cartera.html'
      });
    $stateProvider
      .state('conveyor-banco.banco-3.vencimiento', {
          url: '/conveyor-banco-3.vencimiento',
          templateUrl: 'app/conveyor-banco/graficas/vencimiento.html'
      });


    $stateProvider
      .state('conveyor-banco.banco-3.avance-campana', {
          url: '/conveyor-banco-3.avance-campana',
          templateUrl: 'app/conveyor-banco/graficas/avance-campana.html'
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
    $stateProvider
      .state('agenda', {
          url: '/agenda',
          templateUrl: 'app/agenda/agenda.html'
      });
    $stateProvider
      .state('calendario', {
          url: '/calendario',
          templateUrl: 'app/agenda/calendario.html'
      });
    $stateProvider
      .state('missolicitudes', {
          url: '/missolicitudes.index',
          templateUrl: 'app/missolicitudes/index.html'
      });
    $stateProvider
      .state('faq', {
          url: '/faq',
          templateUrl: 'app/faq/faq.html'
      });
    $stateProvider
      .state('faq2', {
          url: '/faq2',
          templateUrl: 'app/faq2/faq2.html'
      });
    $stateProvider
      .state('rev-camp', {
          url: '/rev-camp',
          templateUrl: 'app/rev-camp/rev-camp.html'
      });
    $stateProvider
      .state('envio-originales', {
          url: '/envio-originales',
          templateUrl: 'app/envio-originales/envio-originales.html'
      });
    $stateProvider
      .state('miayuda', {
          url: '/miayuda',
          templateUrl: 'app/miayuda/miayuda.html'
      });

    $stateProvider
      .state( 'admin_batch_limite', {
          url: '/admin_batch_limite',
          views:{
              '':{
                templateUrl: 'app/admin_batch_limite/admin_batch_limite.html'
              },
              'cascada@admin_batch_limite' :{
                templateUrl: 'app/admin_batch_limite/cascada.html'
              },
              'limite@admin_batch_limite' :{
                templateUrl: 'app/admin_batch_limite/limite.html'
              },
              'facturas_aceptadas@admin_batch_limite' :{
                templateUrl: 'app/admin_batch_limite/facturas_aceptadas.html'
              },
              'facturas_financiadas@admin_batch_limite' :{
                templateUrl: 'app/admin_batch_limite/facturas_financiadas.html'
              },
              'facturas_pagadas@admin_batch_limite' :{
                templateUrl: 'app/admin_batch_limite/facturas_pagadas.html'
              },
              'facturas_rechazadas@admin_batch_limite' :{
                templateUrl: 'app/admin_batch_limite/facturas_rechazadas.html'
              }
          }
          
      });



    $stateProvider
      .state('banco-app', {
          url: '/banco-app',
          templateUrl: 'app/banco-app/banco-app.html'
      });
    $stateProvider
      .state('pyme-detalle', {
          url: '/pyme-detalle',
          templateUrl: 'app/banco-app/pyme-detalle.html'
      });
    $stateProvider
      .state('pyme-detalle.home', {
          url: '/pyme-detalle-home',
          templateUrl: 'app/banco-app/views/home.html'
      });
    $stateProvider
      .state('pyme-detalle.historial', {
          url: '/pyme-detalle-historial',
          templateUrl: 'app/banco-app/views/historial.html'
      });
    $stateProvider
      .state('pyme-detalle.admin-proceso', {
          url: '/pyme-detalle-admin-proceso',
          templateUrl: 'app/banco-app/views/admin-proceso.html'
      });
    $stateProvider
      .state('pyme-detalle.doc-adicionales', {
          url: '/pyme-detalle-doc-adicionales',
          templateUrl: 'app/banco-app/views/doc-adicionales.html'
      });
    $stateProvider
      .state('pyme-detalle.doc-camp', {
          url: '/pyme-detalle-doc-camp',
          templateUrl: 'app/banco-app/views/doc-camp.html'
      });
    $stateProvider
      .state('pyme-detalle.expediente', {
          url: '/pyme-detalle-expediente',
          templateUrl: 'app/banco-app/views/expediente.html'
      });
    $stateProvider
      .state('pyme-detalle.gerente-cuenta', {
          url: '/pyme-detalle-gerente-cuenta',
          templateUrl: 'app/banco-app/views/gerente-cuenta.html'
      });
    $stateProvider
      .state('pyme-detalle.texto-solicitud', {
          url: '/pyme-detalle-texto-solicitud',
          templateUrl: 'app/banco-app/views/texto-solicitud.html'
      });

    $stateProvider
      .state('contingencia', {
          url: '/contingencia',
          templateUrl: 'app/contingencia/contingencia.html'
      });
    $stateProvider
      .state('privacidad', {
          url: '/privacidad',
          templateUrl: 'app/privacidad/privacidad.html'
      });
    $stateProvider
      .state('terminos', {
          url: '/terminos',
          templateUrl: 'app/terminos/terminos.html'
      });
    $stateProvider
      .state('reject', {
          url: '/reject',
          templateUrl: 'app/reject/reject.html'
      });
    $stateProvider
      .state('uber', {
          url: '/uber',
          templateUrl: 'app/uber/uber.html'
      });
      $stateProvider
        .state('recupera_ciec_1', {
            url: '/mail-1',
            templateUrl: 'app/recupera_ciec/mail-1.html'
        });
      $stateProvider
        .state('recupera_ciec_2', {
            url: '/mail-2',
            templateUrl: 'app/recupera_ciec/mail-2.html'
        });
      $stateProvider
        .state('recupera_ciec_3', {
            url: '/mail-3',
            templateUrl: 'app/recupera_ciec/mail-3.html'
        });
          

      $stateProvider
        .state('landing-amex-referal', {
            url: '/landing-amex-referal',
            templateUrl: 'app/landing-amex-referal/landing-amex-referal.html'
        });

    $urlRouterProvider.otherwise('/');
  }

})();

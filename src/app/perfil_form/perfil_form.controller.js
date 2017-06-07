  angular
    .module('booot')
    .controller('demotour', demotour);

    function demotour($scope, $http) {
                $scope.startOnboarding = function() {
          $scope.stepIndex = 0
          $scope.showOnboarding = true;
        };
        $scope.onboardingSteps = [
          {
            overlay: true,
            title: 'Welcome!',
            overlayOpacity: 0.2,
            description: "This is a box with the position set to 'centered'.",
            position: 'centered'
          },
          {
            attachTo: '#razon_social',
            position: 'right',
            overlay: false,
            title: 'Agregar datos de la empresa',
            width: 400,
            description: "Este popover va enfocado a explicar los campos de datos de la empresa"
          },
          {
            attachTo: '#content_2',
            position: 'centered',
            overlay: true,
            title: 'Content 2 is here!',
            description: 'Etiam dictum dignissim suscipit. Cras vitae velit hendrerit, euismod risus fringilla, varius sapien. Duis cursus vulputate egestas. Suspendisse nec mi vitae tortor vulputate aliquet. Fusce malesuada, elit et sagittis posuere, elit erat congue leo, in pellentesque felis orci vel est. Nunc tincidunt neque erat, a tempus lacus auctor nec. Duis nec sem sed quam fringilla porttitor. In ac lacinia nunc. Nulla ornare mi eget gravida venenatis. Nam sit amet neque quis ligula condimentum ultricies nec at ipsum.'
          },
          {
            attachTo: '#content_3',
            position: 'centered',
            overlay: true,
            overlayOpacity: 0.2,
            title: 'Welcome to Content 3!',
            description: 'This one has the opacity of the overlay set to 0.2',
          },
          {
            attachTo: '#content_4',
            position: 'centered',
            overlay: false,
            title: 'Content 4 Info!',
            description: 'This one contains no overlay!',
            width: 500
          },
          {
            overlay: true,
            title: 'All Done!',
            description: "This box is explicitly set to a position of {top: 150, right: 300}",
            position: 'centered'
          }
        ];
        $scope.showOnboarding = true
    }


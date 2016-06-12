(function () {

    angular.module('starter.controllers').controller('SettingsController', SettingsController);

    function SettingsController($scope, $state, settingsStore) {

        var p = settingsStore.getValue('pin.code');
        $scope.pinEnabled = (p) ? true : false;

        $scope.onPinEnableToggle = function () {
            
            $scope.pinEnabled = !$scope.pinEnabled;
            console.log("Toggle -> pinEnabled: ", $scope.pinEnabled);
            if ($scope.pinEnabled) {
                $state.go('app.pinsetup');
            } else {
                settingsStore.remove('pin.code');
            }
        }
        
        $scope.$on('$ionicView.enter', function(e) {
            $scope.pinEnabled = (p) ? true : false;
        });

    }

})();
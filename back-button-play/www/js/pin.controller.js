(function () {

    angular.module('starter.controllers').controller('PinController', PinController);
    
    function PinController($scope,$state,settingsStore) {
        
        $scope.pincode = '';
        
        $scope.digit = function(digit) {
            
            if($scope.pincode.length < 4){
                $scope.pincode = $scope.pincode + digit;
                
                if($scope.pincode.length === 4){
                    settingsStore.store('pin.code',$scope.pincode);
                    $scope.pincode = '';
                    $state.go('app.playlists');
                }
            }
        };
        
    }
})();
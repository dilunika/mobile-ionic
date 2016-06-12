(function () {

    angular.module('starter.services',[]).factory('settingsStore', settingsStore);

    function settingsStore($localStorage) {

        $localStorage = $localStorage.$default({
            settings: {}
        });
        
        var _store = function(key,value){
            $localStorage.settings[key] = value;
        };
        
        var _getAll = function(){
            return $localStorage.settings;
        };
        
        var _getValue = function(key){
            return $localStorage.settings[key];
        };
        
        var _remove = function(key){
            delete $localStorage.settings[key];
        };
        
        return {
            store : _store,
            getAll : _getAll,
            getValue: _getValue,
            remove: _remove
        };
    }

})();
/**
 * Created by javi on 18/6/15.
 */

angular
    .module("jeviteca")
    .service("BandsProvider", ["$http", "Settings", function ( $http, Settings ) {
        this.getBands = function () {
            return $http.get(Settings.bandsUrl);
        };
    }]);

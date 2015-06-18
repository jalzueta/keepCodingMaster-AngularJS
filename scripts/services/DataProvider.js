/**
 * Created by javi on 18/6/15.
 */
angular
    .module("jeviteca")
    .service("DataProvider", ["$http", function ( $http ) {
        this.getData = function ( url ) {
            return $http.get(url);
        };
    }]);

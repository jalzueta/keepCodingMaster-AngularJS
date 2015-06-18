/**
 * Created by javi on 18/6/15.
 */

angular
    .module("jeviteca")
    .service("GenresProvider", ["$http", "Settings", function ( $http, Settings ) {
        this.getGenres = function () {
            return $http.get(Settings.genresUrl);
        };
    }]);

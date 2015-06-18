/**
 * Created by javi on 18/6/15.
 */

angular
    .module("jeviteca")
    .service("AlbumsProvider", ["$http", "Settings", function ( $http, Settings ) {
        this.getAlbums = function () {
            return $http.get(Settings.albumsUrl);
        };
    }]);

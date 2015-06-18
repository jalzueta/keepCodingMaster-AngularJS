/**
 * Created by javi on 17/6/15.
 */
angular
    .module("jeviteca")
    .controller("AlbumsCtrl", ["$scope", "Albums", function( $scope, Albums ){

        $scope.albums = Albums.data;

    }]);

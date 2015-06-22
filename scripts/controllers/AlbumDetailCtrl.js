/**
 * Created by javi on 22/6/15.
 */
angular
    .module("jeviteca")
    .controller("AlbumDetailCtrl", ["$scope", "Album", function($scope, Album){

        $scope.album = Album.data;

    }]);
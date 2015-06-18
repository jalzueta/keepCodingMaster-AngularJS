/**
 * Created by javi on 17/6/15.
 */

angular
    .module("jeviteca")
    .controller("GenresCtrl", ["$scope", "Genres", function( $scope, Genres ){

        $scope.genres = Genres.data;

    }]);

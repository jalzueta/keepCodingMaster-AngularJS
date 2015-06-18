/**
 * Created by javi on 10/6/15.
 */
angular
    .module("jeviteca")
    .controller("TabNavigationCtrl", ["$scope", "$routeSegment", function($scope, $routeSegment){

        $scope.pathIsAlbums = function () {
            return $routeSegment.startsWith("albums");
        };

        $scope.pathIsBands = function () {
            return $routeSegment.startsWith("bands");
        };

        $scope.pathIsGenres = function () {
            return $routeSegment.startsWith("genres");
        };
    }]);
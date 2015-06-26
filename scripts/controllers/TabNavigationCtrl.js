/**
 * Created by javi on 10/6/15.
 */
angular
    .module("jeviteca")
    .controller("TabNavigationCtrl", ["$scope", "$routeSegment", function($scope, $routeSegment){

        $scope.pathIsAlbums = function () {
            return $routeSegment.startsWith("album");
            /*var isPath = false;
            angular.forEach($routeSegment.chain,function(chain,index){
                if(chain.name.indexOf("album") !== -1){
                    isPath = true;
                }
            });
            return isPath;*/
        };

        $scope.pathIsBands = function () {
            return $routeSegment.startsWith("band");
        };

        $scope.pathIsGenres = function () {
            return $routeSegment.startsWith("genre");
        };
    }]);
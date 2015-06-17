/**
 * Created by javi on 10/6/15.
 */
angular
    .module("jeviteca")
    .controller("NavegacionCtrl", ["$scope", "$routeSegment", function($scope, $routeSegment){

        // Para que la vista tenga acceso, hay que meterlo en el scope
        $scope.rutaEsAlbumes = function () {
            return $routeSegment.startsWith("albumes");
        };

        $scope.rutaEsBandas = function () {
            return $routeSegment.startsWith("bandas");
        };

        $scope.rutaEsGeneros = function () {
            return $routeSegment.startsWith("generos");
        };
    }]);
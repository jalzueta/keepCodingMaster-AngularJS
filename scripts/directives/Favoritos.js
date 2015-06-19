/**
 * Created by javi on 16/6/15.
 */
angular
    .module("jeviteca")
    .directive("favoritos", function () {
        return {
            restrict: "AE",
            replace: true,
            scope: {
                idEntity: "=",
                nameEntity: "=",
                dataType: "="
            },
            templateUrl: "views/FavoritosView.html",
            link: function(scope) {

                scope.isFavorite = function () {
                    var favorite = localStorage.getItem( scope.dataType + "_" + (scope.idEntity || scope.nameEntity) );
                    return favorite === "true";
                };
                scope.setFavorite = function() {
                    localStorage.setItem( scope.dataType + "_" + (scope.idEntity || scope.nameEntity), "true" );
                };

                scope.removeFromFavorites = function() {
                    localStorage.removeItem( scope.dataType + "_" + (scope.idEntity || scope.nameEntity) );
                };
            }
        };
    });
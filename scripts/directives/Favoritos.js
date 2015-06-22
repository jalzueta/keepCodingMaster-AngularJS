/**
 * Created by javi on 16/6/15.
 */
angular
    .module("jeviteca")
    .directive("favoritos", ["StorageService", function (StorageService) {
        return {
            restrict: "AE",
            replace: true,
            scope: {
                idEntity: "=",
                nameEntity: "=",
                dataType: "="
            },
            templateUrl: "views/FavoritesView.html",
            link: function(scope) {

                scope.isFavorite = function () {
                    return StorageService.isFavorite( scope.dataType, (scope.idEntity || scope.nameEntity).toString() );

                    /*if (typeof(Storage) !== "undefined") {
                        var favorite = localStorage.getItem( scope.dataType + "_" + (scope.idEntity || scope.nameEntity) );
                        return favorite === "true";
                    }*/
                };
                scope.setFavorite = function() {
                    StorageService.setFavorite( scope.dataType, (scope.idEntity || scope.nameEntity).toString() );
                   /* if (typeof(Storage) !== "undefined") {
                        localStorage.setItem( scope.dataType + "_" + (scope.idEntity || scope.nameEntity), "true" );
                    }*/
                };

                scope.removeFromFavorites = function() {
                    StorageService.removeFavorite( scope.dataType, (scope.idEntity || scope.nameEntity).toString() );
                    /*if (typeof(Storage) !== "undefined") {
                        localStorage.removeItem( scope.dataType + "_" + (scope.idEntity || scope.nameEntity) );
                    }*/
                };

                scope.storagePermitted = function() {
                    /*return true;*/
                    return typeof(Storage) !== "undefined";
                }
            }
        };
    }]);
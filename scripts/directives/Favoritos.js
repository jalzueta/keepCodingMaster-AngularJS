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
                storageKey: "="
            },
            templateUrl: "views/FavoritesView.html",
            link: function(scope) {

                scope.isFavorite = function () {
                    if(this.storagePermitted()){
                        return StorageService.isFavorite( scope.storageKey, (scope.idEntity || scope.nameEntity || "").toString() );
                    } else{
                        return false;
                    }
                };
                scope.setFavorite = function() {
                    if(this.storagePermitted()){
                        StorageService.setFavorite( scope.storageKey, (scope.idEntity || scope.nameEntity || "").toString() );
                    }
                };

                scope.removeFromFavorites = function() {
                    if(this.storagePermitted()){
                        StorageService.removeFavorite( scope.storageKey, (scope.idEntity || scope.nameEntity || "").toString() );
                    }
                };

                scope.storagePermitted = function() {
                    /*return true;*/
                    return typeof(Storage) !== "undefined";
                }
            }
        };
    }]);
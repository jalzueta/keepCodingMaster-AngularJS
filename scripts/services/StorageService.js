/**
 * Created by javi on 22/6/15.
 */
angular
    .module("jeviteca")
    .service("StorageService", [function () {
        this.isFavorite = function ( dataType, value ) {
            if (typeof(Storage) !== "undefined") {
                var favorites = localStorage.getItem( dataType );
                if (favorites){
                    return favorites.indexOf(value) > -1;
                }else{
                    return false;
                }
            } else{
                return false;
            }
        }
        this.setFavorite = function ( dataType, value ) {
            if (typeof(Storage) !== "undefined") {
                var favoritesString = localStorage.getItem( dataType );
                var favorites = [];
                if (favoritesString){
                    favorites = favoritesString.split(",");
                }
                favorites.push(value);
                localStorage.setItem( dataType, favorites.join(",") );
            }
        };
        this.removeFavorite = function ( dataType, value ) {
            if (typeof(Storage) !== "undefined") {
                var favorites = localStorage.getItem( dataType).split(",");
                var index = favorites.indexOf(value);
                if (index > -1){
                    favorites.splice(index, 1);
                    localStorage.setItem( dataType, favorites.join(",") );
                }
            }
        };
    }]);

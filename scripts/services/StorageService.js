/**
 * Created by javi on 22/6/15.
 */
angular
    .module("jeviteca")
    .service("StorageService", [function () {
        this.isFavorite = function ( storageKey, value ) {
            var favorites = localStorage.getItem( storageKey );
            if (favorites){
                return favorites.indexOf(value) > -1;
            }else{
                return false;
            }
        }
        this.setFavorite = function ( storageKey, value ) {
            var favoritesString = localStorage.getItem( storageKey );
            var favorites = [];
            if (favoritesString){
                favorites = favoritesString.split(",");
            }
            favorites.push(value);
            localStorage.setItem( storageKey, favorites.join(",") );
        };
        this.removeFavorite = function ( storageKey, value ) {
            var favorites = localStorage.getItem( storageKey ).split(",");
            var index = favorites.indexOf( value );
            if (index > -1){
                favorites.splice(index, 1);
                localStorage.setItem( storageKey, favorites.join(",") );
            }
        };
    }]);

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
            debugger
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
        this.getRate = function ( id ) {
            var ratesString = localStorage.getItem( "rates" );
            var rates = [];
            if (ratesString){
                rates = ratesString.split(";");
            }
            /*angular.forEach*/
            if (rates){
                return 3;
            }else{
                return 2;
            }
        }

        this.setRate = function ( id, value ) {
            debugger
            var ratesString = localStorage.getItem( "rates" );
            var rates;
            if (ratesString){
                rates = ratesString.split(";");
            }else{
                rates = [];
            }
            var updated = false;
            angular.forEach(rates, function(rate, index){
                if(rate.indexOf("id: " + id) !== -1){
                    rates.remove();
                    updated = true;
                }
            });
            if(!updated){
                rates.push('{id: ' + id + ', value: ' + value + '}');
            }
            localStorage.setItem( "rates", rates.join(";") );
        }
    }]);

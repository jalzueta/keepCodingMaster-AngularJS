/**
 * Created by javi on 22/6/15.
 */
angular
    .module("jeviteca")
    .service("StorageService", [ "Settings", function (Settings) {
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
            var ratesString = localStorage.getItem( Settings.ratesStorageKey );
            var rateToReturn = 0;
            if (ratesString){
                var rates = ratesString.split(",");
                angular.forEach(rates, function(rate, index){
                    var indexOfSeparator = rate.indexOf(":");
                    if( indexOfSeparator !== -1){
                        var auxId = rate.slice(0,indexOfSeparator);
                        if(auxId == id){
                            rateToReturn = parseInt(rate.slice(indexOfSeparator + 1));
                        }
                    }
                });
            }
            return rateToReturn;
        };

        this.setRate = function ( id, value ) {
            var ratesString = localStorage.getItem( Settings.ratesStorageKey );
            var rates;
            if (ratesString){
                rates = ratesString.split(",");
            }else{
                rates = [];
            }
            var updated = false;
            angular.forEach(rates, function(rate, index){
                var indexOfSeparator = rate.indexOf(":");
                if( indexOfSeparator !== -1){
                    var auxId = rate.slice(0,indexOfSeparator);
                    if(auxId == id){
                        updated = true;
                        rates[index] = id + ':' + value;
                    }
                }
            });
            if(!updated){
                rates.push(id + ':' + value);
            }
            localStorage.setItem( Settings.ratesStorageKey, rates.join(",") );
        };
    }]);

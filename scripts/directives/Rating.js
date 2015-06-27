/**
 * Created by javi on 26/6/15.
 */
angular
    .module("jeviteca")
    .directive("rating", ["StorageService", function (StorageService) {
        return {
            restrict: "AE",
            replace: true,
            scope: {
                idEntity: "=",
                readOnly: "="
            },
            templateUrl: "views/RatingView.html",
            link: function(scope) {

                scope.isRate = function(value) {
                    if(this.storagePermitted()){
                        var rate = StorageService.getRate(scope.idEntity);
                        return value <= rate;
                    }
                    return false;
                };

                scope.setRate = function(value) {
                    if(!scope.readOnly){
                        if(this.storagePermitted()){
                            StorageService.setRate( scope.idEntity.toString(), value );
                        }
                    }
                };

                scope.storagePermitted = function() {
                    /*return true;*/
                    return typeof(Storage) !== "undefined";
                }
            }
        };
    }]);
/**
 * Created by javi on 18/6/15.
 */
angular
    .module("jeviteca")
    .filter("instrumentsToString", function () {
        return function ( instruments ) {
            var instrumentsString = "";
            for (var i in instruments){
                if (i !== "0"){
                    instrumentsString += ", ";
                }
                instrumentsString += instruments[i];
            }
            return instrumentsString;
        }
    });
/**
 * Created by javi on 18/6/15.
 */
angular
    .module("jeviteca")
    .filter("instrumentsToString", function () {
        return function ( instruments ) {
            return instruments.join(", ");
        }
    });
/**
 * Created by javi on 18/6/15.
 */
angular
    .module("jeviteca")
    .filter("arrayToString", function () {
        return function ( array ) {
            return array.join(", ");
        }
    });
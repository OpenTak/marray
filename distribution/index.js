"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  two: function two() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var genFn = arguments[2];

    var newArray = [];

    for (var i = 0; i < x; i++) {
      var subArray = [];

      for (var j = 0; j < y; j++) {
        subArray.push(genFn ? genFn(i, j) : undefined);
      }

      newArray.push(subArray);
    }

    return newArray;
  }
};
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConwayElementType;
(function (ConwayElementType) {
    //static
    ConwayElementType[ConwayElementType["BLOCK"] = 0] = "BLOCK";
    //fighter
    ConwayElementType[ConwayElementType["GLIDER"] = 1] = "GLIDER";
    ConwayElementType[ConwayElementType["LIGHTER"] = 2] = "LIGHTER";
})(ConwayElementType = exports.ConwayElementType || (exports.ConwayElementType = {}));
exports.mapConwayElementTypeToArray = function (type) {
    switch (type) {
        case ConwayElementType.BLOCK:
            return [
                [0, 0, 0, 0],
                [0, 1, 1, 0],
                [0, 1, 1, 0],
                [0, 0, 0, 0],
            ];
        case ConwayElementType.GLIDER:
            return [
                [1, 0, 1],
                [0, 1, 1],
                [0, 1, 0],
            ];
        case ConwayElementType.LIGHTER:
            return [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 1, 1, 1, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
            ];
        default: return [0];
    }
};
//# sourceMappingURL=index.js.map
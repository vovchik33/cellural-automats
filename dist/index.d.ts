export declare enum ConwayElementType {
    BLOCK = 0,
    GLIDER = 1,
    LIGHTER = 2
}
export declare const mapConwayElementTypeToArray: (type: ConwayElementType) => number[] | number[][];

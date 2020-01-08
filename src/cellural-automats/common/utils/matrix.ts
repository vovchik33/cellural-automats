export type VectorType<T> = T[];
export type MatrixType<T> = VectorType<VectorType<T>>;

export enum ConcatType {
  AND,
  OR,
  XOR
}

export const createVector = <T>(length: number, initialValue: T): VectorType<T> => {
  const vector: T[] = [];
  for (let i = 0; i < length; i++) { vector.push(initialValue); }
  return vector;
};

export const createMatrix = <T>(width: number, height: number, initialValue: T): MatrixType<T> => {
  const field: MatrixType<T> = [];
  for (let i = 0; i < height; i++) { field.push(createVector(width, initialValue)); }
  return field;
};

export const compareVectors = <T>(firstArray: VectorType<T>, secondArray: VectorType<T>): boolean => {
  if (firstArray.length !== secondArray.length) { return false; }
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) { return false; }
  }
  return true;
};

export const compareMatrixes = <T>(firstField: MatrixType<T>, secondField: MatrixType<T>): boolean => {
  if (firstField.length !== secondField.length) { return false; }
  for (let i = 0; i < firstField.length; i++) {
    if (!compareVectors(firstField[i], secondField[i])) { return false; }
  }
  return true;
};

export const cloneVector = <T>(source: VectorType<T>, length?: number, initialValue?: T): VectorType<T> => {
  const result: VectorType<T> = [];
  source.forEach((value) => {result.push(value); });
  if (length && initialValue !== undefined && length > source.length) {
    for (let i = source.length; i < length; i++) {
      result.push(initialValue);
    }
  }
  return result;
};

export const cloneMatrix = <T>(
  source: MatrixType<T>, width?: number, height?: number, initialValue?: T,
): MatrixType<T> => {
  const result: MatrixType<T> = new Array();
  source.forEach((value: VectorType<T>) => {result.push(cloneVector(value, width, initialValue)); });
  if (height && width && initialValue !== undefined && height > source.length) {
    for (let i = source.length; i < height; i++) {
      result.push(createVector(width, initialValue));
    }
  }
  return result;
};

export const concatVector = <T>(
  target: VectorType<T>,
  source: VectorType<T>,
  startPos: number = 0,
  concatType: ConcatType = ConcatType.AND
): VectorType<T> => {
  const result: VectorType<T> = target.slice();
  for (let i = 0; i < source.length; i++) {
    switch (concatType) {
      case ConcatType.XOR:
      case ConcatType.OR:
      case ConcatType.AND:
      default:
        result[(i + startPos) % target.length] = source[i];
        break;
    }
  }
  return result;
}

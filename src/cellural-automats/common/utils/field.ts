export type VectorType<T> = Array<T>;
export type FieldType<T> = VectorType<VectorType<T>>;

export const createVector = <T>(length: number, initialValue: T): VectorType<T> => {
  const vector: T[] = new Array();
  for(let i=0; i< length; i++) vector.push(initialValue);
  return vector;
}

export const createField = <T>(width: number, height:number, initialValue: T): FieldType<T> => {
  const field: FieldType<T> = new Array();
  for(let i=0; i< height; i++) field.push(createVector(width, initialValue));
  return field;
}

export const compareVectors = <T>(firstArray: VectorType<T>, secondArray: VectorType<T>): boolean => {
  if (firstArray.length != secondArray.length) return false;
  for(let i=0; i<firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) return false;
  }
  return true;
}

export const compareFields = <T>(firstField: FieldType<T>, secondField: FieldType<T>): boolean => {
  if (firstField.length != secondField.length) return false;
  for(let i=0; i<firstField.length; i++) {
    if (!compareVectors(firstField[i], secondField[i])) return false;
  }
  return true;
}
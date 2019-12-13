export type VectorType<T> = Array<T>;
export type FieldType<T> = VectorType<VectorType<T>>;

export const createVector = <T>(length: number, initialValue: T): VectorType<T> => {
  const vector: T[] = new Array(length);
  vector.fill(initialValue);
  return vector;
}

export const createField = <T>(width: number, height:number, initialValue: T): FieldType<T> => {
  return createVector(height, createVector(width, initialValue));
}
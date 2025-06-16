function merge<T extends object, V extends object>(objA: T, objB: V): T & V {
  return Object.assign(objA, objB);
}

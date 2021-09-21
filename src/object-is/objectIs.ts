export function ObjectIs(x: any, y: any) {
  if (isItNan(x) && isItNan(y)) {
    return true;
  }
  if (isNegZero(x) || isNegZero(y)) {
    return isNegZero(x) && isNegZero(y);
  }
  return x === y;

  function isNegZero(num: number) {
    return num === 0 && 1 / num === -Infinity;
  }
  function isItNan(z: any) {
    return z !== z;
  }
}

if (!Object.is) {
  Object.is = ObjectIs;
}

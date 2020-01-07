// # Polyfill for `Object.is(..)`

// In this exercise, you will define a polyfill for `Object.is(..)`.

// ## Instructions

// 1. `Object.is(..)` should take two parameters.

// 2. It should return `true` if the passed in parameters are exactly the same value (not just `===` -- see below!), or `false` otherwise.

// 3. For `NaN` testing, you can use `Number.isNaN(..)`, but first see if you can find a way to test without usage of any utility?

// 4. For `-0` testing, no built-in utility exists, but here's a hint: `-Infinity`.

// 5. If the parameters are any other values, just test them for strict equality.

// 6. You cannot use the built-in `Object.is(..)` -- that's cheating!

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

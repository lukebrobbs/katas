// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// ```seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3```

// Requirements:

//  -  There must be a function for each number from 0 ("zero") to 9 ("nine")
//  -  There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
//  -  Each calculation consist of exactly one operation and two numbers
//  -  The most outer function represents the left operand, the most inner function represents the right operand
//  -  Divison should be integer division. For example, this should return 2, not 2.666666...:

// ```eight(dividedBy(three()));```

function numberWithCallback(num: number, cb?: CallableFunction) {
  if (cb) return cb(num);
  return num;
}

export function zero(cb?: CallableFunction) {
  return numberWithCallback(0, cb);
}
export function one(cb?: CallableFunction) {
  return numberWithCallback(1, cb);
}
export function two(cb?: CallableFunction) {
  return numberWithCallback(2, cb);
}
export function three(cb?: CallableFunction) {
  return numberWithCallback(3, cb);
}
export function four(cb?: CallableFunction) {
  return numberWithCallback(4, cb);
}
export function five(cb?: CallableFunction) {
  return numberWithCallback(5, cb);
}
export function six(cb?: CallableFunction) {
  return numberWithCallback(6, cb);
}
export function seven(cb?: CallableFunction) {
  return numberWithCallback(7, cb);
}
export function eight(cb?: CallableFunction) {
  return numberWithCallback(8, cb);
}
export function nine(cb?: CallableFunction) {
  return numberWithCallback(9, cb);
}

export function plus(a: number) {
  return function(b: number) {
    return a + b;
  };
}
export function minus(a: number) {
  return function(b: number) {
    return b - a;
  };
}
export function times(a: number) {
  return function(b: number) {
    return a * b;
  };
}
export function dividedBy(a: number) {
  return function(b: number) {
    return b / a;
  };
}

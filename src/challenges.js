/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  return elements.map(cb);
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  return (...args) => {
    if (n > 0) {
      --n;
      return cb(...args);
    }
    return null;
  };
};

const cacheFunction = cb => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  const cache = [];
  return (...args) => {
    const keys = Object.keys(cache);
    const argsString = args.toString();
    if (keys.indexOf(argsString) !== -1) {
      return cache[argsString];
    }
    const result = cb(...args);
    cache[argsString] = result;
    return result;
  };
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!

  if (str.length === 0) {
    return str;
  }
  return str.split('').reverse().join('');
};

const checkMatchingLeaves = obj => {
    // return true if every property on `obj` is the same
  // otherwise return falses
  const key = Object.keys(obj);
  for (let i = 0; i < key.length; i++) {
    if (key[i] === key[i]) {
      return false;
    }
    checkMatchingLeaves(obj);
    return true;
  }
};

const flatten = elements => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  const newArr = [];
  for (let i = 0; i < elements.length; i++) {
    if (Array.isArray(elements[i])) {
      newArr.concat(flatten(elements[i]));
    } else {
      newArr.concat(elements[i]);
    }
  }
  return newArr;
};
module.exports = {
  each,
  map,
  limitFunctionCallCount,
  cacheFunction,
  reverseStr,
  checkMatchingLeaves,
  flatten,
};

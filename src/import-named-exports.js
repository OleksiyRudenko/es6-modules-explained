// -------- imports MUST all come before anything else ----------------

// import everything a module can offer and scope into an object
import * as math from "./math/named-exports.js";

// import only some of exported entities
import { add, subtract, settings } from "./math/named-exports.js";
// note how { add, subtract } is similar to an object destructuring

// import particular entities and rename to avoid conflicts
import { add as anotherAdd, subtract as anotherSubtract, settings as otherSettings } from "./math/named-exports.js";
// the above { ... as ... } is also similar to JS object destructuring with renaming, just a bit different syntax

// import what module set offers by default
import * as math2 from "./math"; // index.js is implied

// -------- imports complete ----------------

// all sorts of 'settings' are all same disregarding the method of importing
const allSettingsAreTheSame = math.settings === settings && math.settings === math2.settings && math.settings === otherSettings; // true

try {
  math.add(3, 4);
  math.subtract(5, 1);
  math.multiply(10, 11); // Error: multiply is not defined
} catch(e) {
  console.error('Intercepted error for math.*', e);
}

try {
  add(3, 4);
  subtract(5, 1);
  multiply(10, 11);
} catch(e) {
  console.error('Intercepted error for selectively imported entities', e);
}

anotherAdd(3, 4);
anotherSubtract(3, 4);

try {
  math2.add(3, 4);
  math2.subtract(5, 1);
  math2.multiply(10, 11); // Error: math2.multiply is not a function
  math2.divide(30, 3);
  math2.power(100, 2);
} catch(e) {
  console.error('Intercepted error for selectively re-exported math2.*', e);
}

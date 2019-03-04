// import a default
import a from "./ModuleA/ModuleA1.js";

// import same default under a different name
import aa from "./ModuleA/ModuleA1.js";

// ModuleA2 exports unanimous entity
import moduleA2 from "./ModuleA/ModuleA2.js";

// originally named default is unanimous and obtains id 'default'
import * as moduleA1x from "./ModuleA/ModuleA1.js";

// unanimous default obtains id 'default'
import * as moduleA2x from "./ModuleA/ModuleA2.js";

// import a default as az and a named entity
import az, { moduleA2z } from "./ModuleA"; // index.js is implied

console.log(a()); // A
console.log(aa()); // A
console.log(moduleA2()); // moduleA2
console.log(moduleA1x.default()); // A
console.log(moduleA2x.default()); // moduleA2
console.log(az()); // A
console.log(moduleA2z()); // moduleA2

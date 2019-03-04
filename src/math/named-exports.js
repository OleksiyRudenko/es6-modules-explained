const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const settings = {
  phase: 'named-exports',
};

// Export statement as the latest module statement is good when
// - there are many entities to export
// - many non-exportable entities in the module
// so a developed can find whatever is exported in a single location
export { add, subtract, multiply, settings };

// When there is a few entities to export and no non-exportable entities
// you may opt to exporting each entity at definition point.
// See named-extras.js for the case.

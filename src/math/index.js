// Re-export only particular entities, from multiple sources
// entities below are all grouped together upon export
export { add, subtract, settings } from "./named-exports.js";
export { divide } from "./named-extras.js";

// By convention index.js never exports its own entities
// this is to demonstrate that index.js can add something on top
export const power = (a, b) => a ** b;

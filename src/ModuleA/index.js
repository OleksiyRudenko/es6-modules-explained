// Re-export a default as default
export { default } from "./ModuleA1.js";

// Module cannot export two+ defaults so need to assign a name
export { default as moduleA2z } from "./ModuleA2.js";

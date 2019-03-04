# ES6 Modules Explained

How es6 modules export/import mechanics works?

This repo offers a couple of the most common use cases
explained.

Hopefully, in the end you understand the topic better
so you will be able to manage modules or rather scopes
with more confidence.

NB! Scripts are included with `type="module"` directly
from `index.html`, so your browser must support modules.

When using bundlers (webpack, parcel, etc) just remove
`type="module"` from `index.html`.

## Path to a module

Currently non-browser clients (bundlers) imply `.js` when
the path to a module is incomplete.

If any path leads to a directory then `index.js` is implied.

## Use cases

### Import named exports

Check [import-named-exports.js](./src/import-named-exports.js) and
files in [src/math/](./src/math/)
to learn
- how to export named entities
- how to import and optionally rename named entities
- how to re-export named entities

Note that exportables are:
- constants
- variables defined with `var` or `let`
- functions
- classes (these are syntactic sugar for constructor functions, you know)

### Import defaults

Check [import-named-exports.js](./src/import-named-exports.js) and
files in [src/math/](./src/math/)
to learn
- how to export unanimous (default) entities
- how to import unanimous entities
- how to re-export unanimous entities

A single default per module can be exported.

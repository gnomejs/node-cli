# @gnome/node-cli

<div height=30" vertical-align="top">
<image src="https://raw.githubusercontent.com/gnomejs/gnomejs/main/assets/icon.png"
    alt="logo" width="60" valign="middle" />
<span>Work less. Do more. </span>
</div>

## Overview

The `node-cli` module provides a simple way to execute
inline Javascript or JavaScript files with nodejs.

The module includes functions for node, nodeCli, npm,
npx, yarn, pnpm, tsxCli, and tsx.

The module relies upon the @gnome/exec module and
has the same basic usage as the `Command` and `ShellCommand` class.

## Basic Usage

```typescript
import { node } from "@gnome/node-cli";
 
const cmd = node("console.log('Hello, World!');");
 
// execute the node command and writes "Hello, World!" to stdout.
await cmd.run();
 
// run a script and writes output to stdout and stderr.
await node("./test.js").run();
 
const r = await node("console.log('Hello, World!');");
console.log(r.code);
console.log(r.text());
```

[MIT License](./LICENSE.md)

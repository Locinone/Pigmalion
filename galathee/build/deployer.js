import * as __import0 from "massa";
async function instantiate(module, imports = {}) {
  const __module0 = imports.massa;
  const adaptedImports = {
    env: Object.assign(Object.create(globalThis), imports.env || {}, {
      abort(message, fileName, lineNumber, columnNumber) {
        // ~lib/builtins/abort(~lib/string/String | null?, ~lib/string/String | null?, u32?, u32?) => void
        message = __liftString(message >>> 0);
        fileName = __liftString(fileName >>> 0);
        lineNumber = lineNumber >>> 0;
        columnNumber = columnNumber >>> 0;
        (() => {
          // @external.js
          throw Error(`${message} in ${fileName}:${lineNumber}:${columnNumber}`);
        })();
      },
    }),
    massa: Object.assign(Object.create(__module0), {
      assembly_script_create_sc(bytecode) {
        // ~lib/@massalabs/massa-as-sdk/assembly/env/env/env.createSC(~lib/string/String) => ~lib/string/String
        bytecode = __liftString(bytecode >>> 0);
        return __lowerString(__module0.assembly_script_create_sc(bytecode)) || __notnull();
      },
      assembly_script_generate_event(event) {
        // ~lib/@massalabs/massa-as-sdk/assembly/env/env/env.generateEvent(~lib/string/String) => void
        event = __liftString(event >>> 0);
        __module0.assembly_script_generate_event(event);
      },
      assembly_script_transfer_coins(to, amount) {
        // ~lib/@massalabs/massa-as-sdk/assembly/env/env/env.transferCoins(~lib/string/String, u64) => void
        to = __liftString(to >>> 0);
        amount = BigInt.asUintN(64, amount);
        __module0.assembly_script_transfer_coins(to, amount);
      },
      assembly_script_has_data(key) {
        // ~lib/@massalabs/massa-as-sdk/assembly/env/env/env.has(~lib/string/String) => bool
        key = __liftString(key >>> 0);
        return __module0.assembly_script_has_data(key) ? 1 : 0;
      },
      assembly_script_get_data(key) {
        // ~lib/@massalabs/massa-as-sdk/assembly/env/env/env.get(~lib/string/String) => ~lib/string/String
        key = __liftString(key >>> 0);
        return __lowerString(__module0.assembly_script_get_data(key)) || __notnull();
      },
      assembly_script_set_data(key, value) {
        // ~lib/@massalabs/massa-as-sdk/assembly/env/env/env.set(~lib/string/String, ~lib/string/String) => void
        key = __liftString(key >>> 0);
        value = __liftString(value >>> 0);
        __module0.assembly_script_set_data(key, value);
      },
      assembly_script_get_call_stack() {
        // ~lib/@massalabs/massa-as-sdk/assembly/env/env/env.callStack() => ~lib/string/String
        return __lowerString(__module0.assembly_script_get_call_stack()) || __notnull();
      },
    }),
  };
  const { exports } = await WebAssembly.instantiate(module, adaptedImports);
  const memory = exports.memory || imports.env.memory;
  const adaptedExports = Object.setPrototypeOf({
    main(_args) {
      // deployer/main(~lib/string/String) => i32
      _args = __lowerString(_args) || __notnull();
      return exports.main(_args);
    },
    setNFT() {
      // assembly/main/setNFT() => ~lib/string/String
      return __liftString(exports.setNFT() >>> 0);
    },
    mintNFT(to) {
      // assembly/main/mintNFT(~lib/string/String) => ~lib/string/String
      to = __lowerString(to) || __notnull();
      return __liftString(exports.mintNFT(to) >>> 0);
    },
    transferNFT(to) {
      // assembly/main/transferNFT(~lib/string/String) => ~lib/string/String
      to = __lowerString(to) || __notnull();
      return __liftString(exports.transferNFT(to) >>> 0);
    },
  }, exports);
  function __liftString(pointer) {
    if (!pointer) return null;
    const
      end = pointer + new Uint32Array(memory.buffer)[pointer - 4 >>> 2] >>> 1,
      memoryU16 = new Uint16Array(memory.buffer);
    let
      start = pointer >>> 1,
      string = "";
    while (end - start > 1024) string += String.fromCharCode(...memoryU16.subarray(start, start += 1024));
    return string + String.fromCharCode(...memoryU16.subarray(start, end));
  }
  function __lowerString(value) {
    if (value == null) return 0;
    const
      length = value.length,
      pointer = exports.__new(length << 1, 1) >>> 0,
      memoryU16 = new Uint16Array(memory.buffer);
    for (let i = 0; i < length; ++i) memoryU16[(pointer >>> 1) + i] = value.charCodeAt(i);
    return pointer;
  }
  function __notnull() {
    throw TypeError("value must not be null");
  }
  return adaptedExports;
}
export const {
  memory,
  main,
  setNFT,
  mintNFT,
  transferNFT
} = await (async url => instantiate(
  await (async () => {
    try { return await globalThis.WebAssembly.compileStreaming(globalThis.fetch(url)); }
    catch { return globalThis.WebAssembly.compile(await (await import("node:fs/promises")).readFile(url)); }
  })(), {
    massa: __maybeDefault(__import0),
  }
))(new URL("deployer.wasm", import.meta.url));
function __maybeDefault(module) {
  return typeof module.default === "object" && Object.keys(module).length == 1
    ? module.default
    : module;
}

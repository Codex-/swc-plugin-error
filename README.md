# swc-plugin-issue

```shell
> pnpm i
> pnpm run test
```

## Error

Running multiple times gives different errors

```
> SWC_LOG=info RUST_BACKTRACE=1 npx jest --config ./tests/integration/jest.config.cjs --no-cache --runInBand


 RUNS  tests/integration/src/typescript.test.ts
   INFO  Done in 248.700042ms, kind: "perf"
    at /Users/runner/.cargo/registry/src/index.crates.io-6f17d22bba15001f/swc_timer-0.21.14/src/lib.rs:32
    in Compiler.parse
    in parse_js_as_input
    in process_js_with_custom_pass
    in process_js_file with fm: SourceFile(/Users/alexmiller/dev/issue/swc-plugin-error/tests/integration/src/typescript.test.ts)

sh: line 1: 74251 Segmentation fault: 11  pnpm run test:integration
```

```
memory allocation of 3117855127680 bytes failed
```

```
75266 Bus error: 10
```

module.exports = {
  transform: {
    "^.+\\.[jt]s$": [
      "@swc/jest",
      {
        jsc: {
          experimental: {
            plugins: [
              [require.resolve("../../swc_plugin_issue.wasm"), {}],
            ],
          },
        },
        module: {
          type: "commonjs",
        },
      },
    ],
  },
  testRegex: "(\\.|/)(test)\\.([jt]s)$",
  moduleFileExtensions: ["js", "ts"],
  moduleDirectories: ["src", "node_modules"],
};

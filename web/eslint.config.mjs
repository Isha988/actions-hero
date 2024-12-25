import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"], // Apply to all JavaScript files
    languageOptions: {
      ecmaVersion: "latest", // Use the latest ECMAScript version
      sourceType: "commonjs", // Use CommonJS modules
      globals: globals.browser, // Include browser global variables
    },
    rules: {
      // Add any additional rules here
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
  pluginJs.configs.recommended, // Apply ESLint's recommended rules
  {
    files: ["**/*.test.js", "**/__tests__/**/*.js"], // Target Jest test files
    plugins: { jest: pluginJest }, // Add the Jest plugin
    languageOptions: {
      globals: globals.jest, // Include Jest globals (e.g., `describe`, `it`, `test`)
    },
    rules: {
      // Jest-specific rules or overrides
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/valid-expect": "error",
    },
  },
];

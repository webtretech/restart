import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import perfectionist from "eslint-plugin-perfectionist";
import prettier from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  allConfig: js.configs.all,
  recommendedConfig: js.configs.recommended,
});

export default tseslint.config(
  ...tseslint.configs.recommended,
  perfectionist.configs["recommended-natural"],
  {
    files: ["src/**/*.{ts,tsx}"],
    ignores: [
      "vite.config.ts",
      "eslint.config.mjs",
      "postcss.config.cjs",
      "prettier.config.cjs",
      "tailwind.config.cjs",
      "transmart.config.cjs",
    ],
  },
  ...compat.extends(
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "prettier",
  ),
  {
    plugins: {
      react,
      prettier,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },

      parser: tseslint.parser,
      ecmaVersion: "latest",
      sourceType: "module",

      parserOptions: {
        project: "tsconfig.json",
        emitDecoratorMetadata: {
          disallowTypeAnnotations: false,
          fixStyle: "inline-type-imports",
          prefer: "type-imports",
        },
      },
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      "prettier/prettier": "error",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/triple-slash-reference": "off",
      "@typescript-eslint/no-duplicate-enum-values": "off",
    },
  },
);

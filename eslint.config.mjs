import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

import prettierPlugin from "eslint-plugin-prettier";
import tailwindcss from "eslint-plugin-tailwindcss";

const __dirname = dirname(fileURLToPath(import.meta.url));

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "prettier"
  ),

  {
    plugins: {
      prettier: prettierPlugin,
      tailwindcss: tailwindcss,
    },
    rules: {
      "prettier/prettier": "error",
      "react/no-escape-entities": "off",
      "tailwindcss/classnames-order": "warn",
    },
  },
];

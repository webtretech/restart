const defaultConfig = require("@commitlint/config-conventional");

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    ...defaultConfig.rules,
    "type-enum": [
      2,
      "always",
      [
        "fix",
        "docs",
        "test",
        "feat",
        "style",
        "chore",
        "revert",
        "format",
        "example",
        "tooling",
        "refactor",
      ],
    ],
  },
};

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
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

module.exports = {
  pluginSearchDirs: false,
  plugins: [
    require("@trivago/prettier-plugin-sort-imports"),
    require("prettier-plugin-tailwindcss"), // MUST come last
  ],
  tailwindConfig: "./tailwind.config.cjs",
  importOrder: ["^@core/(.*)$", "^@server/(.*)$", "^@ui/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

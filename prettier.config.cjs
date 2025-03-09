module.exports = {
  pluginSearchDirs: false,
  plugins: [
    "prettier-plugin-tailwindcss", // MUST come last
  ],
  tailwindStylesheet: "./src/style.css",
  tailwindConfig: "./tailwind.config.cjs",
  tailwindFunctions: ["clsx", "twMerge", "twJoin"],
};

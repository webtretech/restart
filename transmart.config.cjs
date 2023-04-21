require("dotenv").config();

module.exports = {
  baseLocale: "en",
  locales: ["fr", "jp", "de"],
  localePath: "src/i18n",
  openAIApiKey: process.env.VITE_APP_OPENAI_API_KEY,
};

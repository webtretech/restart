require("dotenv").config();

module.exports = {
  baseLocale: "enUS",
  locales: ["de"],
  localePath: "src/i18n",
  openAIApiKey: process.env.VITE_APP_OPENAI_API_KEY,
};

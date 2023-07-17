require("dotenv").config();

module.exports = {
  baseLocale: "enUS",
  locales: ["de"],
  localePath: "src/i18n",
  openAIApiKey: process.env.OPENAI_API_KEY,
};

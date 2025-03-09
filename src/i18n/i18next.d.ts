import { type resources } from "@/i18n";

declare module "i18next" {
  interface CustomTypeOptions {
    // eslint-disable-next-line prettier/prettier
    resources: typeof resources["en-US"];
    returnNull: false;
  }
}

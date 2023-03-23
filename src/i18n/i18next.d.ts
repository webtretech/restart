import { type resources } from "@/i18n";

declare module "i18next" {
  interface CustomTypeOptions {
    returnNull: false;
    // eslint-disable-next-line prettier/prettier
    resources: typeof resources["en-US"];
  }
}

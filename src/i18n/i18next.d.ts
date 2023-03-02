import { resources } from ".";

declare module "i18next" {
  interface CustomTypeOptions {
    returnNull: false;
    resources: typeof resources["en-US"];
  }
}

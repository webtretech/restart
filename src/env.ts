import { z } from "zod";

export const EnvironmentSchema = z.object({
  /**
   * Vite built-in variables
   * @see https://vitejs.dev/guide/env-and-mode.html#env-variables-and-modes
   */
  SSR: z.boolean(),
  DEV: z.boolean(),
  PROD: z.boolean(),
  BASE_URL: z.string(),
  MODE: z.union([z.literal("development"), z.literal("production")]),

  // Custom variables
  VITE_APP_NAME: z.string(),
});

export type EnvironmentVariable = z.infer<typeof EnvironmentSchema>;

export const env = EnvironmentSchema.parse(import.meta.env);

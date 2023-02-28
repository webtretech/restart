import { z } from "zod";

export const EnvironmentSchema = z.object({
  VITE_APP_NAME: z.string(),
});

export type EnvironmentVariable = z.infer<typeof EnvironmentSchema>;

export const env = EnvironmentSchema.parse(import.meta.env);

/// <reference types="vite/client" />
import { EnvironmentVariable } from "@/env";

interface ImportMeta {
  readonly env: EnvironmentVariable;
}

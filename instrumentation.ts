import { loadEnvConfig } from "@next/env";
import path from "path";

export async function register() {
  loadEnvConfig(path.resolve(process.cwd(), ".env"));
}

"use client";

import { env } from "next-runtime-env";
import { isEnvironmentType } from "@/helpers/environment";

export function useEnvironment() {
  const environment = env("NEXT_PUBLIC_APP_ENV");

  if (isEnvironmentType(environment)) {
    return environment;
  }

  return null;
}

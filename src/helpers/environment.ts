import { ALL_ENVIRONMENT_TYPES, type EnvironmentType } from "@/types/environment";

export function isEnvironmentType(value: unknown): value is EnvironmentType {
  return typeof value === "string" && ALL_ENVIRONMENT_TYPES.includes(value as EnvironmentType);
}

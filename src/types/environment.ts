export const ALL_ENVIRONMENT_TYPES = ["local", "development", "staging", "production"] as const;

export type EnvironmentType = (typeof ALL_ENVIRONMENT_TYPES)[number];

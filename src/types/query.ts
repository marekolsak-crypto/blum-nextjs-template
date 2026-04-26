export const QUERY_KEYS = {
  all: "all",
  healthcheck: () => [QUERY_KEYS.all, "healthcheck"],
} as const;

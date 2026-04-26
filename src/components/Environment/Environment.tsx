"use client";

import { useEnvironment } from "@/hooks/useEnvironment";
import s from "./Environment.module.css";

export function Environment() {
  const environment = useEnvironment();

  return <span className={s.environment}>{environment}</span>;
}

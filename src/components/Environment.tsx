"use client";

import { Text } from "@mantine/core";
import { useEnvironment } from "@/hooks/useEnvironment";

export function Environment() {
  const environment = useEnvironment();

  return (
    <Text>
      <Text span>Bylo použito </Text>
      <Text span c="blue">
        {environment}
      </Text>
      <Text span> prostředí.</Text>
    </Text>
  );
}

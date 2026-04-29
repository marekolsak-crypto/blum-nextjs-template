"use client";

import { Loader, Modal, noop, Stack, Text, Title } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { WifiOff } from "lucide-react";
import { useTranslations } from "next-intl";
import type { HealthcheckResponse } from "@/app/api/healthcheck/route";
import { QUERY_KEYS } from "@/types/query";

const REFETCH_INTERVAL = 15 * 1000;

export function ServerStatus() {
  const t = useTranslations();

  const { isPending, isError, data } = useQuery({
    queryKey: QUERY_KEYS.healthcheck(),
    queryFn: async ({ signal }) => {
      const response = await fetch("/api/healthcheck", {
        signal,
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Neplatná odpověď serveru");
      }

      const data: HealthcheckResponse = await response.json();
      if (data.status !== "alive") {
        throw new Error("Server není dostupný");
      }

      return data;
    },
    retry: false,
    networkMode: "always",
    refetchInterval: REFETCH_INTERVAL,
    refetchIntervalInBackground: true,
  });

  return (
    <Modal
      opened={(!isPending && data?.status !== "alive") || isError}
      centered
      withCloseButton={false}
      closeOnClickOutside={false}
      closeOnEscape={false}
      trapFocus
      lockScroll
      overlayProps={{
        blur: 3,
      }}
      onClose={noop}
    >
      <Stack align="center" gap="md" py="xl">
        <WifiOff size={56} />

        <Stack align="center" gap={6}>
          <Title order={3} ta="center">
            {t("component.serverStatus.title")}
          </Title>

          <Text size="sm" c="dimmed" ta="center" maw={360}>
            {t("component.serverStatus.description")}
          </Text>
        </Stack>

        <Loader type="dots" size="sm" color="purple" mt="sm" />
      </Stack>
    </Modal>
  );
}

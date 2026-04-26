"use client";

import { AppShell, Container, Group } from "@mantine/core";
import Image from "next/image";
import type { PropsWithChildren } from "react";

const CONTENT_MAX_WIDTH = 1280;

export default function Layout({ children }: PropsWithChildren) {
  return (
    <AppShell header={{ height: 90 }} padding="md" withBorder={false}>
      <AppShell.Header px="md">
        <Container size={CONTENT_MAX_WIDTH} h="100%">
          <Group h="100%" justify="space-between">
            <Image src="/blogic-logo.png" alt="Blogic brand logo" width={115} height={46} quality={100} />
          </Group>
        </Container>
      </AppShell.Header>

      <AppShell.Main>
        <Container size={CONTENT_MAX_WIDTH} px="md">
          {children}
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

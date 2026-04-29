"use client";

import { AppShell, Container, Group } from "@mantine/core";
import type { PropsWithChildren } from "react";
import { UserMenu } from "@/components/auth/UserMenu";
import { Providers } from "@/components/infrastructure/Providerts";
import { BlogicLogo } from "@/components/layout/BlogicLogo";

const CONTENT_MAX_WIDTH = 1280;
const HEADER_HEIGHT = 90;

export default function AuthenticatedLayout({ children }: PropsWithChildren) {
  return (
    <Providers>
      <AppShell header={{ height: HEADER_HEIGHT }} padding="md" withBorder={false}>
        <AppShell.Header px="md">
          <Container size={CONTENT_MAX_WIDTH} h="100%">
            <Group h="100%" justify="space-between" align="center">
              <BlogicLogo />
              <UserMenu />
            </Group>
          </Container>
        </AppShell.Header>

        <AppShell.Main>
          <Container size={CONTENT_MAX_WIDTH} px="md">
            {children}
          </Container>
        </AppShell.Main>
      </AppShell>
    </Providers>
  );
}

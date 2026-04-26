"use client";

import { AppShell, Center, Container, Group, Loader } from "@mantine/core";
import { BlogicLogo } from "@/components/layout/BlogicLogo";

const CONTENT_MAX_WIDTH = 1280;
const HEADER_HEIGHT = 90;

export function GoogleRedirectSkeleton() {
  return (
    <AppShell header={{ height: HEADER_HEIGHT }} padding="md" withBorder={false}>
      <AppShell.Header px="md">
        <Container size={CONTENT_MAX_WIDTH} h="100%">
          <Group h="100%">
            <BlogicLogo />
          </Group>
        </Container>
      </AppShell.Header>

      <AppShell.Main>
        <Container size={CONTENT_MAX_WIDTH} px="md">
          <Center pos="fixed" w="100%" mih="100dvh" inset={0}>
            <Loader type="dots" size="xl" color="purple" />
          </Center>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

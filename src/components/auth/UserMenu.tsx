// components/UserBadge.tsx
"use client";

import { Avatar, Box, Group, Menu, Stack, Text, UnstyledButton } from "@mantine/core";
import { ChevronDown, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { signOut, useSession } from "@/lib/auth-client";

export function UserMenu() {
  const t = useTranslations();
  const router = useRouter();
  const { isPending, data: session } = useSession();

  const user = session?.user;

  async function onSignOutHandler() {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.replace("/sign-in");
          router.refresh();
        },
      },
    });
  }

  if (isPending || !user) {
    return null;
  }

  return (
    <Menu width={280} position="bottom-end" offset={10} shadow="md" radius="md" withinPortal>
      <Menu.Target>
        <UnstyledButton>
          <Group gap="xs">
            <Avatar src={user.image} name={user.name} color="violet" radius="xl" size="md" />
            <ChevronDown size={16} />
          </Group>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Box px="sm" py="xs">
          <Group gap="sm" wrap="nowrap">
            <Avatar src={user.image} name={user.name} color="violet" radius="xl" size="md" />
            <Stack gap={0} miw={0}>
              <Text size="sm" fw={600} truncate>
                {user.name}
              </Text>
              <Text size="xs" c="dimmed" truncate>
                {user.email}
              </Text>
            </Stack>
          </Group>
        </Box>

        <Menu.Divider />

        <Menu.Item color="red" leftSection={<LogOut size={16} />} onClick={onSignOutHandler}>
          {t("component.userMenu.signOut")}
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

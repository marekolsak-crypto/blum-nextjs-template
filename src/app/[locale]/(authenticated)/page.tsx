import { Text, Title } from "@mantine/core";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: t("page.home.title"),
    description: t("page.home.description"),
  };
}

export default async function Home() {
  const t = await getTranslations();

  return (
    <>
      <Title>{t("page.home.title")}</Title>
      <Text>{t("page.home.description")}</Text>
    </>
  );
}

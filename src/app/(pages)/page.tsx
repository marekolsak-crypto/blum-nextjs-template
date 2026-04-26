import { Text, Title } from "@mantine/core";
import type { Metadata } from "next";
import { Environment } from "@/components/Environment";

export const metadata: Metadata = {
  title: "BLUM Next.js Template",
  description: "Šablona pro tvorbu Next.js aplikací v rámci středoškolských praxí Blogic University.",
};

export default function Home() {
  return (
    <>
      <Title>BLUM Next.js Template</Title>
      <Text>Šablona pro tvorbu Next.js aplikací v rámci středoškolských praxí Blogic University.</Text>
      <Environment />
    </>
  );
}

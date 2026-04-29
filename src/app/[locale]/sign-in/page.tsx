import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { GoogleRedirect } from "@/components/auth/GoogleRedirect";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: t("page.signIn.title"),
    description: t("page.signIn.description"),
  };
}

export default function SignIn() {
  return <GoogleRedirect callbackURL="/" />;
}

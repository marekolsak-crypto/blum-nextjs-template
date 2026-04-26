import type { Metadata } from "next";
import { GoogleRedirect } from "@/components/auth/GoogleRedirect";

export const metadata: Metadata = {
  title: "Přihlašování",
  description: "Stránka pro přihlašování uživatelů.",
};

export default function SignIn() {
  return <GoogleRedirect callbackURL="/" />;
}

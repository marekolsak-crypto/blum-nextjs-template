"use client";

import { type PropsWithChildren, useEffect } from "react";
import { GoogleRedirectSkeleton } from "@/components/auth/GoogleRedirectSkeleton";
import { signIn, useSession } from "@/lib/auth-client";

interface GoogleRedirectProps {
  callbackURL?: string;
}

export function GoogleRedirect({ children, callbackURL }: PropsWithChildren<GoogleRedirectProps>) {
  const { isPending, data: session } = useSession();

  useEffect(() => {
    if (!isPending && !session) {
      signIn.social({ provider: "google", callbackURL });
    }
  }, [isPending, session, callbackURL]);

  if (isPending || !session) {
    return <GoogleRedirectSkeleton />;
  }

  return children;
}

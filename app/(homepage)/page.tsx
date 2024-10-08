"use client";

import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { useEffect } from "react";
import LoadingLogo from "@/components/shared/LoadingLogo";
import { useRouter } from "next/navigation";

export default function Home() {
  const store = useMutation(api.users.store);
  const router = useRouter();

  useEffect(() => {
    store({});
    router.push("/new");
  });

  return <LoadingLogo />
}
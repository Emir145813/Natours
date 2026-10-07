"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function useQueryParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function setQueryParams(updates: Record<string, string> , targetPath ?: string) {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(updates).forEach(([key, value]) => {
      params.set(key, value);
    });

    router.push(`${targetPath ?? pathname}?${params.toString()}`);
  }
  return { setQueryParams };
}

export default useQueryParams;

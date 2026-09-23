"use client";
import React from "react";
import TanstackProvider from "./tanstack-provider";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { usePathname } from "next/navigation";
import ThemeProvider from "./theme-provider";

function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (
    pathname === "/signin" ||
    pathname === "/signup" ||
    pathname === "/forget-password" ||
    pathname.startsWith("/reset-password")
  ) {
    return <TanstackProvider>{children}</TanstackProvider>;
  }

  return (
    <TanstackProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <NavBar />
        {children}
        <Footer />
      </ThemeProvider>
    </TanstackProvider>
  );
}

export default MainLayout;

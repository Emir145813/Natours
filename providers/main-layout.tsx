"use client";
import React from "react";
import TanstackProvider from "./tanstack-provider";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { usePathname } from "next/navigation";
import ThemeProvider from "./theme-provider";
import { motion } from "motion/react";

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
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <NavBar />
          {children}
          <Footer />
        </motion.div>
      </ThemeProvider>
    </TanstackProvider>
  );
}

export default MainLayout;

"use client";
import React from "react";
import TanstackProvider from "./tanstack-provider";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <TanstackProvider>
      <NavBar />
      {children}
      <Footer />
    </TanstackProvider>
  );
}

export default MainLayout;

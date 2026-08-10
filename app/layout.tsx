import type { Metadata } from "next";
import { Inter, Kameron, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter-regular" });
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta-regular",
});
const kameron = Kameron({
  subsets: ["latin"],
  variable: "--font-kameron-regular",
});

export const metadata: Metadata = {
  title: "Natours",
  description: "A Platform for natour lovers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        jakarta.variable,
        inter.variable,
        kameron.variable,
        "font-sans",
      )}
    >
      <body className={`antialiased flex flex-col justify-between`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

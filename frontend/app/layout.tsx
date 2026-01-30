import QueryProvider from "@/components/providers/QueryProvider";
import type { Metadata } from "next";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/images/logo.svg" />
      <body className="">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}

import { JSX } from "react";

import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Jira Clone",
  description: "Task Management App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

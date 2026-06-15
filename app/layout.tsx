import type { Metadata } from "next/types";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"


export const metadata: Metadata = {
  title: "George O. E. Campbell's CV",
  description: "Curriculum Vitae of George O.E. Campbell with a link to my company website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Analytics/>
        {children}
      </body>
    </html>
  );
}

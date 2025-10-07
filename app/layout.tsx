import type { Metadata } from "next/types";
import "./globals.css";



export const metadata: Metadata = {
  title: "George O. E. Campbell's CV",
  description: "Curriculum Vitae of George O.E. Campbell with a link to my Portfolio website.",
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
        {children}
      </body>
    </html>
  );
}

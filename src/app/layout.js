import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Book Flow",
  description: "Gerencimento de livros",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/book-green.png" sizes="any" />
      <body className={inter.className + " text-white bg-[#09090b]"}>{children}</body>
    </html>
  );
}

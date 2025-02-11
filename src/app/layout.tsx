import React from "react";
import "./globals.css";
import Footer from "./defaultLayout/Footer";
import Header from "./defaultLayout/Header";
import SessionProvider from "./components/SessionProvider";
import { getServerSession } from "next-auth";
import { ToastContainer } from "react-toastify";
import { ppEditorialNewUltralightItalic, inter } from "./fonts/fonts";

export const metadata = {
  title: "Dynamic Frame Layout",
  description: "A dynamic frame layout with custom fonts",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html
      lang="en"
      className={`${ppEditorialNewUltralightItalic.variable} ${inter.variable}`}
    >
      <body className={inter.className}>
        <SessionProvider session={session}>
          <Header />
          {children}
          <Footer />
        </SessionProvider>
        <ToastContainer />
      </body>
    </html>
  );
}

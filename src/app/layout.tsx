import React from "react";
import "./globals.css";
import Footer from "./defaultLayout/Footer";
import Header from "./defaultLayout/Header";
import SessionProvider from "./components/SessionProvider";
import { getServerSession } from "next-auth";
import Providers from "../redux/Providers";
import { ToastContainer } from "react-toastify";

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en" className="scroll-smooth focus:scroll-auto scroll-m-3">
      <body>
        <Providers>
          <SessionProvider session={session}>
            <Header />
            {children}
            <Footer />
          </SessionProvider>
        </Providers>
        <ToastContainer />
      </body>
    </html>
  );
}

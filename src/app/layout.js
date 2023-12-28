import "./globals.css";
import Footer from "./defaultLayout/Footer";
import Header from "./defaultLayout/Header";
import SessionProvider from "./components/SessionProvider";
import { getServerSession } from "next-auth";
import Providers from "../redux/Providers";

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body>
        <Providers>
          <SessionProvider>
            <Header />
            {children}
            <Footer />
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}


import { Roboto } from "next/font/google";
import TopbarHeader from "@/components/Homepage/Topbar-Header/TopbarHeader";
import Footer from "@/components/Homepage/Footer";
import "./globals.css";
import { Providers } from "@/components/Providers";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "World-Mart",
  description: "Your one-stop shop for everything",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased bg-gray-50`}>
        <Providers>
          <TopbarHeader />
          {/* Main container */}
          <main>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

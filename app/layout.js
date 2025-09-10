import { Roboto } from "next/font/google";
import TopbarHeader from "@/components/Homepage/Topbar-Header/TopbarHeader";
import Footer from "@/components/Homepage/Footer";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // optional: regular, medium, bold
});

export const metadata = {
  title: "World-Mart",
  description: "Your one-stop shop for everything",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <TopbarHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
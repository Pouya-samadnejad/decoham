import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/header";
const Pinar = localFont({ src: "../../public/fonts/Pinar-VF.woff2" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={Pinar.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

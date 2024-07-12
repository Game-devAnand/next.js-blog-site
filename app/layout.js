import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import HomeBanner from "../components/banner";
import TopBar from "@/components/topbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBar />
        <div className="m-10 mt-2">
          <HomeBanner />
        </div>

        {children}
      </body>
      <Footer />
    </html>
  );
}

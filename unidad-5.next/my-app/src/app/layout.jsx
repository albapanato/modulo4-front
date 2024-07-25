import Navbar from "@/app/components/Navbar";
import { Roboto } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Bildy App",

  description: "Gestiona tus albaranes",

  keywords: "tienda, online, ecommerce",
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

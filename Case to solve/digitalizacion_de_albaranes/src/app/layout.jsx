import "./globals.css";
import ImageBildy from "./components/ImageBildy";
import ImageBg from "./components/ImageBg";
export const metadata = {
  title: "Bildy",
  description: "Herramienta para generar albaranes y firmas digitales",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="body">
        <div className="">
          <ImageBg />
        </div>
        <div className="logo">
          <ImageBildy />{" "}
        </div>
        <div className="flex justify-center ">
          <main className="">{children}</main>
        </div>
      </body>
    </html>
  );
}

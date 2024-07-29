import "./globals.css";
import ImageBildy from "./components/ImageBildy";
export const metadata = {
  title: "Bildy",
  description: "Herramienta para generar albaranes y firmas digitales",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="body">
        <div className="flex justyfy-center">
          <div className="flex">
            <ImageBildy />{" "}
          </div>
          <div className="container mx-auto">
            <div className="flex">
              <main className="container mx-auto h-auto flex flex-col">
                {children}
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

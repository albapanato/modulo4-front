import ImageBildy from "../components/ImageBildy";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Mi cuenta en Bildy",
  description: "Gestiona tu cuenta",
};

export default function UserLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body id="body" className=" ">
          <div className="flex">
            <div className="flex flex-col">
              <ImageBildy />
              <Navbar />
            </div>

            <div className="container mx-auto h-auto flex flex-col">
              <main>{children}</main>
            </div>
          </div>
        </body>
      </html>
    </>
  );
}

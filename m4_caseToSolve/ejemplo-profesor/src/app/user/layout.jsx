import ImageBildy from "../components/ImageBildy";
import Navbar from "../components/Navbar";
import "../globals.css"; // Asegúrate de importar tus estilos globales

export const metadata = {
  title: "Mi cuenta en Bildy",
  description: "Gestiona tu cuenta",
};

export default function UserLayout({ children }) {
  return (
    <div className="flex">
      <div className="flex flex-col">
        {/* <ImageBildy /> */}
        <nav>
          <Navbar />
        </nav>
      </div>

      <div className="container mx-auto h-auto flex flex-col">
        <main>{children}</main>
      </div>
    </div>
  );
}

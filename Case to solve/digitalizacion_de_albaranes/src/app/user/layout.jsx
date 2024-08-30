import Navbar from "../components/Navbar";
import "../globals.css"; // Asegúrate de importar tus estilos globales
import ImageBg from "../components/ImageBg";

export const metadata = {
  title: "Mi cuenta en Bildy",
  description: "Gestiona tu cuenta",
};

export default function UserLayout({ children }) {
  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      <div className="md:w-[200px] md:min-w-[200px] bg-indigo-600">
        <nav className="h-full">
          <Navbar />
        </nav>
      </div>

      <div className="w-full h-full bg-cover bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw1fHxkaWdpdGFsJTIwaW52b2ljaW5nfGVufDB8fHx8MTcxODU2NTQ1NHww&ixlib=rb-4.0.3&auto=format&fit=crop&w=1920')]">
        <div style={{ height: "calc(100vh - 140px)" }}>{children}</div>
      </div>
    </div>
  );
}

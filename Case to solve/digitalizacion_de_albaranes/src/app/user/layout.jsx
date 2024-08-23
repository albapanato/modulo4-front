import Navbar from "../components/Navbar";
import "../globals.css"; // Asegúrate de importar tus estilos globales

export const metadata = {
  title: "Mi cuenta en Bildy",
  description: "Gestiona tu cuenta",
};

export default function UserLayout({ children }) {
  return (
    <div className="layout-p flex">
      <div className="">
        <nav className="navbar">
          <Navbar />
        </nav>
      </div>

      <div className="wrapper-layout-p">
        <div>{children}</div>
      </div>
    </div>
  );
}

import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  // <nav className="navbar py-5">
  //  <nav className='bg-slate-400 mb-4 flex justify-between items-center px-20 p-3 font-bold text-black'>
  return (
    <nav className="navbar py-5">
      {/*  Este componente no me lo reconoce si lo pongo en el layout...porque??? */}
      <ul>
        <li>
          <Link href="/user">Clientes</Link>
        </li>
        <li>
          <Link href="/user/projects">Proyectos</Link>
        </li>
        <li>
          <Link href="/user/deliverynotes">Albaranes</Link>
        </li>
      </ul>
    </nav>
  );
}

import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  // <nav className="navbar py-5">
  //  <nav className='bg-slate-400 mb-4 flex justify-between items-center px-20 p-3 font-bold text-black'>
  return (
    <div className="navbar justify-end">
      {/*  Este componente no me lo reconoce si lo pongo en el layout...porque??? */}
      <ul>
        <li className=" hover:text-4xl hover:p-2 hover:text-orange-400">
          <Link href="/user">Clientes</Link>
        </li>
        <li className=" hover:text-4xl hover:p-2  hover:text-orange-400">
          <Link href="/user/projects">Proyectos</Link>
        </li>
        <li className=" hover:text-4xl hover:p-2 hover:text-orange-400">
          <Link href="/user/deliverynotes">Albaranes</Link>
        </li>
      </ul>
    </div>
  );
}

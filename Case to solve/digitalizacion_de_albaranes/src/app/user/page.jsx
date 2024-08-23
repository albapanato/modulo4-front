"use client";
import Link from "next/link";
import ShowClient from "@/app/components/ShowClient";

export default function PortalVirtual() {
  return (
    <div className="grid grid-row-2 gap-6">
      <div className="flex justify-evenly ">
        <div className="w-full border">Aqui va la barra de navegacion</div>
        <Link className="boton-volver tex" href="/user/client">
          {" "}
          Crear nuevo cliente
        </Link>
      </div>
      <div className="wrapper-page-p bg-blue-900 bg-opacity-70 rounded-lg p-4 max-md:mt-14">
        <div className="page-p">
          <ShowClient />
        </div>
      </div>
    </div>
  );
}

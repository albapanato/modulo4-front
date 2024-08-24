"use client";
import Link from "next/link";
import ShowClient from "@/app/components/ShowClient";
import { useState } from "react";

export default function PortalVirtual() {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para la barra de búsqueda

  return (
    <div className="grid grid-row-2 gap-6">
      <div className="flex items-center justify-center">
        {/* Barra de búsqueda */}
        <div className="w-full">
          <input
            type="text"
            placeholder="Buscar clientes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="w-2/4">
          <Link className="boton-volver tex" href="/user/client">
            Crear nuevo cliente
          </Link>
        </div>
      </div>

      <div className="wrapper-page-p bg-blue-900 bg-opacity-70 rounded-lg p-4 max-md:mt-14">
        <div className="page-p">
          <ShowClient searchTerm={searchTerm} />{" "}
          {/* Pasar el término de búsqueda */}
        </div>
      </div>
    </div>
  );
}

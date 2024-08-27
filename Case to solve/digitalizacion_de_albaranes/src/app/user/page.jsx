import Link from "next/link";
import ShowClient from "@/app/components/ShowClient";
import { Suspense } from "react";

export default function PortalVirtual() {
  return (
    <div className="">
      <div className="flex justify-end text-center p-2">
        <Link className="boton-3" href="/user/client">
          Agregar cliente
        </Link>
      </div>

      <div className="caja1 page-p text-center">
        <Suspense fallback={"Cargando lista de clientes..."}>
          <ShowClient />
        </Suspense>
      </div>
    </div>
  );
}

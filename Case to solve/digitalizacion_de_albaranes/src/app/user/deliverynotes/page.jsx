import Link from "next/link";
import ShowDeliverynote from "@/app/components/ShowDeliverynote";
import { Suspense } from "react";

export default function PortalVirtual() {
  return (
    <div className="p-2">
      <div className="flex justify-end text-center p-2">
        <Link
          className="font-bold text-white text-md p-3 bg-cyan-600  rounded-md"
          href="/user/deliverynotes/new"
        >
          Crear un nuevo albaran
        </Link>
      </div>
      <div className="caja1 page-p text-center">
        <Suspense fallback={"Cargando lista de albaranes..."}>
          <ShowDeliverynote />
        </Suspense>
      </div>
    </div>
  );
}

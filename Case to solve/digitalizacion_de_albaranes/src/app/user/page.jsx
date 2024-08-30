import Clients from "../components/Clients";
import { Suspense } from "react";

export default function PortalVirtual() {
  return (
    <div className="w-full h-full p-4 sm:p-12 md:p-16 lg:p-20">
      <div>
        <h1 className="text-white text-4xl text-center">CLIENTES</h1>
      </div>
      <div className="text-center">
        <Suspense fallback={"Cargando lista de clientes..."}>
          <Clients />
        </Suspense>
      </div>
    </div>
  );
}

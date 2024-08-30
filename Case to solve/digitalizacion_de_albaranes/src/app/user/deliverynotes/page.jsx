import { Suspense } from "react";
import Deliverynotes from "../../components/Deliverynotes";
export default function PortalVirtual() {
  return (
    <div className="p-2">
      <div>
        <h1 className="text-white text-4xl text-center">ALBARANES</h1>
      </div>
      <div className="text-center ">
        <Suspense fallback={"Cargando lista de albaranes..."}>
          <Deliverynotes />
        </Suspense>
      </div>
    </div>
  );
}

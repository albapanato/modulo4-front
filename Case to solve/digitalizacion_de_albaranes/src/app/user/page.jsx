import Clients from "../components/Clients";
import { Suspense } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

export default function PortalVirtual() {
  return (
    <div className="mt-[70px] h-full flex justify-center items-center flex-col custom-shadow backdrop-blur-lg bg-black/25">
      <div className="w-full h-full p-4 sm:p-12 md:p-16 lg:p-20">
        <Suspense fallback={<LoadingSpinner fullView />}>
          <Clients />
        </Suspense>
      </div>
    </div>
  );
}

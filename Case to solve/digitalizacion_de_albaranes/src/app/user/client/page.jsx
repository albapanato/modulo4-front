import ClientForm from "../../components/ClientForm";
import LoadingSpinner from "../../components/LoadingSpinner";
import { Suspense } from "react";
LoadingSpinner;

export default function NewClient() {
  return (
    <div className="mt-[70px] h-full flex justify-center items-center flex-col custom-shadow backdrop-blur-lg bg-black/25">
      <div className="w-full p-2 m-4 ">
        <Suspense fallback={<LoadingSpinner fullView />}>
          <ClientForm />
        </Suspense>
      </div>
    </div>
  );
}

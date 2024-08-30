import ClientForm from "../../components/ClientForm";
import LoadingSpinner from "../../components/LoadingSpinner";
import { Suspense } from "react";
LoadingSpinner;

export default function NewClient() {
  return (
    <div className="mt-10 flex justify-center items-center flex-col custom-shadow backdrop-blur-lg bg-black/25">
      <div className="page-p p-2 m-4">
        <Suspense fallback={<LoadingSpinner />}>
          <ClientForm />
        </Suspense>
      </div>
    </div>
  );
}

// import Link from "next/link";
import ProjectForm from "../../../components/ProjectForm";
import { Suspense } from "react";
import LoadingSpinner from "../../../components/LoadingSpinner";

export default function NewProject() {
  return (
    <div className="mt-[70px] h-full flex justify-center items-center flex-col custom-shadow backdrop-blur-lg bg-black/25">
      <div className="p-2 m-4 w-full">
        <Suspense fallback={<LoadingSpinner />}>
          <ProjectForm />
        </Suspense>
      </div>
    </div>
  );
}

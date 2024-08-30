import { Suspense } from "react";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import ModifyProjectById from "../../../../components/ProjectModifyById";

export default function EditProject() {
  return (
    <div className="mt-[70px] h-full flex justify-center items-center flex-col custom-shadow backdrop-blur-lg bg-black/25">
      <div className="p-2 m-4 w-full">
        <Suspense fallback={<LoadingSpinner />}>
          <ModifyProjectById />{" "}
        </Suspense>
      </div>
    </div>
  );
}

import { Suspense } from "react";
import LoadingSpinner from "../../../components/LoadingSpinner";
import ProjectID from "../../../components/ProjectID";

function ShowProject({ params }) {
  return (
    <div className="mt-[70px] h-full flex justify-center items-center flex-col custom-shadow backdrop-blur-lg bg-black/25">
      <div className="page-p p-2 m-4 w-full">
        <Suspense fallback={<LoadingSpinner fullView />}>
          <ProjectID id={params.id} />
        </Suspense>
      </div>
    </div>
  );
}
export default ShowProject;

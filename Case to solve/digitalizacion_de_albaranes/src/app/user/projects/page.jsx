import { Suspense } from "react";
import Projects from "../../components/Projects";
import LoadingSpinner from "../../components/LoadingSpinner";

export default function PortalProject() {
  return (
    <div className="mt-[70px] h-full flex justify-center items-center flex-col custom-shadow backdrop-blur-lg bg-black/25">
      <div className="w-full h-full p-4 sm:p-12 md:p-16 lg:p-20">
        <Projects />
      </div>
    </div>
  );
}

"use client";
import Link from "next/link";
import ProjectForm from "@/app/components/ProjectForm";

export default function NewProject() {
  return (
    <div className=" container flex w-2/3  flex-col justify-center p-10">
      <div className="text-center p-4">
        <Link
          className="border font-bold text-white text-2xl p-6 bg-orange-300 w-2/4 rounded-md"
          href="/user/projects"
        >
          {" "}
          Volver a proyectos
        </Link>
      </div>
      <div className="container flex col-auto  h-56 ">
        <div className="mt-10">
          <ProjectForm />
        </div>
      </div>
    </div>
  );
}

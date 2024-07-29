"use client";
import Link from "next/link";

export default function NewProject() {
  return (
    <div className=" container flex w-2/3 justify-center text-center p-10">
      <div>
        <Link
          className="border font-bold text-white text-2xl p-6 bg-orange-300 w-2/4 rounded-md"
          href="user/projects"
        >
          {" "}
          Volver a proyectos
        </Link>
        <div className="container flex col-auto  h-56 ">
          <h1 className="m-auto">Pagina en proceso....</h1>
        </div>
      </div>
    </div>
  );
}

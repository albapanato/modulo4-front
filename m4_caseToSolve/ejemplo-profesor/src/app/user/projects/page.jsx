"use client";
import Link from "next/link";
import ShowProject from "@/app/components/ShowProject";

export default function PortalProject() {
  return (
    <div>
      <div className=" container flex w-2/3 justify-center text-center p-10">
        <Link
          className="border font-bold text-white text-2xl p-6 bg-orange-300 w-2/4 rounded-md"
          href="/user/projects/new"
        >
          {" "}
          Crear un nuevo proyecto
        </Link>
      </div>
      <div className="flex border p-10 mt-10 justify-center w-2/3">
        <ShowProject />
      </div>
    </div>
  );
}

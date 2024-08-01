"use client";
import Link from "next/link";
import ShowDeliverynote from "@/app/components/ShowDeliverynote";

export default function PortalVirtual() {
  return (
    <div className="border w-full bg-blue-700">
      <div className=" container flex justify-center text-center p-10">
        <Link
          className="border font-bold text-white text-2xl p-6 bg-cyan-600 w-2/4 rounded-md"
          href="/user/deliverynotes/new"
        >
          {" "}
          Crear un nuevo albaran
        </Link>
      </div>
      <div className="page-p border p-2 m-4 ">
        <ShowDeliverynote />
      </div>
    </div>
  );
}

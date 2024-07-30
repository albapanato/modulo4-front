"use client";
import Link from "next/link";
import ShowDeliverynote from "@/app/components/ShowDeliverynote";

export default function PortalVirtual() {
  return (
    <div>
      <div className=" container flex w-2/3 justify-center text-center p-10">
        <Link
          className="border font-bold text-white text-2xl p-6 bg-cyan-600 w-2/4 rounded-md"
          href="/user/deliverynotes/note"
        >
          {" "}
          Crear un nuevo albaran
        </Link>
      </div>
      <div className="flex border p-10 mt-10 w-2/3">
        <ShowDeliverynote />
      </div>
    </div>
  );
}

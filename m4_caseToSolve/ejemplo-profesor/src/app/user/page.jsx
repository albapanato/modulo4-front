"use client";
import Link from "next/link";
import ShowClient from "@/app/components/ShowClient";

export default function PortalVirtual() {
  return (
    <div className="border w-full bg-blue-900">
      <div className=" container flex justify-center text-center p-10">
        <Link
          className="border font-bold text-white text-2xl p-6 bg-orange-300 w-2/4 rounded-md"
          href="/user/client"
        >
          {" "}
          Crear nuevo cliente
        </Link>
      </div>
      <div className="page-p border p-2 m-4">
        <ShowClient />
      </div>
    </div>
  );
}

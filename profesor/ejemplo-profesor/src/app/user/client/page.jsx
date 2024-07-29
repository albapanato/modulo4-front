"use client";
import ClientForm from "@/app/components/ClientForm";
import Link from "next/link";

export default function NewClient() {
  return (
    <main>
      <div className="container flex w-2/3 justify-center text-center p-10">
        <Link
          className="border font-bold text-white text-2xl p-6 bg-orange-300 w-52 rounded-md"
          href="/user"
        >
          Volver
        </Link>
      </div>
      <div className="flex border p-10 mt-10 w-2/3">
        <ClientForm />
      </div>
    </main>
  );
}

"use client";
import Link from "next/link";

export default function NewDeliverynote() {
  return (
    <div>
      <div className="container flex w-2/3 justify-center text-center p-10">
        <Link
          className="border font-bold text-white text-2xl p-6 bg-orange-300 w-52 rounded-md"
          href="/user/deliverynotes"
        >
          Volver
        </Link>
      </div>
      <div className="flex border p-10 mt-10 w-2/3">
        <h1>Indica en que formato deseas registrar tu albaran</h1>
      </div>
      <Link href="/user/deliverynotes/new/hour">Horas</Link>
      <Link href="/user/deliverynotes/new/material">Material</Link>
    </div>
  );
}

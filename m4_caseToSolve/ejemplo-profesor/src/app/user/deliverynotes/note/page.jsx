"use client";
import Link from "next/link";
import DeliverynoteForm from "@/app/components/DeliverynoteForm";

export default function NewDeliverynote() {
  return (
    <main>
      <div className="container flex w-2/3 justify-center text-center p-10">
        <Link
          className="border font-bold text-white text-2xl p-6 bg-orange-300 w-52 rounded-md"
          href="/user/deliverynotes"
        >
          Volver
        </Link>
      </div>
      <div className="flex border p-10 mt-10 w-2/3">
        <DeliverynoteForm />
      </div>
    </main>
  );
}

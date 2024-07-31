import ClientForm from "@/app/components/ClientForm";
import Link from "next/link";

export default function NewClient() {
  return (
    <div className="">
      <div className="container flex justify-center text-center p-10">
        <Link
          className="border font-bold text-white text-2xl p-6 bg-orange-300 w-52 rounded-md"
          href="/user"
        >
          Volver
        </Link>
      </div>
      <ClientForm />
    </div>
  );
}

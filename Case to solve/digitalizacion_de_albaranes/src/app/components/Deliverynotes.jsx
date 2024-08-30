import Link from "next/link";
import { listDeliverynote } from "../utils/deliverynotes";
import { cookies } from "next/headers";
import DelinoteBotonDelete from "./DelinoteBotonDelete";
import Image from "next/image";

export default async function Deliverynotes() {
  const allCookies = cookies();
  const token = allCookies.get("jwt")?.value;
  const deliverynoteData = await listDeliverynote(token);

  if (deliverynoteData.length === 0 || !deliverynoteData) {
    return (
      <>
        <div className="flex justify-center ">
          <div className="w-3/4 bg-white rounded-lg p-10">
            <div className="flex justify-center pt-10">
              <Image
                src="/img/noData.png"
                alt="imagen"
                width={300}
                height={300}
              />
            </div>
            <div className="pt-16">
              <h2 className="text-2xl ">
                ¡¡Uups!! Parece que no tienes ningún albaran!
              </h2>
              <p className="text-xl">Primero crea un cliente</p>
            </div>

            <div className="pt-10">
              <Link
                className="font-bold text-white text-md p-3 bg-[#3073f0ec] rounded-md"
                href="/user/deliverynotes/new"
              >
                Crear tu primer albaran
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
  // console.log("deliverynoteData: ", deliverynoteData);

  return (
    <div className="">
      {/* <div>
        <h1>Client Information</h1>
        <pre>{JSON.stringify(deliverynoteData, null, 2)}</pre>
      </div> */}

      <div className="flex justify-end mb-4">
        <Link
          className=" text-white text-md p-3 bg-[#3073f0ec] rounded-sm"
          href="/user/deliverynotes/new"
        >
          Agregar nuevo albaran
        </Link>
      </div>

      <table className="min-w-full bg-white">
        <thead className="sticky top-0">
          <tr>
            <th className="font-normal p-2 border-b-2 w-1/5 border-gray-200 bg-gray-100">
              PROYECTO
            </th>
            <th className="font-normal p-2 border-b-2 w-1/5 border-gray-200 bg-gray-100">
              EMAIL CLIENTE
            </th>
            <th className="font-normal p-2 border-b-2 w-1/5 border-gray-200 bg-gray-100">
              DESCRIPCIÓN ALBARÁN
            </th>
            <th className="font-normal p-2 border-b-2 w-1/5 border-gray-200 bg-gray-100">
              FORMATO
            </th>
            <th className="font-normal p-2 border-b-2 w-1/5 border-gray-200 bg-gray-100"></th>
          </tr>
        </thead>
        <tbody>
          {deliverynoteData.map((deliverynote) => (
            <tr className=" " key={deliverynote._id}>
              <td className="border-b p-3">
                <Link href={`/user/deliverynotes/${deliverynote._id}`}>
                  <span className="text-blue-500 hover:underline">
                    {deliverynote.projectId.name}
                  </span>
                </Link>
              </td>
              <td className="border-b p-3">{deliverynote.projectId.email}</td>
              <td className="border-b p-3">{deliverynote.description}</td>
              <td className="border-b p-3">{deliverynote.format}</td>
              <td className="border-b p-3">
                <DelinoteBotonDelete id={deliverynote._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

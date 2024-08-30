import Link from "next/link";
import { listClients } from "../utils/clients";
import { cookies } from "next/headers";
import ClientBotonDelete from "./ClientBotonDelete";
import Image from "next/image";

export default async function Clients() {
  const allCookies = cookies();
  const token = allCookies.get("jwt")?.value;
  const clientData = await listClients(token);

  if (clientData.length === 0 || !clientData) {
    return (
      <div className="flex justify-center ">
        <div className="w-3/4 bg-white rounded-lg p-10">
          <div className="flex justify-center">
            <Image
              src="/img/noData.png"
              alt="imagen"
              width={300}
              height={300}
            />
          </div>
          <div className="pt-16">
            <h2 className="text-2xl ">Crea tu primer Cliente</h2>
            <p className="p-4"> Para poder generar Albaranes digitales</p>
          </div>
          <div className="pt-10">
            <Link
              className="font-bold text-white text-md p-3 bg-[#3073f0ec] rounded-md"
              href="/user/client"
            >
              Si, vamos!
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="flex justify-end mb-4">
        <Link
          className="font-bold text-white text-md p-3 bg-[#3073f0ec] rounded-sm"
          href="/user/client"
        >
          Agregar nuevo cliente
        </Link>
      </div>
      <table className="min-w-full rounded-lg bg-white">
        <thead className="sticky top-0">
          <tr>
            <th className="font-normal p-2 border-b-2 border-gray-200 bg-gray-100">
              NOMBRE DEL CLIENTE
            </th>
            <th className="font-normal p-2 border-b-2 border-gray-200 bg-gray-100">
              ID
            </th>
            <th className="font-normal p-2 border-b-2 border-gray-200 bg-gray-100">
              CIF
            </th>
            <th className="font-normal p-2 border-b-2 border-gray-200 bg-gray-100"></th>
          </tr>
        </thead>
        <tbody>
          {clientData.map((client) => (
            <tr key={client._id}>
              <td className="border-b p-3">
                <Link href={`/user/client/${client._id}`}>
                  <span className="text-blue-500 hover:underline">
                    {client.name}
                  </span>
                </Link>
              </td>
              <td className="border-b p-3">{client._id}</td>
              <td className="border-b p-3">{client.cif}</td>
              <td className="border-b p-3">
                <ClientBotonDelete id={client._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { listClients } from "../utils/clients";
import ButtonLink from "./ButtonLink";
import ClientBotonDelete from "./ClientBotonDelete";

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
    <div className="h-full">
      <div className="flex justify-end mb-2">
        <ButtonLink
          text={"Nuevo cliente"}
          href="/user/client"
          className={"bg-indigo-600 text-white hover:bg-indigo-500"}
        />
      </div>
      <table className=" block min-w-full bg-transparent text-white max-h-[100%] overflow-scroll">
        <thead className="top-0 bg-transparent text-left">
          <tr>
            <th className="font-normal p-2 border-b-2 w-1/3">
              NOMBRE DEL CLIENTE
            </th>
            <th className="font-normal p-2 border-b-2 w-1/3">ID</th>
            <th className="font-normal p-2 border-b-2 w-1/3">CIF</th>
            <th className="font-normal p-2 border-b-2 w-1/3"></th>
          </tr>
        </thead>
        <tbody>
          {clientData.map((client) => (
            <tr key={client._id}>
              <td className="border-b p-3">{client.name}</td>
              <td className="border-b p-3">{client._id}</td>
              <td className="border-b p-3">{client.cif}</td>
              <td className="border-b p-3">
                <div className=" flex items-center gap-2">
                  <Link
                    className="block w-7 h-7"
                    href={`/user/client/${client._id}`}
                  >
                    <Image
                      src="/img/icons/view-white.png"
                      alt="view-icon"
                      width={24}
                      height={24}
                    />
                  </Link>
                  <ClientBotonDelete id={client._id} />
                  {/* 
                    <Image
                      src="/img/icons/edit-white.png"
                      alt="edit-icon"
                      width={24}
                      height={24}
                    />
                  </Link>
                   */}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

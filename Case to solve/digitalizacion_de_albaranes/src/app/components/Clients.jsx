import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { listClients } from "../utils/clients";
import ButtonLink from "./ButtonLink";
import ClientBotonDelete from "./ClientBotonDelete";
import EmptyData from "./EmptyData";

export default async function Clients() {
  const allCookies = cookies();
  const token = allCookies.get("jwt")?.value;
  const clientData = await listClients(token);

  if (clientData.length === 0 || !clientData) {
    return (
      <EmptyData
        h2={"¡¡Uups!!Parece que no tienes ningún cliente"}
        p={"Crea uno para poder generar albaranes digitales"}
        button={"Crear mi primer cliente"}
        href={"/user/client"}
      />
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
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

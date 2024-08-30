import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { listDeliverynote } from "../utils/deliverynotes";
import ButtonLink from "./ButtonLink";
import DelinoteBotonDelete from "./DelinoteBotonDelete";

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

  return (
    <div className="h-full">
      <div className="flex justify-end mb-2">
        <ButtonLink
          text={"Nuevo albarán"}
          href="/user/deliverynotes/new"
          className={"bg-indigo-600 text-white hover:bg-indigo-500"}
        />
      </div>
      <table className=" block min-w-full bg-transparent text-white max-h-[100%] overflow-scroll">
        <thead className="top-0 bg-transparent text-left">
          <tr>
            <th className="font-normal p-2 border-b-2 w-1/3">PROYECTO</th>
            <th className="font-normal p-2 border-b-2 w-1/3">EMAIL CLIENTE</th>
            <th className="font-normal p-2 border-b-2 w-1/3">
              DESCRIPCIÓN ALBARÁN
            </th>
            <th className="font-normal p-2 border-b-2 w-1/3">FORMATO</th>
            <th className="font-normal p-2 border-b-2 w-1/3"></th>
          </tr>
        </thead>
        <tbody>
          {deliverynoteData.map((deliverynote) => (
            <tr className=" " key={deliverynote._id}>
              <td className="border-b p-3">{deliverynote.projectId.name}</td>
              <td className="border-b p-3">{deliverynote.projectId.email}</td>
              <td className="border-b p-3">{deliverynote.description}</td>
              <td className="border-b p-3">{deliverynote.format}</td>
              <td className="border-b p-3">
                <div className=" flex items-center gap-2">
                  <Link
                    className="block w-7 h-7"
                    href={`/user/deliverynotes/${deliverynote._id}`}
                  >
                    <Image
                      src="/img/icons/view-white.png"
                      alt="view-icon"
                      width={24}
                      height={24}
                    />
                  </Link>
                  <DelinoteBotonDelete id={deliverynote._id} />
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

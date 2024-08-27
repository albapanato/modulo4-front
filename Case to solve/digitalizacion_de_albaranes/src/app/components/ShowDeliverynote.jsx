import Link from "next/link";
import { listDeliverynote } from "../utils/user";
import { cookies } from "next/headers";

import ImageRandom from "./ImageRandom";

export default async function ShowDeliverynote() {
  const allCookies = cookies();
  const token = allCookies.get("jwt")?.value;

  const deliverynoteData = await listDeliverynote(token);

  if (deliverynoteData.length === 0 || !deliverynoteData) {
    return (
      <>
        <div className="">
          <h2 className="text-2xl">
            Parece que no tienes ningún albaran todavia!
          </h2>
          <div className=" text-center mt-20 mb-10">
            <Link
              href="/user/deliverynotes/note"
              className="rounded-sm text-white font-bold bg-cyan-700 w-fit p-4"
            >
              Crea tu primer albaran
            </Link>
          </div>
        </div>
      </>
    );
  }
  console.log("deliverynoteData: ", deliverynoteData);

  return (
    <div>
      {/* <div>
        <h1>Client Information</h1>
        <pre>{JSON.stringify(deliverynoteData, null, 2)}</pre>
      </div> */}

      <table className="min-w-full bg-white">
        <thead className="sticky top-0">
          <tr>
            <th className=" py-2 px-4 border-b-2 border-gray-200 bg-gray-100">
              EMPRESA
            </th>
            <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100">
              FORMATO
            </th>
            <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100">
              ID CLIENTE
            </th>
            <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100"></th>
          </tr>
        </thead>
        <tbody>
          {deliverynoteData.map((deliverynote) => (
            <tr className=" " key={deliverynote._id}>
              <td className="border-b">
                <Link href={`/user/deliverynotes/${deliverynote._id}`}>
                  <span className="text-blue-500 hover:underline">
                    {deliverynote.projectId.name}
                  </span>
                </Link>
              </td>
              <td className="border-b">{deliverynote.format}</td>
              <td className="border-b">{deliverynote.clientId}</td>
              <td className="border-b w-44">
                <div className="">
                  <ImageRandom />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

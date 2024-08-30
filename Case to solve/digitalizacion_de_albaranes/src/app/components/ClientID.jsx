import { cookies } from "next/headers";
import { infoClient } from "../utils/clients";
import ButtonLink from "./ButtonLink";

export default async function ClientID({ id }) {
  const allCookies = cookies();
  const token = allCookies.get("jwt")?.value;
  const client = await infoClient(id, token); // Cambiar storedToken por token
  if (client.error) {
    return (
      <div> Se ha producido un error al cargar la informacion del cliente</div>
    );
  }

  return (
    <div className="p-4 mx-auto w-2/4 text-white">
      <div className="flex gap-4 justify-between items-center">
        <h1 className="text-white w-full text-2xl md:text-3xl self-center font-bold leading-tight px-4 md:px-0">
          {client.name}
        </h1>

        <div className="flex justify-end gap-4">
          <ButtonLink
            href="/user"
            text={"Volver"}
            className={
              "block text-center text-white  bg-yellow-500 hover:bg-yellow-700"
            }
          />
        </div>
      </div>
      <p>
        Calle {client.address.street} {client.address.number} -{" "}
        {client.address.city}, {client.address.province}
      </p>
    </div>
  );
}

import { cookies } from "next/headers";
import { infoClient } from "../utils/clients";

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
    <div className="w-3/4">
      <div className="flex justify-center "></div>
      <h1>
        <strong> {client.name}</strong>
      </h1>
      <p>
        Calle {client.address.street} {client.address.number} -{" "}
        {client.address.city}, {client.address.province}
      </p>
    </div>
  );
}

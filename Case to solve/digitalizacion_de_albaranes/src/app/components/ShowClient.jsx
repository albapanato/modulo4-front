import Link from "next/link";
import { listClient } from "../utils/user";
import { useEffect, useState } from "react";
import ImageRandom from "./ImageRandom";

export default function ShowClient({ searchTerm }) {
  // Recibir el término de búsqueda como prop
  const [token, setToken] = useState(null);
  const [clientData, setClientData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("jwt");
      setToken(storedToken);
      console.log("token :", storedToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      const fetchClientData = async () => {
        try {
          const recordClient = await listClient(token);
          setClientData(recordClient);
        } catch (err) {
          setError(err.message);
        }
      };

      fetchClientData();
    }
  }, [token]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (clientData.length === 0 || !clientData) {
    return (
      <div>
        <h2 className="text-2xl">Parece que no tienes ningún cliente!</h2>
        <p className="text-xl">
          Crea un para poder generar Albaranes digitales
        </p>
        <Link href="/user/client" className="rounded-sm bg-cyan-700 w-fit p-2">
          Empieza pulsando este botón
        </Link>
      </div>
    );
  }

  // Filtrar los clientes según el término de búsqueda recibido como prop
  const filteredClients = clientData.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.cif.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client._id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full text-left">
      <div className="mx-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100">
                ID
              </th>
              <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100">
                NOMBRE
              </th>
              <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100">
                CIF
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.length > 0 ? (
              filteredClients.map((client) => (
                <tr key={client._id}>
                  <td className="py-2 px-4 border-b">
                    <Link href={`/user/client/${client._id}`}>
                      <span className="text-blue-500 hover:underline">
                        {client.name}
                      </span>
                    </Link>
                  </td>
                  <td className="py-2 px-4 border-b">{client._id}</td>
                  <td className="py-2 px-4 border-b">{client.cif}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center py-4">
                  No se encontró ningun cliente con ese nombre.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

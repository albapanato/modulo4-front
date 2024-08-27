import Link from "next/link";
import { listClient } from "../utils/user";
import ImageRandom from "./ImageRandom";
import { cookies } from "next/headers";

export default async function ShowClient() {
  const allCookies = cookies();
  const token = allCookies.get("jwt")?.value;
  // Recibir el término de búsqueda como prop
  // const [token, setToken] = useState(null);
  // const [clientData, setClientData] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const storedToken = localStorage.getItem("jwt");
  //     setToken(storedToken);
  //     console.log("token :", storedToken);
  //   }
  // }, []);

  const clientData = await listClient(token);

  // useEffect(() => {
  //   if (token) {
  //     const fetchClientData = async () => {
  //       try {
  //         setClientData(recordClient);
  //       } catch (err) {
  //         setError(err.message);
  //       }
  //     };

  //     fetchClientData();
  //   }
  // }, [token]);

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
  // const filteredClients = clientData.filter(
  //   (client) =>
  //     client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     client.cif.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     client._id.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <div className="w-full text-left">
      <div className="mx-auto">
        <table className="min-w-full bg-white">
          <thead className="sticky top-0">
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
            {clientData.map((client) => (
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

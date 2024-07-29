import Link from "next/link";
import { listClient } from "@/app/utils/user";
import { useEffect, useState } from "react";

export default function ShowClient() {
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
          const recordClient = await listClient(token); // Cambiar storedToken por token
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
  if (clientData.length === 0) {
    return (
      <>
        <div className="w-[600px] ">
          <h2 className="text-2xl">Parece que no tienes ningún cliente!</h2>
          <p className="text-xl">
            Crea un para poder generar Albaranes digitales
          </p>
          <Link
            href="/user/client"
            className="rounded-sm bg-cyan-700 w-fit p-2"
          >
            Empieza pulsando este boton
          </Link>
        </div>
      </>
    );
  }

  return (
    <div>
      <h1>Client Information</h1>
      <pre>{JSON.stringify(clientData, null, 2)}</pre>
    </div>
  );
}

import Link from "next/link";
import { listClient } from "../utils/user";
import { useEffect, useState } from "react";
import ImageRandom from "./ImageRandom";

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
  if (clientData.length === 0 || !clientData) {
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
  // console.log(clientData);

  return (
    <div>
      {/* <div>
        <h1>Client Information</h1>
        <pre>{JSON.stringify(clientData, null, 2)}</pre>
      </div> */}

      <div className="grid grid-cols-1 w-full text-right">
        <div className="mx-auto">
          {clientData.map((client) => (
            <div key={client._id} className="flex justify-center items-center">
              <div className="flex justify-center items-center bg-blue-100 p-4 m-4 rounded-md w-full ">
                <Link key={client._id} href={`/user/client/${client._id}`}>
                  {" "}
                  <div>
                    <h2 className=" text-lg text-orange-600  text-rigth font-bold">
                      {" "}
                      {client.name}
                    </h2>
                    <h5>_id: {client._id}</h5>
                    <h5>userId: {client.userId}</h5>
                  </div>
                </Link>
                <div>
                  <ImageRandom />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

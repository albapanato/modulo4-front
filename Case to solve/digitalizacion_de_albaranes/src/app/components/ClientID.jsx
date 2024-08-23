import { infoClient } from "../utils/user";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ClientID({ id }) {
  const [token, setToken] = useState(null);
  const [recordClient, setRecordClient] = useState({});
  const [error, setError] = useState(null);
  const [logoUrl, setLogoUrl] = useState("");

  useEffect(() => {
    const fetchRandomLogo = async () => {
      try {
        const randomText = Math.random().toString(36).substring(7); // Genera un texto aleatorio
        const url = `https://robohash.org/${randomText}`;
        setLogoUrl(url);
      } catch (error) {
        console.error("Error fetching the logo:", error);
      }
    };

    fetchRandomLogo();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("jwt");
      setToken(storedToken);
      localStorage.setItem("clientId", id); // Guardamos el ID del cliente en localStorage
      console.log("id en ClientID", id);
    }
  }, [id]);

  useEffect(() => {
    if (token) {
      const fetchClientDataByID = async () => {
        try {
          const recordClient = await infoClient(id, token); // Cambiar storedToken por token
          setRecordClient(recordClient);
          console.log("recordClient:", recordClient);
        } catch (err) {
          setError(err.message);
        }
      };

      fetchClientDataByID();
    }
  }, [token, id]);

  if (error) {
    return <div> Error: {error}</div>;
  }

  return (
    <div className=" bg-white text-black p-4 rounded-lg shadow-lg">
      <div className="flex justify-center ">
        <button className="bg-red-600 rounded-lg p-2 cursor-pointer">
          BORRAR USUARIO
        </button>
      </div>
      <h1 className="text-2xl font-bold text-center">
        Information del cliente:{" "}
      </h1>
      <div className="flex">
        <div
          className="logo-container"
          style={{ textAlign: "center", margin: "20px" }}
        >
          {logoUrl ? (
            <img
              src={logoUrl}
              alt="Random Logo"
              style={{ width: "100px", height: "100px" }}
            />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <pre>{JSON.stringify(recordClient, null, 2)}</pre>

      {/* <h1>
        <strong>{recordClient.name}</strong>
      </h1>
      <h2>{recordClient._id}</h2>

      <p>Calle: {recordClient.address?.street}</p>
      <p>Número: {recordClient.address?.number}</p>
      <p>Código Postal: {recordClient.address?.postal}</p>
      <p>Ciudad: {recordClient.address?.city}</p>
      <p>Provincia: {recordClient.address?.province}</p> */}

      <div className=" text-white text-xl font-bold w-56 bg-cyan-500 p-3 mb-4 text-center mx-auto rounded-lg">
        <Link className="cursor-pointer" href="/user/projects/new ">
          Asignar un proyecto a este cliente
        </Link>
      </div>
    </div>
  );
}

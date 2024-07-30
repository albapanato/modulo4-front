import { infoClient } from "../utils/user";
import { useEffect, useState } from "react";

export default function ClientID({ id }) {
  const [token, setToken] = useState(null);
  const [recordClient, setRecordClient] = useState([]);
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
  console.log("id en CLientID", id);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("jwt");
      setToken(storedToken);
      console.log("token :", storedToken);
    }
  }, []);

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
  }, [token]);

  if (error) {
    return <div> Error: {error}</div>;
  }

  return (
    <div className="container border w-full">
      <div className="flex">
        <h1>{recordClient.name}</h1>
        <div
          className="logo-container"
          style={{ textAlign: "center", margin: "20px" }}
        >
          {logoUrl ? (
            <img
              src={logoUrl}
              alt="Random Logo"
              style={{ width: "200px", height: "200px", borderRadius: "8px" }}
            />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <p>
          <strong>Calle:</strong> {recordClient.address?.street}
        </p>
        <p>
          <strong>Número:</strong> {recordClient.address?.number}
        </p>
        <p>
          <strong>Código Postal:</strong> {recordClient.address?.postal}
        </p>
        <p>
          <strong>Ciudad:</strong> {recordClient.address?.city}
        </p>
        <p>
          <strong>Provincia:</strong> {recordClient.address?.province}
        </p>
      </div>
    </div>
  );
}

import Link from "next/link";
import { listDeliverynote } from "../utils/user";
import { useEffect, useState } from "react";

export default function ShowDeliverynote() {
  const [token, setToken] = useState(null);
  const [deliverynoteData, setDeliverynoteData] = useState([]);
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
          const recordDeliverynote = await listDeliverynote(token); // Cambiar storedToken por token
          setDeliverynoteData(recordDeliverynote);
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
  if (deliverynoteData.length === 0 || !deliverynoteData) {
    return (
      <>
        <div className="container text-center">
          <h2 className="text-2xl p-4">
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
  console.log(deliverynoteData);

  return (
    <div>
      {/* <div>
        <h1>Client Information</h1>
        <pre>{JSON.stringify(deliverynoteData, null, 2)}</pre>
      </div> */}

      <div className="grid grid-cols-1 w-full">
        <div className="flex">
          <div>
            {deliverynoteData.map((deliveryNotes) => (
              <div className="flex justify-center items-center">
                <div className="flex justify-center">
                  <Link
                    href={`/user/deliveryNotes/${deliveryNotes._id}`}
                    key={deliveryNotes.id}
                  >
                    {" "}
                    <h5> {deliveryNotes.name}</h5>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

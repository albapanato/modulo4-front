import { useEffect, useState } from "react";
import { infoDeliverynote } from "../utils/user";
import { downloadDeliveryNotePDFclient, getCookie } from "../utils/services";

export default function DeliverynoteID({ id }) {
  const [recordDeliverynote, setRecordDeliverynote] = useState(undefined);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = getCookie("jwt");
    if (token && id) {
      console.log("entra");
      const fetchDeliverynoteByID = async () => {
        try {
          const recordDeliverynote = await infoDeliverynote(id, token);
          setRecordDeliverynote(recordDeliverynote);
        } catch (err) {
          setError(err.message);
        }
      };
      fetchDeliverynoteByID();
    }
  }, [id]);

  const handleDownloadPDF = async (id) => {
    // const token = localStorage.getItem("jwt");
    const token = getCookie("jwt");
    // TODO: cambiar en cliente localStorage.getItem("jwt") --> getCookie("jwt");
    try {
      console.log("entra");
      await downloadDeliveryNotePDFclient(id, token);
      console.log("sale");
    } catch (error) {
      console.error("Error al descargar el PDF del albarán:", error);
      alert(`Error al descargar el PDF: ${error.message}`);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log(recordDeliverynote);
  return (
    <>
      {recordDeliverynote && (
        <div>
          <div className="flex">
            <button
              className="boton-3"
              onClick={(e) => {
                // e.stopPropagation();
                handleDownloadPDF(recordDeliverynote._id);
              }}
            >
              DESCARGAR PDF
            </button>
          </div>

          {/* <pre>{JSON.stringify(recordDeliverynote, null, 2)}</pre> */}
          <div className="fondo" id="para-PDF">
            <div className="ml-4">
              <p>Nombre del trabajador: {recordDeliverynote.name}</p>
              <p>Formato albaran : {recordDeliverynote.format}</p>
              <p>Creado : {recordDeliverynote.date}</p>
              <p>Proyecto : {recordDeliverynote.projectName}</p>
              <p>Código del proyecto : {recordDeliverynote.project}</p>
              <p>Descripción : {recordDeliverynote.description}</p>
              <div className="ml-2">
                <p>Cliente : {recordDeliverynote.client.name}</p>
                <p>CIF : {recordDeliverynote.client.cif}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

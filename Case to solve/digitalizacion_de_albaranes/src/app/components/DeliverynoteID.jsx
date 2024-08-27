// import { useEffect, useState } from "react";
import { infoDeliverynote } from "../utils/user";
// import { downloadDeliveryNotePDFclient, getCookie } from "../utils/services";
import { cookies } from "next/headers";
import BotonPDF from "./BotonPDF";

export default async function DeliverynoteID({ id }) {
  // const [recordDeliverynote, setRecordDeliverynote] = useState(undefined); // al intentar pintar la info de recordDeliverynote antes de hacer la llamada, tiraba error, cambiado de {} a undefined
  // const [error, setError] = useState(null);
  const allCookies = cookies();
  const token = allCookies.get("jwt")?.value;
  console.log("----------------------", token);
  const recordDeliverynote = await infoDeliverynote(id, token);
  // recorDeliveryNote = { error:true }
  if (recordDeliverynote.error) {
    return <div>Ha habido un error</div>;
  }

  // useEffect(() => {
  //   const token = getCookie("jwt");
  //   if (token && id) {
  //     console.log("entra");
  //     const fetchDeliverynoteByID = async () => {
  //       const recordDeliverynote = await infoDeliverynote(id, token);
  //       try {
  //         setRecordDeliverynote(recordDeliverynote);
  //       } catch (err) {
  //         setError(err.message);
  //       }
  //     };
  //     fetchDeliverynoteByID();
  //   }
  // }, [id]);

  // const handleDownloadPDF = async (id) => {
  //   // const token = localStorage.getItem("jwt");
  //   const token = getCookie("jwt");
  //   // TODO: cambiar en cliente localStorage.getItem("jwt") --> getCookie("jwt");
  //   try {
  //     console.log("entra");
  //     await downloadDeliveryNotePDFclient(id, token);
  //     console.log("sale");
  //   } catch (error) {
  //     console.error("Error al descargar el PDF del albarán:", error);
  //     alert(`Error al descargar el PDF: ${error.message}`);
  //   }
  // };

  console.log(recordDeliverynote);
  return (
    <>
      {recordDeliverynote && (
        <div>
          <BotonPDF id={id} token={token} />
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

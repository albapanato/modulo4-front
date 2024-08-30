import { infoDeliverynote } from "../utils/deliverynotes";
import { cookies } from "next/headers";
import BotonPDF from "./DeliverynotePDF";
import ImageRandom from "../components/ImageRandom";

export default async function DeliverynoteID({ id }) {
  const allCookies = cookies();
  const token = allCookies.get("jwt")?.value;
  console.log("----------------------", token);
  const recordDeliverynote = await infoDeliverynote(id, token);
  // recorDeliveryNote = { error:true }
  if (recordDeliverynote.error) {
    return <div>Ha habido un error</div>;
  }

  console.log("------>");
  console.log("recordDeliverynote ------> ", recordDeliverynote);
  return (
    <>
      {recordDeliverynote && (
        <div>
          <BotonPDF id={id} token={token} />
          {/* <pre>{JSON.stringify(recordDeliverynote, null, 2)}</pre> */}
          <div className="fondo" id="para-PDF">
            <div className="p-3">
              <ImageRandom />
            </div>
            <div className="ml-4">
              <p>Nombre del trabajador : {recordDeliverynote.name}</p>
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

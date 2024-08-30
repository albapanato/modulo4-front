import { cookies } from "next/headers";
import { infoDeliverynote } from "../utils/deliverynotes";
import ButtonLink from "./ButtonLink";
import BotonPDF from "./DeliverynotePDF";

export default async function DeliverynoteID({ id }) {
  const allCookies = cookies();
  const token = allCookies.get("jwt")?.value;
  const recordDeliverynote = await infoDeliverynote(id, token);
  // recorDeliveryNote = { error:true }
  if (recordDeliverynote.error) {
    return <div>Ha habido un error</div>;
  }

  return (
    <div className="p-4 mx-auto w-2/4 text-white">
      <div className="flex gap-4 justify-between items-center">
        <h1 className="text-white w-full text-2xl md:text-3xl self-center font-bold leading-tight px-4 md:px-0">
          Información de Albarán
        </h1>
        <div className="flex justify-end gap-4 items-center">
          <ButtonLink
            href="/user/deliverynotes"
            text={"Volver"}
            className={
              "block text-center text-white  bg-yellow-500 hover:bg-yellow-700"
            }
          />
          <BotonPDF id={id} token={token} />
        </div>
      </div>
      <div>
        <h2 className="text-xl mt-4 font-bold">
          Tipo : {recordDeliverynote.format}
        </h2>
        <p>Trabajador: {recordDeliverynote.name}</p>
        <h2 className="text-xl mt-4 font-bold">
          Cliente: {recordDeliverynote.client.name}
        </h2>
        <p>{recordDeliverynote.client.cif}</p>
        <h2 className="text-xl mt-4 font-bold">
          Proyecto: {recordDeliverynote.projectName} -{" "}
          {recordDeliverynote.project}
        </h2>

        <h2 className="text-xl mt-4 font-bold">Detalles</h2>
        <p>Creado : {recordDeliverynote.date}</p>
        <p>Descripción : {recordDeliverynote.description}</p>
      </div>
    </div>
  );
}

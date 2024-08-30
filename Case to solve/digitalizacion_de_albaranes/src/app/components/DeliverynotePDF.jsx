"use client";
import { downloadDeliveryNotePDFclient } from "../utils/services";

export default function BotonPDF({ id, token }) {
  const handleDownloadPDF = async (id) => {
    try {
      console.log("entra");
      await downloadDeliveryNotePDFclient({
        id,
        token,
        quantity: 10,
        price: 3000,
      });
      console.log("sale");
    } catch (error) {
      console.error("Error al descargar el PDF del albarán:", error);
      alert(`Error al descargar el PDF: ${error.message}`);
    }
  };

  return (
    <div className="flex">
      <button
        className="boton-3"
        onClick={(e) => {
          // e.stopPropagation();
          handleDownloadPDF(id);
        }}
      >
        DESCARGAR PDF
      </button>
    </div>
  );
}

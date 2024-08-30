"use client";
import { useState } from "react";
import { downloadDeliveryNotePDFclient } from "../utils/services";
import Button from "./Button";
import LoadingSpinner from "./LoadingSpinner";

export default function BotonPDF({ id, token }) {
  const [loading, setLoading] = useState(false);
  const handleDownloadPDF = async (id) => {
    setLoading(true);
    try {
      await downloadDeliveryNotePDFclient({
        id,
        token,
        quantity: 10,
        price: 3000,
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error al descargar el PDF del albarán:", error);
      alert(`Error al descargar el PDF: ${error.message}`);
    }
  };

  return (
    <div className="w-[142px] h-10 flex flex-col justify-center items-center">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Button
          onClick={() => {
            handleDownloadPDF(id);
          }}
          text={"Descargar PDF"}
          className={
            "block text-center text-white  w-max bg-indigo-700 hover:bg-indigo-900"
          }
        />
      )}
    </div>
  );
}

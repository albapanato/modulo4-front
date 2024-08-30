"use client";
import { getCookie } from "../utils/services";
import { deleteDeliverynote } from "../utils/deliverynotes";
import Image from "next/image";

export default function DelinoteBotonDelete({ id }) {
  const handleDelete = async (id) => {
    const token = getCookie("jwt");
    try {
      await deleteDeliverynote(id, token);
      alert("Albaran eliminado con éxito");
    } catch (error) {
      console.error("Error al eliminar el albarán:", error);
    }
  };
  return (
    <div>
      <button
        className="w-7 h-7"
        onClick={() => {
          handleDelete(id);
        }}
      >
        <Image
          src="/img/icons/delete-white.png"
          alt="delete-icon"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
}

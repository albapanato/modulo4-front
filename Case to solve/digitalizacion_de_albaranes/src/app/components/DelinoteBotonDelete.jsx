"use client";
import { getCookie } from "../utils/services";
import { deleteDeliverynote } from "../utils/deliverynotes";

export default function DelinoteBotonDelete({ id }) {
  console.log("----id boton borrar : ", id);
  const handleDelete = async (id) => {
    const token = getCookie("jwt");
    console.log(token);
    try {
      await deleteDeliverynote(id, token);
      alert("Albaran eliminado con éxito");

      //   window.location.reload(); // recarga la pagina, funcion de js
    } catch (error) {
      console.error("Error al eliminar el albarán:", error);
    }
  };
  return (
    <div>
      <button
        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        onClick={() => {
          handleDelete(id);
        }}
      >
        Eliminar
      </button>
    </div>
  );
}

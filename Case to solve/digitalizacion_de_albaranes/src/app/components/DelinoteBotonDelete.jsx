"use client";
import { getCookie } from "../utils/services";
import { deleteDeliverynote } from "../utils/deliverynotes";
import Image from "next/image";
// import { useRouter } from "next/navigation";

export default function DelinoteBotonDelete({ id, setNotification }) {
  // const router = useRouter();
  const handleDelete = async (id) => {
    const token = getCookie("jwt");
    try {
      await deleteDeliverynote(id, token);
      setNotification({
        text: "Albarán eliminado con éxito",
        type: "success",
        visible: true,
      });
      // setTimeout(() => {
      //   router.refresh(); // O utiliza revalidatePath("/user/deliverynotes") si usas la API para revalidar rutas
      // }, 3000);
    } catch (error) {
      setNotification({
        text: "Error al borrar el albarán",
        type: "error",
        visible: true,
      });
    }
  };
  return (
    <>
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
    </>
  );
}

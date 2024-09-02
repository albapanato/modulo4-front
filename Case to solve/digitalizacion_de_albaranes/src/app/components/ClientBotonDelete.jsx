"use client";
import { getCookie } from "../utils/services";
import { deleteClient } from "../utils/clients";
import Image from "next/image";
import Notification from "./Notification";
import { useState } from "react";

export default function ClientBotonDelete({ id }) {
  const [notification, setNotification] = useState({
    text: "",
    type: "",
    visible: false,
  });
  const handleDelete = async (id) => {
    const token = getCookie("jwt");
    console.log(token);
    try {
      await deleteClient(id, token);
      setNotification({
        text: "Cliente eliminado con éxito",
        type: "success",
        visible: true,
      });
    } catch (error) {
      setNotification({
        text: "Error al eliminar el cliente",
        type: "error",
        visible: true,
      });
    }
  };
  return (
    <>
      {notification.visible && (
        <Notification
          message={notification.text}
          type={notification.type}
          onClose={() => {
            setNotification({ text: "", type: "", visible: false });
          }}
        />
      )}
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

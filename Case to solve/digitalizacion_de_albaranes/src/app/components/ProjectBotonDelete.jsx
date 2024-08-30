"use client";
import { getCookie } from "../utils/services";
import { deleteProject } from "../utils/projects";
import Image from "next/image";

export default function ProjectBotonDelete({
  id,
  setNotification,
  setUpdateProjects,
  updateProjects,
}) {
  const handleDelete = async (id) => {
    const token = getCookie("jwt");
    try {
      await deleteProject(id, token);
      setNotification({
        visible: true,
        text: "Proyecto eliminado con éxito",
        type: "success",
      });
      setUpdateProjects(!updateProjects);
    } catch (error) {
      setNotification({
        text: "No se ha podido eliminar al projecto",
        type: "error",
        visible: true,
      });
    }
  };
  return (
    <div>
      <button onClick={() => handleDelete(id)} className="w-7 h-7">
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

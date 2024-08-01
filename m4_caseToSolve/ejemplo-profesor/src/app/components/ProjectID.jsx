import { infoProject } from "../utils/user";
import { useEffect, useState } from "react";
import ModifyProjectById from "./ModifyProjectById";
import Link from "next/link";

import DelinoteFormMaterial from "./DelinoteFormMaterial";
import DelinoteHorsForm from "./DelinoteFormHours";

export default function ProjectID({ id }) {
  const [token, setToken] = useState(null);
  const [recordProject, setRecordProject] = useState({});
  const [error, setError] = useState(null);
  const [showModifyForm, setShowModifyForm] = useState(false); // mostrar/ocultar el formulario de modificación
  const [storeProjectID, setProjectID] = useState(null);
  const [storeClientID, setClientID] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("jwt");
      setToken(storedToken);
      localStorage.setItem("_id", id); // Guardamos el ID del cliente en localStorage
      console.log("id del proyecto", id);
    }
  }, [id]);

  //
  useEffect(() => {
    if (token) {
      const fetchClientDataByID = async () => {
        try {
          const recordProject = await infoProject(id, token); // Cambiar storedToken por token
          setRecordProject(recordProject);
          setClientID(recordProject.clienId);
          setProjectID(recordProject._id);
          console.log("recordProject:", recordProject);
          console.log("recordProject.clientId:", recordProject.clientId);
          console.log("recordProject.projectId:", recordProject._id);
        } catch (err) {
          setError(err.message);
        }
      };

      fetchClientDataByID();
    }
  }, [token, id, storeClientID, storeProjectID]);

  if (error) {
    return <div> Error: {error}</div>;
  }

  return (
    <div>
      <h1>Client Information</h1>
      <pre>{JSON.stringify(recordProject, null, 2)}</pre>
      <button
        className="mt-4 p-2 bg-blue-500 text-white"
        onClick={() => setShowModifyForm(!showModifyForm)}
      >
        Modificar Información
      </button>
      {showModifyForm && <ModifyProjectById projectId={id} />}
      {<DelinoteFormMaterial clienID={clienId} projectID={projectId} /> && (
        <Link href="/user/deliverynotes/new/material">
          {" "}
          Agregar un albaran material
        </Link>
      )}
      {<DelinoteHorsForm clienID={clienId} projectID={projectId} /> && (
        <Link href="/user/deliverynotes/new/material">
          {" "}
          Agregar un albaran horas
        </Link>
      )}
    </div>

    // <div className="container border w-full">
    //   <h1>{recordProject.name}</h1>
    //   <h2>{recordProject._id}</h2>
    //   <ImageRandom />
    //   <div className="flex"></div>
    //   <div className="grid grid-cols-2 gap-4">
    //     <p>
    //       <strong>Calle:</strong> {recordProject.address?.street}
    //     </p>
    //     <p>
    //       <strong>Número:</strong> {recordProject.address?.number}
    //     </p>
    //     <p>
    //       <strong>Código Postal:</strong> {recordProject.address?.postal}
    //     </p>
    //     <p>
    //       <strong>Ciudad:</strong> {recordProject.address?.city}
    //     </p>
    //     <p>
    //       <strong>Provincia:</strong> {recordProject.address?.province}
    //     </p>
    //   </div>
    //   <div className=" text-white text-xl font-bold w-56 bg-cyan-500 p-3 mb-4 text-center mx-auto rounded-lg">
    //     <Link href="/user/projects/new ">
    //       Asignar un proyecto a este cliente
    //     </Link>
    //   </div>
    // </div>
  );
}

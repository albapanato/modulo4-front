import { cookies } from "next/headers";
import { infoClient } from "../utils/clients";
import { infoProject } from "../utils/projects";
import ButtonLink from "./ButtonLink";

export default async function ProjectID({ id }) {
  const allCookies = cookies();
  const token = allCookies.get("jwt")?.value;
  const project = await infoProject(id, token);
  const client = await infoClient(project.clientId, token);

  return (
    <div className="p-4 mx-auto w-2/4 text-white">
      <div className="flex gap-4 justify-between items-center">
        <h1 className="text-white w-full text-2xl md:text-3xl self-center font-bold leading-tight px-4 md:px-0">
          Proyecto {project.name}
        </h1>

        <div className="flex justify-end gap-4">
          <ButtonLink
            href="/user/projects"
            text={"Volver"}
            className={
              "block text-center text-white  bg-yellow-500 hover:bg-yellow-700"
            }
          />
          <ButtonLink
            href={`/user/projects/edit/${id}`}
            text={"Editar"}
            className={
              "block text-center text-white   bg-indigo-700 hover:bg-indigo-900"
            }
          />
        </div>
      </div>
      <div>
        <p>Código: {project.code}</p>
        <h2 className="text-xl mt-4 font-bold">Cliente: {client.name}</h2>
        <p>{project.email}</p>

        <h3 className="text-lg mt-1">Dirección</h3>
        <p>
          Calle {project.address.street} {project.address.number}
        </p>
        <p>
          {project.address.city}, {project.address.province}
        </p>
        <p>CP: {project.address.postal}</p>
      </div>
    </div>
  );
}

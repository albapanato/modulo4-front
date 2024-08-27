import Link from "next/link";
import { listProject } from "@/app/utils/user";
import { cookies } from "next/headers";
import ImageRandom from "./ImageRandom";

export default async function ShowProject() {
  const allCookies = cookies();
  const token = allCookies.get("jwt")?.value;
  const projectData = await listProject(token);

  if (projectData.length === 0) {
    return (
      <>
        <div className="">
          <h2 className="text-2xl">Parece que no tienes ningún projecto!</h2>
          <p className="text-xl">
            Crea un para poder generar Albaranes digitales
          </p>
        </div>
      </>
    );
  }
  console.log(projectData);

  return (
    <div>
      <div className="grid grid-cols-1 w-full text-left">
        <div className="mx-auto">
          {projectData.map((project) => (
            <div
              key={project._id}
              className="info-p flex justify-center items-center"
            >
              <div className="flex justify-center items-center p-4 m-4 rounded-md w-full ">
                <Link href={`/user/projects/${project._id}`}>
                  {" "}
                  <h2 className=" text-3xl">
                    <strong>Nombre del Proyecto:</strong>
                    {project.name}
                  </h2>
                  <div className="flex justify-center">
                    <ImageRandom />
                  </div>
                  <h5>
                    <strong>Id del proyecto: </strong>
                    {project._id}
                  </h5>
                  <h5>
                    <strong>Id del cliente: </strong> {project.clientId}
                  </h5>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

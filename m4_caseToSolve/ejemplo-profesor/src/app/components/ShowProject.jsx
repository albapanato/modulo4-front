import Link from "next/link";
import { listProject } from "@/app/utils/user";
import { useEffect, useState } from "react";
import ImageRandom from "./ImageRandom";

export default function ShowProject() {
  const [token, setToken] = useState(null);
  const [projectData, setProjectData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("jwt");
      setToken(storedToken);
      console.log("token :", storedToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      const fetchProjectData = async () => {
        try {
          const recordProject = await listProject(token); // Cambiar storedToken por token
          setProjectData(recordProject);
        } catch (err) {
          setError(err.message);
        }
      };

      fetchProjectData();
    }
  }, [token]);

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (projectData.length === 0) {
    return (
      <>
        <div className="w-[600px] ">
          <h2 className="text-2xl">Parece que no tienes ningún projecto!</h2>
          <p className="text-xl">
            Crea un para poder generar Albaranes digitales
          </p>
        </div>
      </>
    );
  }

  return (
    <div>
      {/* <h1>Project Information</h1>
      <pre>{JSON.stringify(projectData, null, 2)}</pre> */}

      <div className="grid grid-cols-1 w-full">
        <div className="block justify-center">
          <div className="">
            {projectData.map((project) => (
              <div
                key={project._id}
                className="bg-blue-100 p-4 m-4 rounded-md w-full "
              >
                <div className="block">
                  <div className="block p-3" key={project._id}>
                    <Link href={`/user/projects/${project._id}`}>
                      {" "}
                      <h2 className=" text-2xl text-orange-600  text-center font-bold">
                        {" "}
                        {project.name}
                      </h2>
                      <div className="flex justify-end">
                        <ImageRandom />
                      </div>
                      <h5>
                        <strong>_id: </strong>
                        {project._id}
                      </h5>
                      <h5>
                        <strong> clientId:</strong> {project.clientId}
                      </h5>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

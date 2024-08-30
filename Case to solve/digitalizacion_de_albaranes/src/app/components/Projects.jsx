"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { listProjects } from "../utils/projects";
import ButtonLink from "./ButtonLink";
import ProjectBotonDelete from "./ProjectBotonDelete";
import Searcher from "./Searcher";
import { getCookie } from "../utils/services";
import { useDebounce } from "use-debounce";
import LoadingSpinner from "./LoadingSpinner";
import Notification from "./Notification";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [updateProjects, setUpdateProjects] = useState(false);
  const [notification, setNotification] = useState({
    text: "",
    type: "",
    visible: false,
  });
  const [debouncedSearchTerm] = useDebounce(searchTerm, 300);

  useEffect(() => {
    setLoading(true);
    try {
      const fetchProjects = async () => {
        const token = getCookie("jwt");
        const projectData = await listProjects(token);
        setProjects(projectData);
        setFilteredProjects(projectData);
        setLoading(false);
      };
      fetchProjects();
    } catch {
      setNotification({
        text: "No se han podido obtener los proyectos",
        type: "error",
        visible: true,
      });
      setLoading(false);
    }
  }, [updateProjects]);

  useEffect(() => {
    const filtered = projects.filter((project) =>
      project.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
    setFilteredProjects(filtered);
  }, [debouncedSearchTerm, projects]);
  console.log(loading);
  return (
    <>
      {loading ? (
        <LoadingSpinner fullView />
      ) : filteredProjects.length > 0 ? (
        <div className="h-full">
          <div className="flex justify-between mb-2 gap-4">
            <Searcher
              placeholder={"Busca proyectos"}
              onSearch={(term) => setSearchTerm(term)}
            />
            <ButtonLink
              text={"Nuevo proyecto"}
              href="/user/projects/new"
              className={"bg-indigo-600 text-white hover:bg-indigo-500"}
            />
          </div>
          <table className=" block min-w-full bg-transparent text-white max-h-[100%] overflow-scroll">
            <thead className="top-0 bg-transparent text-left">
              <tr>
                <th className="font-normal p-2 border-b-2 w-1/3">
                  NOMBRE DEL PROYECTO
                </th>
                <th className="font-normal p-2 border-b-2 w-1/3">EMAIL</th>
                <th className="font-normal p-2 border-b-2 w-1/3">ID CLIENTE</th>
                <th className="font-normal p-2 border-b-2 w-1/3"></th>
              </tr>
            </thead>
            <tbody>
              {filteredProjects.map((project) => (
                <tr className=" " key={project._id}>
                  <td className="border-b p-3">{project.name}</td>
                  <td className="border-b p-3">{project.email}</td>
                  <td className="border-b p-3">{project.clientId}</td>
                  <td className="border-b p-3">
                    <div className=" flex items-center gap-2">
                      <Link
                        className="block w-7 h-7"
                        href={`/user/projects/${project._id}`}
                      >
                        <Image
                          src="/img/icons/view-white.png"
                          alt="view-icon"
                          width={24}
                          height={24}
                        />
                      </Link>
                      <Link
                        className="block w-7 h-7"
                        href={`/user/projects/edit/${project._id}`}
                      >
                        <Image
                          src="/img/icons/edit-white.png"
                          alt="edit-icon"
                          width={24}
                          height={24}
                        />
                      </Link>
                      <ProjectBotonDelete
                        id={project._id}
                        setNotification={setNotification}
                        setUpdateProjects={setUpdateProjects}
                        updateProjects={updateProjects}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {notification.visible && (
            <Notification
              message={notification.text}
              type={notification.type}
              onClose={() => {
                setNotification({ text: "", type: "", visible: false });
              }}
            />
          )}
        </div>
      ) : (
        <div className="flex justify-center ">
          <div className="w-3/4 bg-white rounded-md p-8">
            <div className="flex justify-center">
              <Image
                src="/img/noData.png"
                alt="imagen"
                width={300}
                height={300}
              />
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-2xl ">
                ¡¡Uups!! Parece que no tienes ningún proyecto!
              </h2>
              <p className="text-xl">
                Crea un para poder generar Albaranes digitales
              </p>
            </div>
            <div className="flex justify-center mt-6">
              <ButtonLink
                text={"Nuevo proyecto"}
                href="/user/projects/new"
                className={"bg-indigo-600 text-white hover:bg-indigo-500"}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

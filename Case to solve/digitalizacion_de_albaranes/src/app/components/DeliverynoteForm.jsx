"use client";
import { useEffect, useState } from "react";
import { newDeliverynote } from "../utils/deliverynotes";
import { listProjects } from "../utils/projects";
import { listClients } from "../utils/clients";
import { getCookie } from "../utils/services";
import { useRouter } from "next/navigation";
import ButtonLink from "./ButtonLink";
import Button from "./Button";
import Notification from "./Notification";

export default function DeliveryForm() {
  const [notification, setNotification] = useState({
    text: "",
    type: "",
    visible: false,
  });
  const [formData, setFormData] = useState({
    name: "",
    clientId: "",
    projectId: "",
    format: "",
    material: "",
    hours: 0,
    description: "",
    workdate: "",
  });
  const [clients, setClients] = useState([]);
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    async function loadData() {
      const token = getCookie("jwt");
      try {
        const clients = await listClients(token);
        console.log("clientes: ", clients);
        const projects = await listProjects(token);
        console.log("proyectos: ", projects);
        setClients(clients);
        setProjects(projects);
      } catch (error) {
        s({
          text: "Error al cargar los datos:",
          type: "error",
          visible: true,
        });
      }
    }

    loadData();
  }, []);

  const handleClientChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      clientId: value,
      projectId: "", // Reset projectId when client changes
    }));
    const clientProjects = projects.filter(
      (project) => project.clientId === value
    );
    setFilteredProjects(clientProjects);
  };

  const handleFormatChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      format: value,
      material: "",
      hours: 0,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = "Campo obligatorio *";
    if (!formData.clientId) errors.clientId = "Campo obligatorio *";
    if (!formData.projectId) errors.projectId = "Campo obligatorio *";
    if (!formData.format) errors.format = "Campo obligatorio *";
    if (formData.format === "material" && !formData.material)
      errors.material = "Campo obligatorio *";
    if (formData.format === "hours" && !formData.hours)
      errors.hours = "Campo obligatorio *";
    if (!formData.description) errors.description = "Campo obligatorio *";
    if (!formData.workdate) errors.workdate = "Campo obligatorio *";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      setNotification({
        text: "Necesitas completar todos los campos obligatorios para crear un albarán",
        type: "error",
        visible: true,
      });
      return;
    }

    const token = getCookie("jwt");
    const data = { ...formData };

    if (formData.format === "material") {
      data.hours = 0;
    } else if (formData.format === "hours") {
      data.material = "";
    }

    try {
      await newDeliverynote(token, data);
      console.log(data);
      setNotification({
        text: "Albarán creado con éxito",
        type: "success",
        visible: true,
      });

      router.push("/user/deliverynotes");
    } catch (error) {
      setNotification({
        text: "Error al crear el albarán",
        type: "error",
        visible: true,
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-3/4 mx-auto">
        <div className="flex gap-4 justify-between">
          <h1 className="text-white w-full text-2xl md:text-3xl self-center font-bold leading-tight px-4 md:px-0">
            Nuevo albarán
          </h1>

          <div className="flex gap-4">
            <div>
              <ButtonLink
                href="/user/deliverynotes"
                text={"Volver"}
                className={
                  "block text-center text-white  bg-yellow-500 hover:bg-yellow-700"
                }
              />
            </div>
            <div>
              <Button
                type="submit"
                className="w-max text-center text-white  bg-indigo-700 hover:bg-indigo-900"
                text="Crear albarán"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="col-start-1 col-end-3">
            <label htmlFor="name" className="text-white">
              Nombre del trabajador
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`block w-full rounded-sm border p-1 text-scale-400 ${
                errors.name ? "border-yellow-500" : ""
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>
          <div className="col-start-1 col-end-2">
            <label htmlFor="clientId" className="text-white">
              Cliente
            </label>
            <select
              id="clientId"
              name="clientId"
              value={formData.clientId}
              onChange={handleClientChange}
              className={`block w-full h-[34px] rounded-sm border p-1 text-scale-400 ${
                errors.name ? "border-yellow-500" : ""
              }`}
            >
              <option value="">Selecciona un cliente</option>
              {clients.map((client) => (
                <option key={client._id} value={client._id}>
                  {client.name}
                </option>
              ))}
            </select>
            {errors.clientId && (
              <p className="mt-1 text-sm text-red-500">{errors.clientId}</p>
            )}
          </div>
          <div className="col-start-2 col-end-3">
            <label htmlFor="projectId" className="text-white">
              Proyecto
            </label>
            <select
              id="projectId"
              name="projectId"
              value={formData.projectId}
              onChange={handleChange}
              className={`block w-full h-[34px] rounded-sm border p-1 text-scale-400 ${
                errors.name ? "border-yellow-500" : ""
              }`}
            >
              <option value="">Selecciona un proyecto</option>
              {filteredProjects.map((project) => (
                <option key={project._id} value={project._id}>
                  {project.name}
                </option>
              ))}
            </select>
            {errors.projectId && (
              <p className="mt-1 text-sm text-red-500">{errors.projectId}</p>
            )}
          </div>
          <div className="col-start-1 col-end-2">
            <label htmlFor="format" className="text-white">
              Formato
            </label>
            <select
              id="format"
              name="format"
              value={formData.format}
              onChange={handleFormatChange}
              className={`block w-full h-[34px] rounded-sm border p-1 text-scale-400 ${
                errors.name ? "border-yellow-500" : ""
              }`}
            >
              <option value="">Selecciona un formato</option>
              <option value="material">Material</option>
              <option value="hours">Horas</option>
            </select>
            {errors.format && (
              <p className="mt-1 text-sm text-red-500">{errors.format}</p>
            )}
          </div>
          {formData.format === "material" && (
            <div className="col-start-2 col-end-3">
              <label htmlFor="material" className="text-white">
                Tipo de Material
              </label>
              <input
                id="material"
                type="text"
                name="material"
                value={formData.material}
                onChange={handleChange}
                className={`block w-full rounded-sm border p-1 text-scale-400 ${
                  errors.name ? "border-yellow-500" : ""
                }`}
              />
              {errors.material && (
                <p className="mt-1 text-sm text-red-500">{errors.material}</p>
              )}
            </div>
          )}
          {formData.format === "hours" && (
            <div className="col-start-2 col-end-3">
              <label htmlFor="hours" className="text-white">
                Horas
              </label>
              <input
                id="hours"
                type="number"
                name="hours"
                value={formData.hours}
                onChange={handleChange}
                className={`block w-full rounded-sm border p-1 text-scale-400 ${
                  errors.name ? "border-yellow-500" : ""
                }`}
              />
              {errors.hours && (
                <p className="mt-1 text-sm text-red-500">{errors.hours}</p>
              )}
            </div>
          )}
          <div className="col-start-1 col-end-3">
            <label htmlFor="description" className="text-white">
              Descripción
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className={`block w-full rounded-sm border p-1 text-scale-400 ${
                errors.name ? "border-yellow-500" : ""
              }`}
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-500">{errors.description}</p>
            )}
          </div>
          <div>
            <label htmlFor="workdate" className="text-white">
              Fecha de Trabajo
            </label>
            <input
              id="workdate"
              type="date"
              name="workdate"
              value={formData.workdate}
              onChange={handleChange}
              className={`block w-full rounded-sm border p-1 text-scale-400 ${
                errors.name ? "border-yellow-500" : ""
              }`}
            />
            {errors.workdate && (
              <p className="mt-1 text-sm text-red-500">{errors.workdate}</p>
            )}
          </div>
        </div>
      </form>
      {notification.visible && (
        <Notification
          message={notification.text}
          type={notification.type}
          onClose={() => {
            setNotification({ text: "", type: "", visible: false });
          }}
        />
      )}
    </>
  );
}

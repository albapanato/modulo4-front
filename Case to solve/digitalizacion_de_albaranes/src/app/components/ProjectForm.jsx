"use client";
import { useRouter } from "next/navigation";
import { newProject } from "../utils/projects";
import { listClients } from "../utils/clients";
import { useEffect, useState } from "react";
import { getCookie } from "../utils/services";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import Notification from "./Notification";

export default function ProjectForm() {
  const router = useRouter();
  const [notification, setNotification] = useState({
    text: "",
    type: "",
    visible: false,
  });
  const [formData, setFormData] = useState({
    name: "",
    projectCode: "",
    email: "",
    address: {
      street: "",
      number: "",
      postal: "",
      city: "",
      province: "",
    },
    code: "",
    clientId: "",
  });
  const [clients, setClients] = useState([]);
  const [errors, setErrors] = useState({}); // Estado para almacenar los errores

  useEffect(() => {
    async function clientList() {
      const token = getCookie("jwt");
      try {
        const clients = await listClients(token);
        setClients(clients);
      } catch (error) {
        s({
          text: "Error al cargar los datos:",
          type: "error",
          visible: true,
        });
      }
    }
    clientList();
  }, []);

  // Maneja la selección de cliente
  const handleClientChange = (e) => {
    const selectedClient = clients.find(
      (client) => client._id === e.target.value
    );
    if (selectedClient) {
      setFormData((prevData) => ({
        ...prevData,
        clientId: selectedClient._id,
        email: "",
        address: selectedClient.address || {
          street: "",
          number: "",
          postal: "",
          city: "",
          province: "",
        },
      }));
    }
  };
  // Validaciones de formulario
  // const validate = () => {
  //   const newErrors = {};
  //   if (!formData.name)
  //     newErrors.name = "El nombre del proyecto es obligatorio";
  //   if (!formData.code)
  //     newErrors.code = "El código del proyecto es obligatorio";
  //   if (!formData.clientId) newErrors.clientId = "Debes seleccionar un cliente";
  //   if (!formData.email) newErrors.email = "El email es obligatorio";
  //   if (!formData.address.street) newErrors.street = "La calle es obligatoria";
  //   if (!formData.address.number) newErrors.number = "El número es obligatorio";
  //   if (!formData.address.city) newErrors.city = "La ciudad es obligatoria";
  //   if (!formData.address.province)
  //     newErrors.province = "La provincia es obligatoria";
  //   if (!formData.address.postal)
  //     newErrors.postal = "El código postal es obligatorio";

  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Campo obligatorio *";
    if (!formData.code) newErrors.code = "Campo obligatorio *";
    if (!formData.clientId) newErrors.clientId = "Campo obligatorio *";
    if (!formData.email) newErrors.email = "Campo obligatorio *";
    if (!formData.address.street) newErrors.street = "Campo obligatorio *";
    if (!formData.address.number) newErrors.number = "Campo obligatorio *";
    if (!formData.address.city) newErrors.city = "Campo obligatorio *";
    if (!formData.address.province) newErrors.province = "Campo obligatorio *";
    if (!formData.address.postal) newErrors.postal = "Campo obligatorio *";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  // Maneja los cambios de los campos de texto
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Maneja los cambios en los campos de la dirección
  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      setNotification({
        text: "Necesitas completar todos los campos obligatorios para crear un proyecto",
        type: "error",
        visible: true,
      });
      return;
    }
    try {
      const token = getCookie("jwt");
      if (!token) {
        throw new Error("No autorizado");
      }
      await newProject(token, formData);
      setNotification({
        text: "Proyecto creado con éxito",
        type: "success",
        visible: true,
      });
      router.push("/user/projects");
    } catch (error) {
      setNotification({
        text: "Error al crear el proyecto",
        type: "error",
        visible: true,
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-3/4 mx-auto">
        <div className="p-4 mx-auto">
          <div className="flex gap-4 justify-between">
            <h1 className="text-white w-full text-2xl md:text-3xl self-center font-bold leading-tight px-4 md:px-0">
              Nuevo Proyecto
            </h1>

            <div className="flex gap-4">
              <div>
                <ButtonLink
                  href="/user/projects"
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
                  text="Crear proyecto"
                />
              </div>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-4">
            <div className="text-md">
              <label className="text-white" htmlFor="name">
                Nombre proyecto
              </label>
              <input
                className="block w-full rounded-sm border p-1 text-scale-400"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div className="text-scale-400">
              <label className="text-white" htmlFor="code">
                Código proyecto
              </label>
              <input
                className="block w-full rounded-sm border p-1 text-scale-400"
                type="text"
                id="code"
                name="code"
                value={formData.code}
                onChange={handleChange}
              />
              {errors.code && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div className="">
              <label className="block text-white">Cliente</label>
              <select
                name="clientId"
                value={formData.clientId}
                onChange={handleClientChange}
                className="block w-full h-[34px] rounded-sm border p-1 text-scale-400"
              >
                <option value="">Selecciona un cliente</option>
                {clients.map((client) => (
                  <option key={client._id} value={client._id}>
                    {client.name}
                  </option>
                ))}
              </select>
              {errors.clientId && (
                <p className="text-red-500 text-sm">{errors.clientId}</p>
              )}
            </div>
            <div className="text-scale-400">
              <label className="text-white" htmlFor="email">
                Email
              </label>
              <input
                className="block w-full rounded-sm border p-1 text-scale-400"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.clientId}</p>
              )}
            </div>
          </div>
          <div className="my-5">
            <label className="block text-white">Dirección</label>
            <div className="grid grid-cols-4 gap-4">
              <div className="col-start-1 col-end-4">
                <input
                  type="text"
                  name="street"
                  placeholder="Calle"
                  value={formData.address.street}
                  onChange={handleAddressChange}
                  className="block w-full rounded-sm border p-1 text-scale-400"
                />
                {errors.street && (
                  <p className="text-red-500 text-sm">{errors.clientId}</p>
                )}
              </div>
              <div className="col-start-4 col-end-5">
                <input
                  type="text"
                  name="number"
                  placeholder="Número"
                  value={formData.address.number}
                  onChange={handleAddressChange}
                  className="block w-full rounded-sm border p-1 text-scale-400"
                />
                {errors.number && (
                  <p className="text-red-500 text-sm">{errors.clientId}</p>
                )}
              </div>

              <div className="col-start-1 col-end-3">
                <input
                  type="text"
                  name="city"
                  placeholder="Ciudad"
                  value={formData.address.city}
                  onChange={handleAddressChange}
                  className="block w-full rounded-sm border p-1 text-scale-400"
                />
                {errors.city && (
                  <p className="text-red-500 text-sm">{errors.clientId}</p>
                )}
              </div>
              <div className="col-start-3 col-end-45">
                <input
                  type="text"
                  name="province"
                  placeholder="Provincia"
                  value={formData.address.province}
                  onChange={handleAddressChange}
                  className="block w-full rounded-sm border p-1 text-scale-400"
                />
                {errors.province && (
                  <p className="text-red-500 text-sm">{errors.clientId}</p>
                )}
              </div>
              <div className="col-start-4 col-end-5">
                <input
                  type="text"
                  name="postal"
                  placeholder="Código Postal"
                  value={formData.address.postal}
                  onChange={handleAddressChange}
                  className="block w-full rounded-sm border p-1 text-scale-400"
                />
                {errors.postal && (
                  <p className="text-red-500 text-sm">{errors.clientId}</p>
                )}
              </div>
            </div>
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

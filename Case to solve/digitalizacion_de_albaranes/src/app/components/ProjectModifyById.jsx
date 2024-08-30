"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { infoProject, modifyInfoProject } from "../utils/projects";
import { getCookie } from "../utils/services";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import LoadingSpinner from "./LoadingSpinner";
import Notification from "./Notification";

export default function ModifyProjectById() {
  const [token, setToken] = useState(null);
  const pathname = usePathname();
  const [project, setProject] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState({
    text: "",
    type: "",
    visible: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const getDataProject = async () => {
      try {
        const pathnameSplitted = pathname.split("/");
        const id = pathnameSplitted[pathnameSplitted.length - 1];
        const token = getCookie("jwt");
        setToken(token);
        const projectData = await infoProject(id, token);
        setProject(projectData);
      } catch {
        setNotification({
          text: "Error al obtener la información del proyecto",
          type: "error",
          visible: true,
        });
      }
    };
    getDataProject();
  }, [setValue]);

  useEffect(() => {
    if (!project) return;
    Object.keys(project).forEach((key) => {
      setValue(key, project[key]);
    });
    if (project.address) {
      Object.keys(project.address).forEach((key) => {
        setValue(`address.${key}`, project.address[key]);
      });
    }
    setLoading(false);
  }, [project]);

  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const res = await modifyInfoProject(project._id, token, data);
      setNotification({
        text: "Proyecto guardado con éxito",
        type: "success",
        visible: true,
      });
      router.push(`/user/projects/${project._id}`);
    } catch (error) {
      setNotification({
        text: "Error al guardar el proyecto",
        type: "error",
        visible: true,
      });
    }
  };

  return (
    <>
      {loading ? (
        <LoadingSpinner fullView />
      ) : (
        <form className="w-3/4 mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-4 justify-between">
            <h1 className="text-white w-full text-2xl md:text-3xl self-center font-bold leading-tight px-4 md:px-0">
              Edita el proyecto
            </h1>

            <div className="flex gap-4">
              <div>
                <ButtonLink
                  href="/user/projects"
                  text={"Ver proyectos"}
                  className={
                    "block text-center text-white  bg-yellow-500 hover:bg-yellow-700 w-max"
                  }
                />
              </div>
              <div>
                <Button
                  type="submit"
                  className="w-max text-center text-white  bg-indigo-700 hover:bg-indigo-900"
                  text="Guardar"
                />
              </div>
            </div>
          </div>
          <div className="mt-10 flex gap-4">
            <div className="text-xl w-2/4">
              <label className="text-white p-2" htmlFor="code">
                Codigo
              </label>
              <input
                className="block w-full rounded-sm border p-1 text-scale-400"
                type="text"
                id="code"
                {...register("code", { required: true })}
              />
              {errors.code && <p>{errors.code.message}</p>}
            </div>
            <div className="text-xl w-full">
              <label className="text-white p-2 " htmlFor="name">
                Nombre del Proyecto
              </label>
              <input
                className="block w-full rounded-sm border p-1 text-scale-400"
                type="text"
                id="name"
                {...register("name", { required: true, maxLength: 20 })}
              />
              {errors.name && <p>{errors.name.message}</p>}
            </div>

            <div className="text-xl w-full">
              <label className="text-white p-2" htmlFor="email">
                Email
              </label>
              <input
                className="block w-full rounded-sm border p-1 text-scale-400"
                type="email"
                id="email"
                {...register("email", { required: true })}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
          </div>
          <div className="text-xl mt-6">
            <label className="text-white" htmlFor="address">
              Domicilio Fiscal:
            </label>
          </div>
          <div className="flex gap-4 mt-4">
            <div className="text-xl w-full">
              <label className="text-white p-2" htmlFor="address.street">
                Calle
              </label>
              <input
                className="block w-full rounded-sm border p-1 text-scale-400"
                type="text"
                id="address.street"
                {...register("address.street", {
                  required: "Street is required",
                })}
              />
              {errors.address?.street && <p>{errors.address.street.message}</p>}
            </div>
            <div className="text-xl w-2/4">
              <label className="text-white p-2" htmlFor="address.number">
                Número
              </label>
              <input
                className="block w-full rounded-sm border p-1 text-scale-400"
                type="text"
                id="address.number"
                {...register("address.number", {
                  required: "Number is required",
                })}
              />
              {errors.address?.number && <p>{errors.address.number.message}</p>}
            </div>

            <div className="text-xl w-2/4">
              <label className="text-white p-2" htmlFor="address.postal">
                Código Postal
              </label>
              <input
                className="block w-full rounded-sm border p-1 text-scale-400"
                type="text"
                id="address.postal"
                {...register("address.postal", {
                  required: "Postal code is required",
                })}
              />
              {errors.address?.postal && <p>{errors.address.postal.message}</p>}
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <div className="text-xl w-full">
              <label className="text-white p-2" htmlFor="address.city">
                Ciudad
              </label>
              <input
                className="block w-full rounded-sm border p-1 text-scale-400"
                type="text"
                id="address.city"
                {...register("address.city", {
                  required: "City is required",
                })}
              />
              {errors.address?.city && <p>{errors.address.city.message}</p>}
            </div>

            <div className="text-xl w-full">
              <label className="text-white p-2" htmlFor="address.province">
                Provincia
              </label>
              <input
                className="block w-full rounded-sm border p-1 text-scale-400"
                type="text"
                id="address.province"
                {...register("address.province", {
                  required: "Province is required",
                })}
              />
              {errors.address?.province && (
                <p>{errors.address.province.message}</p>
              )}
            </div>
          </div>
        </form>
      )}
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

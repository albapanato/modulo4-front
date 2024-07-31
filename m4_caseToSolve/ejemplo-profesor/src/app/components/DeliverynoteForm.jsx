"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { newDeliverynote } from "../utils/user";

export default function DeliverynoteForm() {
  const [token, setToken] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      clientId: "",
      projectId: "",
      format: "",
      material: "",
      hours: "",
      description: "",
      workdate: "",
    },
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("jwt");
      setToken(storedToken);
      console.log("token :", storedToken);
      console.log("token :", typeof storedToken);
    }
  }, []);

  const router = useRouter();

  const onSubmit = async (data) => {
    console.log("data", data);
    console.log(token);
    console.log("token", typeof token);
    try {
      const res = await newDeliverynote(token, data);
      alert("Tu albaran ha sido registrado con éxito");
      router.push("/user/deliverynotes");
      if (res.token) {
        localStorage.setItem("jwt", res.token); // Guarda el token en el almacenamiento local
      } else {
        throw new Error("Failed to register user.");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 w-full">
        <div className="p-4">
          <h1 className="mb-10 text-4xl font-extrabold p-1 text-center text-blue-500">
            Nuevo Albaran
          </h1>
          <div className="grid grid-cols-2 gap-12 justify-center">
            <div className="mt-8 text-xl">
              <label htmlFor="clientId">Id del Cliente</label>
              <input
                className="mt-3 peer block w-full rounded-md border border-gray-200 p-3 text-xl outline-2 text-scale-600"
                type="text"
                id="clientId"
                {...register("clientId")}
              />
              {errors.clientId && <p>{errors.clientId.message}</p>}
            </div>
            <div className="mt-8 text-xl">
              <label htmlFor="projectId">Id del proyecto</label>
              <input
                className="mt-3 peer block w-full rounded-md border border-gray-200 p-3 text-xl outline-2 text-scale-600"
                type="text"
                id="projectId"
                {...register("projectId")}
              />
              {errors.projectId && <p>{errors.projectId.message}</p>}
            </div>
            <div className="">
              <div className="mt-8 text-xl ">
                <label htmlFor="format" className="block mb-4">
                  Tipo de formato{" "}
                </label>
                <select
                  className="p-3"
                  name="format"
                  id="format"
                  {...register("format")}
                >
                  <option value="" label="Seleccione una opcion" />
                  <option value="material">Material</option>
                  <option value="hours">Horas</option>
                </select>
                {errors.format && <p>{errors.format.message}</p>}
              </div>
            </div>
            <div className="grid grid-rows-2">
              <div className="text-xl">
                <label htmlFor=" material">Tipo de material</label>
                <input
                  className="mt-3 peer block w-full rounded-md border border-gray-200 p-3 text-xl outline-2 text-scale-600"
                  type="text"
                  id=" material"
                  {...register(" material")}
                />
                {errors.material && <p>{errors.material.message}</p>}
              </div>
              <div className="text-xl">
                <label htmlFor="hours">Total de horas</label>
                <input
                  className="mt-3 peer block w-full rounded-md border border-gray-200 p-3 text-xl outline-2 text-scale-600"
                  type="number"
                  id="hours"
                  {...register("hours", { maxLength: 9 })}
                />
                {errors.hours && <p>{errors.hours.message}</p>}
              </div>
            </div>

            <div className="mt-8 text-xl">
              <label htmlFor="description">Descripcion</label>
              <input
                className="mt-3 peer block w-full rounded-md border border-gray-200 p-3 text-xl outline-2 text-scale-600"
                type="text"
                id="description"
                {...register("description", { maxLength: 50 })}
              />
              {errors.description && <p>{errors.description.message}</p>}
            </div>
            <div className="mt-8 text-xl">
              <label htmlFor="workdate">Fecha de trabajo </label>
              <input
                className="mt-3 peer block w-full rounded-md border border-gray-200 p-3 text-xl outline-2 text-scale-600"
                type="date"
                id="workdate"
                {...register("workdate")}
              />
              {errors.workdate && <p>{errors.workdate.message}</p>}
            </div>
          </div>

          <div className="w-full text-center mt-10">
            <button
              type="submit"
              className="mt-12 p-4 w-5/12 bg-blue-500 text-white text-2xl font-extrabold rounded"
            >
              Agregar
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

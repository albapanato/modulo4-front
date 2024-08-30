"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { newClient } from "../utils/clients";
import { getCookie } from "../utils/services";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import Notification from "./Notification";

export default function ClientForm() {
  const [notification, setNotification] = useState({
    text: "",
    type: "",
    visible: false,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      cif: "",
      address: {
        street: "",
        number: "",
        postal: "",
        city: "",
        province: "",
      },
    },
  });

  const router = useRouter();

  const onSubmit = async (data) => {
    const token = getCookie("jwt");
    try {
      await newClient(token, data);
      setNotification({
        visible: true,
        text: "Cliente creado con éxito",
        type: "success",
      });
      router.push("/user");
    } catch (error) {
      setNotification({
        text: "No se ha podido crear al cliente",
        type: "error",
        visible: true,
      });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="w-3/4 mx-auto">
        <div className="p-4 mx-auto">
          <div className="flex justify-between">
            <h1 className="text-white w-full text-2xl md:text-3xl self-center font-bold leading-tight px-4 md:px-0">
              Nuevo Cliente
            </h1>
            <div className="flex gap-4">
              <div>
                <ButtonLink
                  href="/user"
                  text={"Volver"}
                  className={
                    "block text-center text-white  bg-yellow-500 hover:bg-yellow-700"
                  }
                />
              </div>
              <div>
                <Button
                  type="submit"
                  text="Crear cliente"
                  className={
                    "w-max block text-center text-white  bg-indigo-700 hover:bg-indigo-900"
                  }
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="mt-4 col-start-1 col-end-3">
              <label className="text-white" htmlFor="name">
                Nombre del Cliente o Empresa
              </label>
              <input
                className="block w-full rounded-sm border p-1 text-scale-400"
                type="text"
                id="name"
                {...register("name", { maxLength: 20 })}
              />
              {errors.name && <p>{errors.name.message}</p>}
            </div>

            <div className="mt-4">
              <label className="text-white" htmlFor="cif">
                CIF
              </label>
              <input
                className="block w-full rounded-sm border p-1 text-scale-400"
                type="text"
                id="cif"
                {...register("cif", { maxLength: 9 })}
              />
              {errors.cif && <p>{errors.cif.message}</p>}
            </div>
          </div>

          <div className="mt-4">
            <label className="text-white" htmlFor="address">
              Domicilio Fiscal:{" "}
            </label>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <div className="col-start-1 col-end-4">
              <label className="text-white" htmlFor="address.street">
                Calle
              </label>
              <input
                className="block w-full rounded-sm border p-1 text-scale-400"
                type="text"
                id="address.street"
                {...register("address.street", {
                  required: "Introduce la calle",
                })}
              />
              {errors.address?.street && <p>{errors.address.street.message}</p>}
            </div>
            <div className="col-start-4 col-end-5">
              <label className="text-white" htmlFor="address.number">
                Número
              </label>
              <input
                className="block w-full rounded-sm border p-1 text-scale-400"
                id="address.number"
                type="text"
                {...register("address.number", {
                  required: "Introduce el numero",
                  valueAsNumber: true,
                  min: {
                    value: 1,
                    message:
                      "El numero debe contener almenos un numero y ser mayor que 0",
                  },
                })}
              />
              {errors.address?.number && <p>{errors.address.number.message}</p>}
            </div>

            <div className="col-start-1 col-end-3">
              <label className="text-white" htmlFor="address.city">
                Ciudad
              </label>
              <input
                className="block w-full rounded-sm border p-1 text-scale-400"
                id="address.city"
                type="text"
                {...register("address.city", {
                  required: "Introduce tu ciudad",
                })}
              />
              {errors.address?.city && <p>{errors.address.city.message}</p>}
            </div>

            <div className="col-start-3 col-end-5">
              <label className="text-white" htmlFor="address.province">
                Provincia
              </label>
              <input
                className="block w-full rounded-sm border p-1 text-scale-400"
                id="address.province"
                type="text"
                {...register("address.province", {
                  required: "Introduce tu provincia",
                })}
              />
              {errors.address?.province && (
                <p>{errors.address.province.message}</p>
              )}
            </div>
            <div className="col-start-4 col-end-5">
              <label className="text-white" htmlFor="address.postal">
                Código Postal
              </label>
              <input
                className="block w-full rounded-sm border p-1 text-scale-400"
                id="address.postal"
                type="text"
                {...register("address.postal", {
                  required: "Introduce tu código postal",
                  valueAsNumber: true,
                  min: {
                    value: 1,
                    message: "Postal code must be greater than 0",
                  },
                })}
              />
              {errors.address?.postal && <p>{errors.address.postal.message}</p>}
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

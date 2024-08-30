"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"; // npm install react-hook-form
import { createUser } from "../utils/user";
import ButtonInput from "./Buttoninput";
import ButtonLink from "./ButtonLink";

export default function RegisterForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    console.log("data", data);
    const res = await createUser(data);
    console.log("res", res);
    console.log(res.token);
    if (res.token) {
      document.cookie = `jwt=${res.token}`;
      localStorage.setItem("jwt", res.token); // esto lo guarda en el almacenamiento local
      router.push("/validation"); // esto se va a ir a /validation/page.js
    } else {
      throw new Error("Failed to register user.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 w-[240px]">
      <h1 className="text-center text-white w-full text-2xl md:text-3xl self-center font-bold leading-tight px-4 md:px-0">
        Crea tu cuenta
      </h1>
      <div className="w-full mt-4 pt-2">
        <div>
          <label htmlFor="name"></label>
          <input
            className="block w-full rounded-sm border p-1 text-scale-400"
            type="text"
            id="name"
            placeholder="Nombre"
            {...register("name", { maxLength: 20 })} // Aqui se mete si es requerido
          />
        </div>

        <div className="relative mt-4">
          <label htmlFor="surnames"></label>
          <input
            className="block w-full rounded-sm border p-1 text-scale-400"
            type="text"
            id="surnames"
            placeholder="Apellidos"
            {...register("surnames", { maxLength: 40 })}
          />
        </div>

        <div className="relative mt-4">
          <label htmlFor="email"></label>
          <input
            className="block w-full rounded-sm border p-1 text-scale-400"
            type="email"
            id="email"
            placeholder=" Email"
            {...register("email", { required: true, maxLength: 30 })}
          />
          {errors.email?.type === "required" && (
            <div className="text-xs">Email es requerido</div>
          )}
        </div>

        <div className="relative mt-4">
          <label htmlFor="password"></label>
          <input
            className="block w-full rounded-sm border p-1 text-scale-400"
            type="password"
            id="password"
            placeholder=" Contraseña"
            {...register("password", { required: true, minLength: 8 })}
          />
          {errors.password?.type === "required" && (
            <div className="text-xs">La contraseña es requerida</div>
          )}
        </div>
      </div>
      <div className="flex justify-center mt-4 w-full">
        <ButtonInput
          text={"Regístrate"}
          className="bg-yellow-500 hover:bg-yellow-700"
        />
      </div>

      <div className="flex flex-col gap-1 justify-center items-center p-2 mx-auto w-full  mt-6 text-white text-center">
        <div className="text-sm">¿Ya tienes cuenta?</div>
        <ButtonLink
          href="/login"
          text={"Inicia sesión"}
          className={
            "block w-[150px] text-center text-white  bg-indigo-700 hover:bg-indigo-900"
          }
        />
      </div>
    </form>
  );
}

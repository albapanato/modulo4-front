"use client";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form"; // npm install react-hook-form
import { loginUser } from "../utils/user";
import Link from "next/link";

export default function LoginForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    const res = await loginUser(data);
    if (res.token) {
      document.cookie = `jwt=${res.token}`;
      localStorage.setItem("jwt", res.token);
      router.push("/user");
    } else {
      throw new Error("Failed to login user.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <h1 className=" p-1 text-center text-2xl shadow-md  bg-red-200 bg-opacity-75 rounded-lg text-orange-500 text-shadow-xl font-bold">
        Accede a tu cuenta
      </h1>
      <div className="flex-1 rounded-lg bg-opacity-75  bg-red-200 p-4">
        <div className="w-full ">
          <div className="relative">
            <label htmlFor="email"></label>
            <input
              className="text-center peer block w-full rounded-md border border-gray-200 p-1 text-lg outline-2 text-scale-600"
              type="email"
              id="email"
              placeholder="Email"
              {...register("email", { required: true, maxLength: 30 })}
            />
            {errors.email?.type === "required" && "Email es requerido"}
          </div>

          <div className="relative mt-4">
            <label htmlFor="password"></label>
            <input
              className="text-center peer block w-full rounded-md border border-gray-200 p-1 text-lg outline-2 text-slate-700"
              type="password"
              id="password"
              placeholder="Contraseña"
              {...register("password", { required: true, minLength: 8 })}
            />
            {errors.password?.type === "required" && "Contraseña es requerida"}
          </div>
        </div>
        <div className="flex justify-center mt-4 w-full">
          <input
            className="p-1 w-2/4 rounded-lg bg-orange-600 text-xl cursor-pointer text-blue-900 shadow-md font-bold"
            type="submit"
          />
        </div>
      </div>
      <div className="flex justify-center items-center p-2 rounded-lg mx-auto w-full bg-orange-400 bg-opacity-75 mt-6 text-lg shadow-md  text-black text-center font-bold">
        ¿No tienes cuenta?
        <Link href="/register">
          <span className=" text-shadow-xl ml-3 text-blue-900 text-xl font-bold">
            Registrate
          </span>
        </Link>
      </div>
    </form>
  );
}

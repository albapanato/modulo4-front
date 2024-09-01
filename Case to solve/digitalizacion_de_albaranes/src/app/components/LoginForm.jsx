"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form"; // npm install react-hook-form
import { loginUser } from "../utils/user";
import ButtonInput from "./Buttoninput";
import ButtonLink from "./ButtonLink";
import Notification from "./Notification";
import LoadingSpinner from "./LoadingSpinner";

export default function LoginForm() {
  const [needsLoader, setNeedsLoader] = useState(false);
  const [error, setError] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    setNeedsLoader(true);
    const res = await loginUser(data);
    if (res.error) {
      setNeedsLoader(false);
      setError(res.error);
      return;
    }
    if (!res?.token) {
      setNeedsLoader(false);
      setError("No tienes autorización para entrar");
      return;
    }
    document.cookie = `jwt=${res.token}`;
    localStorage.setItem("jwt", res.token);
    router.push("/user");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <h1 className="text-white w-full text-2xl md:text-3xl self-center font-bold leading-tight px-4 md:px-0">
          Accede a tu cuenta
        </h1>
        <div className="flex-1 rounded-lg p-4">
          <div className="w-full">
            <div className="relative">
              <label htmlFor="email"></label>
              <input
                className="block w-full rounded-sm border p-1 text-scale-400"
                type="email"
                id="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email es requerido",
                  maxLength: {
                    value: 30,
                    message: "El email es demasiado largo",
                  },
                  pattern: {
                    value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                    message: "El formato del email no es válido",
                  },
                })}
              />
              {errors.email && (
                <div
                  className={`text-xs mt-1 ${
                    errors.email.type === "required"
                      ? "text-red-500"
                      : "text-yellow-500"
                  }`}
                >
                  {errors.email.message}
                </div>
              )}
            </div>

            <div className="relative mt-4">
              <label htmlFor="password"></label>
              <input
                className="block w-full rounded-sm border p-1 text-scale-400"
                type="password"
                id="password"
                placeholder="Contraseña"
                {...register("password", {
                  required: "Contraseña es requerida",
                  minLength: {
                    value: 8,
                    message: "La contraseña debe tener al menos 8 caracteres",
                  },
                })}
              />
              {errors.password && (
                <div
                  className={`text-xs mt-1 ${
                    errors.password.type === "required"
                      ? "text-red-500"
                      : "text-yellow-500"
                  }`}
                >
                  {errors.password.message}
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center mt-4 w-full h-[40px]">
            {needsLoader ? (
              <LoadingSpinner />
            ) : (
              <ButtonInput
                text={"Inicia sesión"}
                className="bg-yellow-500 hover:bg-yellow-700"
              />
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center p-2 mx-auto w-full mt-6 text-white text-center">
          <div className="text-sm">¿No tienes cuenta?</div>
          <ButtonLink
            href="/register"
            text={"Regístrate"}
            className={
              "block w-[120px] text-center text-white bg-indigo-700 hover:bg-indigo-900"
            }
          />
        </div>
      </form>
      {error && (
        <Notification
          message={error}
          type="error"
          onClose={() => {
            setError("");
          }}
        />
      )}
    </>
  );
}

import { useForm } from "react-hook-form";

const Registro = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
        <h3> Formulario de registro</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Username</label>
            <input {...register("username", { required: true, maxLength: 20 })} />
            {errors.username?.type === "required" && "Username es requerido"} {/* Si exite error de tipo requerido && me vas a mostrar el mensaje que hemos puesto */}
            {errors.username?.type === "maxLength" && "Username debe tener menos de 20 caracteres"}
          </div>
        
          <div>
            <label>País</label>
            <select {...register("country", { required: true })}>
                <option value="es">España</option>
                <option value="it">Italia</option>
                <option value="pt">Portugal</option>
            </select>
          {errors.country?.type === "required" && "Country es requerido"}
          </div>

          <div>
            <label>Dirección</label>
            <input {...register("address", { required: true })} />
            {errors.address?.type === "required" && "Dirección es requerida"}
          </div>

          <input type="submit" />
          
        </form>
    </>
  );
};

export default Registro;

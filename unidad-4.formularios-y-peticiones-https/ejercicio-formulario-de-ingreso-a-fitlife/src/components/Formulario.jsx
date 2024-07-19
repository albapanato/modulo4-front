import { useFormik } from "formik";
import * as Yup from "yup";
import enviarDatos from "./EnviarDatos";

function Formulario() {
  //La validacion de la fecha esta copiado enterito de CHATGPT
  const calcularEdad = (fecha) => {
    const hoy = new Date();
    const fechaNacimiento = new Date(fecha);
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }
    return edad;
  };
  // Calcula la fecha de hace 18 años
  const today = new Date();
  const eighteenYearsAgo = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  );

  const formik = useFormik({
    initialValues: {
      nombre: "",
      fdn: "",
      direccion: "",
      email: "",
      telefono: "",
      sexo: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("⚠️ El nombre es obligatorio"),
      fdn: Yup.date()
        .required("⚠️ La fecha es obligatoria")
        .max(eighteenYearsAgo, "⚠️ Debes tener al menos 18 años"),
      direccion: Yup.string().required("⚠️ La direccion es obligatoria"),
      email: Yup.string()
        .email("⚠️ Introduce un email válido")
        .required("⚠️ El email es obligatorio"),
      telefono: Yup.number().required("⚠️ El teléfono es obligatorio"),
      sexo: Yup.string().oneOf(["H", "M"]),
    }),
    onSubmit: (values) => {
      // Enviar datos a la API
      console.log("Formulario enviado:", values);
      enviarDatos(
        "Mandamos los valores del formulario al componente hijo: ",
        values
      );
    },
  });

  return (
    <>
      <div className="Formulario">
        <h2>2 MESES GRATIS</h2>
        <h3> REGISTRATE AQUI</h3>
        <form className="form" onSubmit={formik.handleSubmit}>
          <div className="caja">
            <label htmlFor="nombre">Nombre completo: </label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              value={formik.values.nombre}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.nombre && formik.errors.nombre ? (
              <p className="error">{formik.errors.nombre}</p>
            ) : null}
          </div>

          <div className="caja">
            <label htmlFor="fdn">Fecha de nacimiento: </label>
            <input
              type="date"
              name="fdn"
              id="fdn"
              value={formik.values.fdn}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.fdn && formik.errors.fdn ? (
              <p className="error">{formik.errors.fdn}</p>
            ) : formik.values.fdn && calcularEdad(formik.values.fdn) < 18 ? (
              <p className="error"> ☠ Debes tener al menos 18 años</p>
            ) : null}
          </div>

          {/* {formik.touched.fdn && formik.errors.fdn ? (
              Se verifica si el campo fdn (fecha de nacimiento) ha sido tocado (formik.touched.fdn) y si hay un error asociado (formik.errors.fdn). Si ambas condiciones son verdaderas, se ejecuta la parte siguiente.
              <p className="error">{formik.errors.fdn}</p>:
              Si la condición anterior es verdadera, se renderiza un párrafo (<p>) con la clase error que muestra el mensaje de error almacenado en formik.errors.fdn.
              ) : calcularEdad(formik.values.fdn) < 18 ? (
              Si la primera condición (errores de formik) no es verdadera, se evalúa la siguiente condición: si la edad calculada por calcularEdad(formik.values.fdn) es menor a 18.
              <p className="error">Debes tener al menos 18 años</p>:
              Si la condición calcularEdad(formik.values.fdn) < 18 es verdadera, se renderiza un párrafo (<p>) con la clase error que muestra el mensaje "Debes tener al menos 18 años".
              ) : null:
              Si ninguna de las condiciones anteriores es verdadera (no hay errores de formik y el usuario tiene al menos 18 años), no se renderiza nada (null). */}

          <div className="caja">
            <label htmlFor="direccion">Direccion: </label>
            <input
              type="text"
              name="direccion"
              id="direccion"
              value={formik.values.direccion}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.direccion && formik.errors.direccion ? (
              <p className="error">{formik.errors.direccion}</p>
            ) : null}
          </div>
          <div className="caja">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              name="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && (
              <p className="error">{formik.errors.email}</p>
            )}
          </div>
          <div className="caja">
            <label htmlFor="telefono">Telefono: </label>
            <input
              type="text"
              name="telefono"
              id="telefono"
              value={formik.values.telefono}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.telefono && (
              <p className="error">
                Debes introducir un numero de telefono valido
              </p>
            )}
          </div>
          <div className="caja">
            <label htmlFor="sexo">Sexo: </label>
            <select
              name="sexo"
              id="sexo"
              value={formik.values.sexo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="" label="Seleccione una opcion" />
              <option value="H">Hombre</option>
              <option value="M">Mujer</option>
            </select>
            {formik.touched.sexo && formik.errors.sexo ? (
              <p className="error">{formik.errors.sexo}</p>
            ) : null}
          </div>
          <div className="caja"></div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
}

export default Formulario;

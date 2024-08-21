import { useFormik } from "formik";

import * as Yup from "yup";

const Contacto = () => {
  const formik = useFormik({
    initialValues: { name: "", surname: "", email: "" },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      surname: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <h3>Formulario de contacto</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            // onBlur={formik.handleBlur}
            // onChange={formik.handleChange}
            // value={formik.values.name}
            // Se puede hacer de las dos manera
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name ? ( // Manejador de errores de las validaciones de arriba
            <div>{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label>Apellidos</label>

          <input
            type="text"
            name="surname"
            id="surname"
            // onBlur={formik.handleBlur}
            // onChange={formik.handleChange}
            // value={formik.values.surname}
            {...formik.getFieldProps("surname")}
          />

          {formik.touched.surname && formik.errors.surname ? (
            <div>{formik.errors.surname}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label>Email</label>

          <input
            type="text"
            name="email"
            id="email"
            // onBlur={formik.handleBlur}
            // onChange={formik.handleChange}
            // value={formik.values.email}
            {...formik.getFieldProps("email")}
          />

          {formik.touched.email && formik.errors.email ? ( // Manejador de si el email no cumple
            <div>{formik.errors.email}</div>
          ) : null}
        </div>

        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Contacto;

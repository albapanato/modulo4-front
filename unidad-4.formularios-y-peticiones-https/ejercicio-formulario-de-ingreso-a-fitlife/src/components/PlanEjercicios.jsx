import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import HandleGET from "./ListaEntrenadores";

function PlanEjercicios() {
  const [profesores, setProfesores] = useState([]);
  const [entrenamiento, setEntrenaiento] = useState(" ");
  const [objetivo, setObjetivo] = useState(" ");

  const [error, setError] = useState(false);

  const formik = useFormik({
    initialValues: {
      tipoEntrenamiento: "",
      edad: "",
      peso: "",
      objetivo: "",
      dias: [],
    },
    validationSchema: Yup.object({
      tipoEntrenamiento: Yup.string().required("⚠️ Este campo es necesario"),
      edad: Yup.number().required("⚠️ Este campo es necesario"),
      peso: Yup.number().required("⚠️ Este campo es necesario"),
      objetivo: Yup.string().required("⚠️ Este campo es necesario"),
      dias: Yup.array()
        .required()
        .min(1, "⚠️ Debes seleccionar al menos un día"),
    }),
    onSubmit: async (values) => {
      try {
        const data = await HandleGET();
        setProfesores(data);
        setEntrenaiento(values.tipoEntrenamiento);
        setObjetivo(values.objetivo);

        alert(
          "🫶 Gracias por su solicitus, le mostraremos al profesor perfecto para su seleccion 💪"
        );
        // meter aquí las actividades
      } catch (error) {
        setError(true);
      }
    },
  });

  let listaProfesores = null;

  if (error) {
    listaProfesores = (
      <p style={{ textAlign: "center", color: "orange", fontSize: "30px" }}>
        Disculpe la molestias, no hemos podido encontrar un profesor en estos
        momentos, intentenlo de nuevo mas tarde
      </p>
    );
  }
  const male = "https://xsgames.co/randomusers/avatar.php?g=male";
  const female = "https://xsgames.co/randomusers/avatar.php?g=female";

  if (!error && profesores.length > 0) {
    listaProfesores = profesores.map((profesor) => (
      <div className="Formulario">
        <h2>AQUÍ TIENES AL PROFESOR PERFECTO PARA TI</h2>
        <div className="caja" key={profesor.login.uuid}>
          <img
            className="perfil"
            src={profesor.gender === "female" ? female : male}
            alt="foto de perfil"
          />
          <h3>{`${profesor.name.first} ${profesor.name.last}`}</h3>

          <p className="infoProfesor" style={{ color: "#6daf6a" }}>
            Especista en entrenamiento de tipo {entrenamiento}
          </p>
          <p className="infoProfesor" style={{ color: "#1696c0" }}>
            {profesor.name.first} dedica la mayor parte de su tiempo en ayudar a
            personas que tienen, como tu, el objetivo de {objetivo}.
          </p>
          <p
            className="infoProfesor"
            style={{ color: "#48d308", fontSize: "38px" }}
          >
            Puede llamar al numero {profesor.phone} sin ningun tipo de
            compromiso si tiene mas preguntas.
          </p>
        </div>
      </div>
    ));
    console.log(listaProfesores);
  }

  return (
    <>
      <div className="Formulario">
        <h2>
          COMPLETA EL CUSTIONARIO PARA VER UN PLAN MAS ADAPTADO A TUS
          NECESIDADES
        </h2>
        <div className="form" style={{ width: "500px" }}>
          <form onSubmit={formik.handleSubmit}>
            <div className="caja">
              <label htmlFor="tipoEntrenamiento" className="pregunta">
                Tipo de entrenamiento:{" "}
              </label>
              <select
                name="tipoEntrenamiento"
                value={formik.values.tipoEntrenamiento}
                onChange={formik.handleChange}
              >
                <option value="" label="Seleccione una opción" />
                <option value="cardio">cardio</option>
                <option value="funcional">funcional</option>
                <option value="fuerza">fuerza</option>
                <option value="flexibilidad y movilidad">
                  flexibilidad y movilidad
                </option>
              </select>
              {formik.touched.tipoEntrenamiento &&
              formik.errors.tipoEntrenamiento ? (
                <p className="error">{formik.errors.tipoEntrenamiento}</p>
              ) : null}
            </div>

            <div className="caja">
              <label htmlFor="edad" className="pregunta">
                Edad:{" "}
              </label>
              <input
                type="range"
                min="18"
                max="100"
                step="1"
                name="edad"
                value={formik.values.edad}
                onChange={formik.handleChange}
              />
              <span>{formik.values.edad} años</span>

              {formik.touched.edad && formik.errors.edad ? (
                <p className="error">{formik.errors.edad}</p>
              ) : null}
            </div>

            <div className="caja">
              <label htmlFor="peso" className="pregunta">
                Peso:{" "}
              </label>
              <input
                type="range"
                min="50"
                max="180"
                step="1"
                name="peso"
                value={formik.values.peso}
                onChange={formik.handleChange}
              />
              <span>{formik.values.peso} kg</span>

              {formik.touched.peso && formik.errors.peso ? (
                <p className="error">{formik.errors.peso}</p>
              ) : null}
            </div>

            <div className="caja">
              <label htmlFor="objetivo" className="pregunta">
                Cual es tu objetivo
              </label>
              <div className="flex">
                <input
                  type="radio"
                  name="objetivo"
                  id="prueba-ruta"
                  value="perpararse una ruta o una prueba fisicas"
                  onChange={formik.handleChange}
                  checked={
                    formik.values.objetivo ===
                    "perpararse una ruta o una prueba fisicas"
                  }
                />
                <label htmlFor="prueba-ruta">
                  Prepararme para una ruta o prueba
                </label>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  name="objetivo"
                  id="forma-fisica"
                  value="mejorar su forma física"
                  onChange={formik.handleChange}
                  checked={formik.values.objetivo === "mejorar su forma física"}
                />
                <label htmlFor="forma-fisica">Mejorar mi forma física</label>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  name="objetivo"
                  id="peso-musculo"
                  value="perder peso y/o tonificar musculos"
                  onChange={formik.handleChange}
                  checked={
                    formik.values.objetivo ===
                    "perder peso y/o tonificar musculos"
                  }
                />
                <label htmlFor="peso-musculo">Perder peso y/o tonificar</label>
              </div>
              {formik.touched.objetivo && formik.errors.objetivo ? (
                <p className="error">{formik.errors.objetivo}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="dias" className="pregunta">
                Cuantos días te gustaría entrenar
              </label>
              <div className="flex" style={{ justifyContent: "center" }}>
                {[
                  "Lunes",
                  "Martes",
                  "Miércoles",
                  "Jueves",
                  "Viernes",
                  "Sábado",
                  "Domingo",
                ].map((dia) => (
                  <div
                    key={dia}
                    className="flex"
                    style={{
                      margin: "4px",
                      padding: "5px",
                      background: "#0a969b50",
                    }}
                  >
                    <input
                      type="checkbox"
                      name="dias"
                      id={dia}
                      value={dia}
                      onChange={formik.handleChange}
                      checked={formik.values.dias.includes(dia)}
                    />
                    <label htmlFor={dia}>{dia}</label>
                  </div>
                ))}
              </div>
              {formik.touched.dias && formik.errors.dias ? (
                <p className="error">{formik.errors.dias}</p>
              ) : null}
            </div>

            <button type="submit">Crear mi plan</button>
          </form>
        </div>
        {listaProfesores}
      </div>
    </>
  );
}

export default PlanEjercicios;

// // import React from "react";
// // import { useFormik } from "formik";
// // import * as Yup from "yup";
// // import HandleGET from "./ListaEntrenadores";

// // function PlanEjercicios() {
// //   const formik = useFormik({
// //     initialValues: {
// //       tipoEntrenamiento: "",
// //       edad: "",
// //       peso: "",
// //       objetivo: "",
// //       dias: "",
// //     },
// //     validationSchema: Yup.object({
// //       tipoEntrenamiento: Yup.string().required("⚠️ Este campo es necesario"),
// //       edad: Yup.number().required("⚠️ Este campo es necesario"),
// //       peso: Yup.number().required("⚠️ Este campo es necesario"),
// //       objetivo: Yup.string().required("⚠️ Este campo es necesario"),
// //       dias: Yup.array().required("⚠️ Este campo es necesario"),
// //     }),

// //     onSubmit: (values) => {
// //       HandleGET();
// //       console.log(values);
// //       alert("Solicitud enviada");
// //       //meter aqui las actividades
// //     },
// //   });

// //   return (
// //     <>
// //       <div>
// //         <form onSubmit={formik.handleSubmit}>
// //           <div className="caja">
// //             <label htmlFor="tipoEntrenamiento">Tipo de entrenamiento: </label>
// //             <select name="tipoEntrenamiento">
// //               <option value="" label="Seleccione una opcion" />
// //               <option value="cardio">cardio</option>
// //               <option value="funcional">funcional</option>
// //               <option value="fuerza">fuerza</option>
// //               <option value="flexibilidad y movilidad">
// //                 flexibilidad y movilidad
// //               </option>
// //             </select>
// //           </div>

// //           <div className="caja">
// //             <label htmlFor="edad">Edad: </label>
// //             <input type="range" min="18" max="100" step="1" />
// //           </div>
// //           <div className="caja">
// //             <label htmlFor="peso">Peso: </label>
// //             <input type="range" min="50kg" max="180kg" step="1" />
// //           </div>
// //           <div className="caja">
// //             <label htmlFor="objetivo">Cual es tu objetivo</label>
// //             <input
// //               type="radio"
// //               name="objetivo"
// //               id="prueba-ruta"
// //               value="Prepararme para una ruta o prueba"
// //             />
// //             <label htmlFor="prueba-ruta">
// //               Prepararme para una ruta o prueba
// //             </label>
// //             <input
// //               type="radio"
// //               name="objetivo"
// //               id="forma-fisica"
// //               values="Mejorar mi forma física"
// //             />
// //             <label htmlFor="forma-fisica">Mejorar mi forma física</label>
// //             <input
// //               type="radio"
// //               name="objetivo"
// //               id="peso-musculo"
// //               value="Perder peso y/o tonificar"
// //             />
// //             <label htmlFor="peso-musculo">Perder peso y/o tonificar</label>
// //           </div>
// <div>
//               <label htmlFor="dias">Cuantos dias te gustaria entrenar</label>
//               <input
//                 type="checkbox"
//                 name="dias"
//                 id="Lunes"
//                 value="Lunes"
//                 checked={formik.values.dias === "Lunes"}
//                 onChange={formik.handleChange}
//               />
//               <label htmlFor="Lunes">Lunes</label>
//               <input
//                 type="checkbox"
//                 name="dias"
//                 id="Martes"
//                 value="Martes"
//                 checked={formik.values.dias === "Martes"}
//                 onChange={formik.handleChange}
//               />
//               <label htmlFor="Martes">Martes</label>
//               <input
//                 type="checkbox"
//                 name="dias"
//                 id="Miercoles"
//                 value="Miercoles"
//                 checked={formik.values.dias === "Miercoles"}
//                 onChange={formik.handleChange}
//               />
//               <label htmlFor="Miercoles">Miercoles</label>
//               <input
//                 type="checkbox"
//                 name="dias"
//                 id="Jueves"
//                 value="Jueves"
//                 checked={formik.values.dias === "Jueves"}
//                 onChange={formik.handleChange}
//               />
//               <label htmlFor="Jueves">Jueves</label>
//               <input
//                 type="checkbox"
//                 name="dias"
//                 id="Viernes"
//                 value="Viernes"
//                 checked={formik.values.dias === "Viernes"}
//                 onChange={formik.handleChange}
//               />
//               <label htmlFor="Viernes">Viernes</label>
//               <input
//                 type="checkbox"
//                 name="dias"
//                 id="Sabado"
//                 value="Sabado"
//                 checked={formik.values.dias === "Sabado"}
//                 onChange={formik.handleChange}
//               />
//               <label htmlFor="Sabado">Sabado</label>
//               <input
//                 type="checkbox"
//                 name="dias"
//                 id="Domingo"
//                 value="Domingo"
//                 checked={formik.values.dias === "Domingo"}
//                 onChange={formik.handleChange}
//               />
//               <label htmlFor="Domingo">Domingo</label>
// //           <div>
// //             <label htmlFor="dias">Cuantos dias te gustaria entrenar</label>
// //             <input type="checkbox" name="dias" id="Lunes" value="Lunes" />
// //             <label htmlFor="Lunes">Lunes</label>
// //             <input type="checkbox" name="dias" id="Martes" value="Martes" />
// //             <label htmlFor="Martes">Martes</label>
// //             <input
// //               type="checkbox"
// //               name="dias"
// //               id="Miercoles"
// //               value="Miercoles"
// //             />
// //             <label htmlFor="Miercoles">Miercoles</label>
// //             <input type="checkbox" name="dias" id="Jueves" value="Jueves" />
// //             <label htmlFor="Jueves">Jueves</label>
// //             <input type="checkbox" name="dias" id="Viernes" value="Viernes" />
// //             <label htmlFor="Viernes">Viernes</label>
// //             <input type="checkbox" name="dias" id="Sabado" value="Sabado" />
// //             <label htmlFor="Sabado">Sabado</label>
// //             <input type="checkbox" name="dias" id="Domingo" value="Domingo" />
// //             <label htmlFor="Domingo">Domingo</label>
// //           </div>
// //           <button type="submit">Crear mi plan</button>
// //         </form>
// //       </div>
// //     </>
// //   );
// // }

// export default PlanEjercicios;

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
      dias: Yup.array().min(1, "⚠️ Debes seleccionar al menos un día"),
    }),
    onSubmit: async (values) => {
      try {
        const data = await HandleGET();
        setProfesores(data);
        setEntrenaiento(values.tipoEntrenamiento);
        setObjetivo(values.objetivo);

        alert("Solicitud enviada");
        // meter aquí las actividades
      } catch (error) {
        setError(true);
      }
    },
  });

  let listaProfesores = null;

  if (error) {
    listaProfesores = (
      <p style={{ textAlign: "center", color: "red", fontSize: "30px" }}>
        Ha ocurrido un error
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
          <p>Género: {profesor.gender}</p>
          <p>Especializado en tipos de entrenamiento de {entrenamiento}</p>
          <p>{`${profesor.name.first} esta especializado en ayudar a personas que tienen como objetivo ${objetivo}, no dudes en contactar con el si tienes alguna duda en este numero ${profesor.phone}`}</p>
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
        <div className="form">
          <form onSubmit={formik.handleSubmit}>
            <div className="caja">
              <label htmlFor="tipoEntrenamiento">Tipo de entrenamiento: </label>
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
              <label htmlFor="edad">Edad: </label>
              <input
                type="range"
                min="18"
                max="100"
                step="1"
                name="edad"
                value={formik.values.edad}
                onChange={formik.handleChange}
              />
              <span>{formik.values.edad}</span>
              {formik.touched.edad && formik.errors.edad ? (
                <p className="error">{formik.errors.edad}</p>
              ) : null}
            </div>

            <div className="caja">
              <label htmlFor="peso">Peso: </label>
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
              <label htmlFor="objetivo">Cual es tu objetivo</label>
              <input
                type="radio"
                name="objetivo"
                id="prueba-ruta"
                value="La preparacion de una ruta o pruebas fisicas"
                onChange={formik.handleChange}
                checked={
                  formik.values.objetivo ===
                  "La preparacion de una ruta o pruebas fisicas"
                }
              />
              <label htmlFor="prueba-ruta">
                Prepararme para una ruta o prueba
              </label>

              <input
                type="radio"
                name="objetivo"
                id="forma-fisica"
                value="Mejorar la forma física"
                onChange={formik.handleChange}
                checked={formik.values.objetivo === "Mejorar la forma física"}
              />
              <label htmlFor="forma-fisica">Mejorar mi forma física</label>

              <input
                type="radio"
                name="objetivo"
                id="peso-musculo"
                value="Perder peso y/o tonificar musculos"
                onChange={formik.handleChange}
                checked={
                  formik.values.objetivo ===
                  "Perder peso y/o tonificar musculos"
                }
              />
              <label htmlFor="peso-musculo">Perder peso y/o tonificar</label>

              {formik.touched.objetivo && formik.errors.objetivo ? (
                <p className="error">{formik.errors.objetivo}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="dias">Cuantos días te gustaría entrenar</label>
              {[
                "Lunes",
                "Martes",
                "Miércoles",
                "Jueves",
                "Viernes",
                "Sábado",
                "Domingo",
              ].map((dia) => (
                <div key={dia}>
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

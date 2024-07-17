// //peticion fetch a 'https://randomuser.me/api/'
// import { useEffect, useState } from "react";
// const HandleGET = () => {
//   const [profesores, setProfesores] = useState([]);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     fetch("https://randomuser.me/api/")
//       .then((response) => response.json())
//       .then((data) => {
//         setProfesores(data.results);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setError(true);
//       });
//   }, []);

//   let listaProfesores = null;

//   if (error)
//     listaProfesores = (
//       <p style={{ textAlign: "center", color: "red", fontSize: "30px" }}>
//         Ha ocurrido un error
//       </p>
//     );

//   if (!error && profesores.length < 3) {
//     listaProfesores = profesores.map((profesor) => (
//       <div className="caja">
//         <h3>{profesor.name}</h3>
//         <p>Genero: {profesor.gender} </p>
//         <img src={profesor.picture} alt="" />
//       </div>
//     ));
//     console.log(listaProfesores);
//   }

//   return (
//     <>
//       <h1> AQUI TIENES LA LISTA DE TTUS PROFESORES</h1>
//       {listaProfesores}
//     </>
//   );
// };

// export default HandleGET;

const HandleGET = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default HandleGET;

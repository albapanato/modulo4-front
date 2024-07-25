import { useState } from "react";
import ListItem from "./ListItem";

const ListaPersonas = () => {
  const [personas, setPersonas] = useState([
    { nombre: "Pedro", apellidos: "Rodríguez", email: "pedro@mail.com" },
    { nombre: "Rosa", apellidos: "Gómez", email: "rosa@mail.com" },
    { nombre: "Lorenzo", apellidos: "López", email: "lorenzo@mail.com" },
    { nombre: "Lucía", apellidos: "García", email: "lucia@mail.com" },
  ]);

  const borrarContacto = (index) => {
    const personasCp = [...personas];
    personasCp.splice(index, 1);
    setPersonas(personasCp);
  };

  const modificarNombre = (event, index) => {
    const persona = { ...personas[index] };
    persona.nombre = event.target.value;
    const personasNew = [...personas];
    personasNew[index] = persona;
    setPersonas(personasNew);
  };
  return (
    <div className="contactos">
      {personas.map((persona, index) => {
        const data = { persona, index, modificarNombre, borrarContacto };
        return <ListItem {...data} />;
      })}
    </div>
  );
};

export default ListaPersonas;

//   return (
//     <div className="contactos">
//       {personas.map((persona, index) => {
//         return (
//           <div key={index} className="contacto">
//             <input
//               type="text"
//               value={persona.nombre}
//               onChange={(e) => modificarNombre(e, index)}
//             />
//             <p>
//               {persona.nombre} {persona.apellidos}
//             </p>

//             <p>{persona.email}</p>
//             <button onClick={(event) => borrarContacto(index)}>Borrar</button>
//           </div>
//         );
//       })}
//     </div>
//  );
//};

//export default ListaPersonas;

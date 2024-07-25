import { useEffect, useState } from "react";

export default function Mensaje(){
    
  const [num, setNum] = useState(0);
  const [mensaje, setMensaje] = useState("Mensaje inicial");

  useEffect(() => {
    console.log(`${num} useEffect`);
  }, [mensaje,num]); // esto se ejecutara cada vez que cambien las variables que le especifiquemos dentro del array

//   useEffect(() => {
//     console.log(`${num} useEffect`);
//   },[]); // esto cargara solo una vez al cargar la pagina

  return (
    <div>
      <p>{mensaje}</p>
      <p>{num}</p>
      <button onClick={() => setNum(num + 1)}>Aumenta</button>
      <input type="text" onChange={(e) => setMensaje(e.target.value)} />
    </div>
  );
};



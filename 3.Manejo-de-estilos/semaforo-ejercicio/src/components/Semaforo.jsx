import { useState } from "react";

import "../Semaforo.css";

const Semaforo = () => {
  const [color, setColor] = useState("rojo");

  const handleClick = () => {
    if (color === "rojo") {
      setColor("amarillo");
    } else if (color === "amarillo") {
      setColor("verde");
    } else if (color === "verde") {
      setColor("rojo");
    }
  };

  let clases = ["semaforo", color];

  return (
    <div className='frame'>
      <button onClick={handleClick}>Cambia semáforo</button>

      <div className={clases.join(" ")}></div>
    </div>
  );
};

export default Semaforo;

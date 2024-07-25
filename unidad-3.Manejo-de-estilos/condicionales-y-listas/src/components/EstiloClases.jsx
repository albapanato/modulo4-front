import { useState } from "react";

import "../App.css";

const EstiloClases = () => {
  const [contador, setContador] = useState(10);

  const handleClick = () => {
    setContador(contador - 1);
  };

  let clases = ["contador"];

  if (contador < 7 && contador >= 4) clases.push("warning");

  if (contador < 4) clases.push("finishing");

  return (
    <div>
      <button onClick={handleClick}>Disminuir</button>

      <p className={clases.join(" ")}>{contador}</p>
    </div>
  );
};

export default EstiloClases;

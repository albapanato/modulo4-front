import { useEffect, useState } from "react";
// import axios from "axios";

export default function PersonDetail({ url }) {
  const [person, setPerson] = useState(null); // inicializamos el stage a null??? por que??

  useEffect(() => {
    async function fetchData() {
      // console.log("url :", url); // como viene la referencia de la url??
      // const response = await axios.get(url);
      // console.log("data: ", response);
      // setPerson(response.data);

      //con fetch
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("toda la data: ", data);
        setPerson(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    if (url) fetchData();
  }, [url]);

  if (!person) {
    return <h2 className="titleUrl">Ninguna persona seleccionada</h2>;
  } else {
    return (
      <div className="titleUrl">
        <h3> {person.name}</h3>
      </div>
    );
  }
}

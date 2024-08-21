// import axios from "axios";
import { useEffect, useState } from "react";
import PersonDetail from "./PersonDetail";

const PeopleList = () => {
  const [people, setPeople] = useState([]);
  const [urlSelected, setUrlSelected] = useState(""); // variable de estado inicializada en vacio (" ")
  const [error, setError] = useState(false);

  useEffect(() => {
    // axios
    //   .get("https://swapi.dev/api/people")
    //   .then((response) => {
    //     setPeople(response.data.results);
    //   })
    //   .catch((error) => setError(true));

    //ejemplo con fetch:

    fetch("https://swapi.dev/api/people")
      .then((response) => response.json())
      .then((data) => {
        setPeople(data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(true);
      });
  }, []);

  let listPeople = null;

  if (error)
    listPeople = (
      <p style={{ textAlign: "center", color: "red", fontSize: "30px" }}>
        Ha ocurrido un error
      </p>
    );

  if (!error && people.length > 0) {
    listPeople = people.map((person) => (
      <div className="person">
        <h3 onClick={() => setUrlSelected(person.url)}>{person.name}</h3>
        <p>Genero: {person.gender} </p>
        <p>Año Nacimiento: {person.birth_year}</p>
        <p>Núm. Películas: {person.films.length}</p>
      </div>
    ));
  }

  return (
    <>
      <PersonDetail url={urlSelected} />
      <div className="people">{listPeople}</div>
    </>
  );
};

export default PeopleList;

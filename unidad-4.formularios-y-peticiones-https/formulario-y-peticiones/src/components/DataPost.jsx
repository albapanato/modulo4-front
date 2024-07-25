// import axios from "axios";

const DataPost = () => {
  const handleClick = () => {
    const body = {
      title: "Prueba de título",
      body: "Cuerpo del post",
      author: "Antonio Robles",
    };

    // axios
    //   .post("https://jsonplaceholder.typicode.com/posts", body)
    //   .then((response) => console.log(response.data))
    //   .catch((error) => console.log(error));

    //con fetch
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <button onClick={handleClick}>Pulsa para POST</button>
    </div>
  );
};

export default DataPost;

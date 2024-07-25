// import axios from "axios";

const DataUpdate = () => {
  const handleClick = async () => {
    const body = {
      title: "Título nuevo",
      body: "Nuevo contenido",
      author: "Rodrigo Lafuente",
    };

    // const response = await axios.put(
    //   "https://jsonplaceholder.typicode.com/posts/1",
    //   body
    // );
    //console.log(response.data);

    // con fetch
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Pulsa para UPDATE</button>
    </div>
  );
};

export default DataUpdate;

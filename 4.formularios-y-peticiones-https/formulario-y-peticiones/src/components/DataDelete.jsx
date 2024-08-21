// import axios from "axios";

// const DataDelete = () => {
//   const handleClick = () => {
//     axios
//       .delete("https://jsonplaceholder.typicode.com/posts/1")

//       .then((response) => console.log(response.data))

//       .catch((error) => console.log(error));
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Pulsa para DELETE</button>
//     </div>
//   );
// };

// export default DataDelete;

//Con fetch

const DataDelete = () => {
  async function deleteData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
        { method: "DELETE" }
      );

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  }

  const handleClick = () => deleteData();

  return (
    <div>
      <button onClick={handleClick}>Pulsa para DELETE</button>
    </div>
  );
};

export default DataDelete;

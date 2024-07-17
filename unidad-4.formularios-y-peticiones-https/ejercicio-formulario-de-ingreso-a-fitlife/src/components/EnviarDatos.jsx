const enviarDatos = async (values) => {
  console.log("VALORES DEL COMPONENTE PADRE", values);
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  if (respuesta.ok) {
    alert("Enhorabuena, te has registrado con exito");
    console.log("Usuario registrado correctamente");
    console.log("RANDOM API", respuesta); // respuesta de la api https://jsonplaceholder.typicode.com/posts
  } else {
    alert("Ha habido un error");
    console.log("Error al registrar usuario");
  }
};

export default enviarDatos;

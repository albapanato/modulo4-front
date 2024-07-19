const enviarDatos = async (values) => {
  console.log("Recibimos la info del componente padre:", values);
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
    console.log(
      "Aqui simulamos que mandamos los datos del formulario al backend para que lo incluya en una API"
    ); // respuesta de la api https://jsonplaceholder.typicode.com/posts
  } else {
    alert("Ha habido un error con el registro");
    console.log("Error al enviar los datos a la API");
  }
};

export default enviarDatos;

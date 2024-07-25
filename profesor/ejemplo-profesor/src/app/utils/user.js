"use server"; // es necesrio poner "use server " porque si no,  el fichero que lo llama al ser "use client" por default renderizara la funcion en el lado del cliente

async function createUser(data) {
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/user/register`; // con esto se crean la rutas para hacer el fetch a la api. creamos el archivo .env o .env.local y le asignamos a NEXT_PUBLIC_BACKEND_DOMAIN el valor de la url generica(https://bildy-rpmaya.koyeb.app), y luego le agregamos la terminacion a la llamada que deseemos /api/user/register
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const dataRes = await response.json();
    return dataRes;
  } catch (error) {
    console.error("Failed to register user:", error);
    throw new Error("Failed to register user.");
  }
}

async function validateUser(token, data) {
  // le pasamos como parametro el token y la data que estemos mandando desde el componente MailValidationForm.jsx
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/user/validation`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Aqui le mandamos el token porque es requerido ya que necesitas un acceso(los que tienen un candado)
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const dataRes = await response.json();
    return dataRes;
  } catch (error) {
    console.error("Failed to match code:", error);
    throw new Error("Failed to match code.");
  }
}

async function loginUser(data) {
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/user/login`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const dataRes = await response.json();
    return dataRes;
  } catch (error) {
    console.error("Failed to login user:", error);
    throw new Error("Failed to login user.");
  }
}

export { createUser, validateUser, loginUser };

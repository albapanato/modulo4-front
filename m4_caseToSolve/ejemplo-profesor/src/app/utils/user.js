"use server"; // es necesrio poner "use server " porque si no,  el fichero que lo llama al ser "use client" por default renderizara la funcion en el lado del cliente

async function createUser(data) {
  console.log("por aqui", data);
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
  console.log(token);
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

async function listClient(token) {
  try {
    //console.log("Tu lista de clientes");
    const url = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/client`;
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const dataRes = await response.json();
    //console.log("dataRes: ", dataRes);
    return dataRes;
  } catch (error) {
    console.error("Failed to show data client:", error);
    throw new Error("Failed to show data client.");
  }
}

async function newClient(token, data) {
  //Sale por el catch
  console.log("la info en user.js: ", data);
  console.log("token: ", token);
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/client`;
    console.log("URL: ", url);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(
        "La respuesta de la red no fue correcta: " + response.statusText
      );
    }
    const dataRes = await response.json();
    console.log(dataRes);
    return dataRes;
  } catch (error) {
    console.error("Failed to create new client:", error);
    throw new Error("Failed to create new client.");
  }
}

async function infoClient(id, token) {
  //console.log("Info cliente");
  console.log("id en infoCLien:", id);
  console.log(token);
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/client/${id}`;
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const dataRes = await response.json();
    //console.log("dataRes: ", dataRes);
    return dataRes;
  } catch (error) {
    console.error("Failed to show data client:", error);
    throw new Error("Failed to show data client.");
  }
}

//Por hacer......
async function modifyInfoClient(id, token) {
  console.log("Info cliente");
  console.log("id en infoCLien:", id);
  console.log(token);
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/client/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const dataRes = await response.json();
    console.log("dataRes: ", dataRes);
    return dataRes;
  } catch (error) {
    console.error("Failed to show data client:", error);
    throw new Error("Failed to show data client.");
  }
}

async function listProject(token) {
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/project`;
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const dataRes = await response.json();
    console.log(dataRes);
    return dataRes;
  } catch (error) {
    console.error("Failed to show data project:", error);
    throw new Error("Failed to show data project.");
  }
}

// Por agregar un id
async function newProject(id, token, data) {
  console.log("proyect data en user.js: ", data);
  console.log("token: ", token);
  console.log("id: ", id);
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/project`;
    console.log("URL: ", url);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const dataRes = await response.json();
    console.log("Data proyecto en user.js:", dataRes);
    return dataRes;
  } catch (error) {
    console.error("Failed to create new proyect:", error);
    throw new Error("Failed to create new proyect.");
  }
}

async function listDeliverynote(token) {
  console.log("listDeliverynotes user.js");
  console.log(token);
  try {
    console.log("Tu lista de albaranes");
    const url = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/deliverynote`;
    console.log(url);
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const dataRes = await response.json();
    console.log("dataRes: ", dataRes);
    return dataRes;
  } catch (error) {
    console.error("Failed to show data client:", error);
    throw new Error("Failed to show data client.");
  }
}

async function newDeliverynote(token, data) {
  console.log("la info de albaranes en user.js: ", data);
  console.log("token: ", token);
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/deliverynote`;
    console.log("URL: ", url);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(
        "La respuesta de la red no fue correcta: " + response.statusText
      );
    }
    const dataRes = await response.json();
    console.log("full data albaranes: ", dataRes);
    return dataRes;
  } catch (error) {
    console.error("Failed to create new deliverynote:", error);
    throw new Error("Failed to create new deliverynote.");
  }
}

export {
  createUser,
  validateUser,
  loginUser,
  listClient,
  newClient,
  infoClient,
  newProject,
  listProject,
  listDeliverynote,
  newDeliverynote,
};

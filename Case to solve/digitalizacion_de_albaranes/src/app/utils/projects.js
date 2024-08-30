"use server";
import { revalidatePath } from "next/cache";

//Funciona
async function modifyInfoProject(id, token, data) {
  console.log("ID en modifyInfoProject: ", id);
  console.log("Token en modifyInfoProject: ", token);
  console.log("Datos a enviar:", JSON.stringify(data));
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/project/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data), // Faltaba el cuerpo de la solicitud para poder ser modificado pavaaaa
    });
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const dataRes = await response.json();
    return dataRes;
  } catch (error) {
    console.error("Failed to show data client:", error);
    throw new Error("Failed to show data client.");
  }
}

async function infoProject(id, token) {
  console.log("id en infoProject user.js:", id);
  console.log(token);
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/project/one/${id}`;
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
    return dataRes;
  } catch (error) {
    console.error("Failed to show data client:", error);
    throw new Error("Failed to show data client.");
  }
}
//Funciona
async function listProjects(token) {
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
    return dataRes;
  } catch (error) {
    console.error("Failed to show data project:", error);
    throw new Error("Failed to show data project.");
  }
}

//Funciona
async function newProject(token, data) {
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
    revalidatePath("/user/projects");
    return dataRes;
  } catch (error) {
    console.error("Failed to create new proyect:", error);
    throw new Error("Failed to create new proyect.");
  }
}
async function deleteProject(id, token) {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/project/${id}`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error de red: ${response.statusText}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(`Error al eliminar el proyecto:${error.message}}`);
  }
}

export {
  modifyInfoProject,
  infoProject,
  newProject,
  listProjects,
  deleteProject,
};

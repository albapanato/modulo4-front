"use server";
import { revalidatePath } from "next/cache";

//Funciona
async function listClients(token) {
  try {
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
    return dataRes;
  } catch (error) {
    throw new Error("Failed to show data client.");
  }
}

//Funciona
async function newClient(token, data) {
  //Sale por el catch
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/client`;
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
    revalidatePath("/user");
    return dataRes;
  } catch (error) {
    throw new Error("Failed to create new client.");
  }
}

//Funciona
async function infoClient(id, token) {
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

    return dataRes;
  } catch (error) {
    return { error: true };
  }
}

//Funciona
async function deleteClient(id, token) {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/client/${id}`;
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
    revalidatePath("/user"); //recarga la pagina al borrar el albaran
    return result;
  } catch (error) {
    throw new Error("No se pudo eliminar el cliente.");
  }
}
export { listClients, newClient, infoClient, deleteClient };

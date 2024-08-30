"use server";
import { revalidatePath } from "next/cache";

//Funciona
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
    console.log("listado de albaranes: ", dataRes);
    return dataRes;
  } catch (error) {
    console.error("Failed to show data client:", error);
    throw new Error("Failed to show data client.");
  }
}
// Funciona
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
    revalidatePath("/user/deliverynotes");
    return dataRes;
  } catch (error) {
    console.error("Failed to create new deliverynote:", error);
    throw new Error("Failed to create new deliverynote.");
  }
}

async function infoDeliverynote(id, token) {
  console.log("id en infoDeliverynote user.js:", id);
  console.log(token);

  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/deliverynote/${id}`;
    console.log("url llamada infoDeliverynote: ", url);
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
    // throw new Error("Failed to show data client.");
    return { error: true };
  }
}
async function deleteDeliverynote(id, token) {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/deliverynote/${id}`;
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
    revalidatePath("/user/deliverynotes"); //recarga la pagina al borrar el albaran
    return result;
  } catch (error) {
    console.error("Error al eliminar el albarán:", error);
    throw new Error("No se pudo eliminar el albarán.");
  }
}

export {
  listDeliverynote,
  newDeliverynote,
  infoDeliverynote,
  deleteDeliverynote,
};

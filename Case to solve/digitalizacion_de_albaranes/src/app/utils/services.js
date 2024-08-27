"use client";

export async function downloadDeliveryNotePDFclient(id, token) {
  console.log("TOKEN ", token);
  const url = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/deliverynote/pdf/${id}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error de red: ${response.statusText}`);
    }

    const newTab = window.open("", "_blank");
    const blob = await response.blob();
    const urlBlob = window.URL.createObjectURL(blob);
    newTab.location.href = urlBlob;
  } catch (error) {
    console.error("Error al abrir el PDF del albarán:", error);
    throw new Error("No se pudo abrir el PDF del albarán.");
  }
}

export function getCookie(name) {
  if (typeof window === "undefined") return null;
  let cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    let [key, value] = cookie.trim().split("=");
    if (key === name) {
      return decodeURIComponent(value);
    }
  }
  return null;
}

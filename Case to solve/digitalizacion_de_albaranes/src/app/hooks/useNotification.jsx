"use client";

import { useState } from "react";

function useNotification() {
  const [notification, setNotification] = useState({
    message: "",
    type: "success", // 'success', 'error', 'warning'
    visible: false,
  });

  const showNotification = (message, type = "success") => {
    setNotification({ message, type, visible: true });
    setTimeout(() => {
      setNotification((prev) => ({ ...prev, visible: false }));
    }, 3000); // Desaparece después de 3 segundos
  };

  return { notification, showNotification };
}

export default useNotification;

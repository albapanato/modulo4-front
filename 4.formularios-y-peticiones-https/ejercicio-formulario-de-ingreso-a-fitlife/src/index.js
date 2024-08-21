import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <img
      class="fondo"
      src="https://www.2playbook.com/uploads/s1/34/16/08/dsc0259.jpeg"
      alt="foto del gimnasio"
    ></img>
    <img
      class="fondo2"
      src="https://media.revistagq.com/photos/65b12cd1df908a3c3a4d7373/16:9/w_2560%2Cc_limit/fitness%2520portada.jpg"
      alt="entrenamiento"
    ></img>
    <img
      class="fondo3"
      src="https://media.gq.com.mx/photos/630e6437bdfc76974d4fcc77/16:9/w_2560%2Cc_limit/entrenador-1140116899.jpg"
      alt="entrenamiento"
    ></img>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

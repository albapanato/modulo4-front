import React, { useState } from "react";

function ActividadesGim() {
  const [actividades, setActividades] = useState([
    {
      id: 1,
      nombre: "Yoga",
      descripcion: "Clase de yoga para todos los niveles",
      duracion: "1 hora",
      img: "https://albadanatural.es/wp-content/uploads/2018/06/yoga-e1545341611900.jpg",
      display: false,
    },
    {
      id: 2,
      nombre: "Zumba",
      descripcion: "Clase de baile para quemar calorías",
      duracion: "1 hora",
      img: "https://eurofitness.com/wp-content/uploads/2019/10/Bailar-Zumba-y-adelgazar-es-f%C3%A1cil-22X22-Consejos-y-trucos.jpg",
      display: false,
    },
    {
      id: 3,
      nombre: "Spinning",
      descripcion: "Clase de ciclismo en interior",
      duracion: "45 minutos",
      img: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/3/20/xkzx5rbrdfwvdldnfnez/spinning-bici",
      display: false,
    },
    {
      id: 4,
      nombre: "Boxeo",
      descripcion: "Entrenamiento de boxeo para mejorar la resistencia",
      duracion: "1 hora",
      img: "https://www.tagoya.com/blog/wp-content/uploads/2021/09/como-rellenar-saco-boxeo-1.jpg",
      display: false,
    },
    {
      id: 5,
      nombre: "CrossFit",
      descripcion: "Entrenamiento de alta intensidad",
      duracion: "1 hora",
      img: "https://phantom-marca.unidadeditorial.es/7a1f0f40874d7b77311aeaa7966ed511/resize/828/f/jpg/assets/multimedia/imagenes/2021/03/12/16155418153026.png",
      display: false,
    },
    {
      id: 6,
      nombre: "AquaGim",
      descripcion:
        "Entrenamiento de intensidad moderada para aumentar la movilidad",
      duracion: "45 minutos",
      img: "https://gimnasios.fitness/media/blog/material-para-aquagym.jpg",
      display: false,
    },
    {
      id: 7,
      nombre: "Pilates",
      descripcion:
        "Ejercicios de bajo impacto que mejoran la flexibilidad, la fuerza muscular y el equilibrio",
      duracion: "60 minutos",
      img: "https://beyogabcn.com/wp-content/uploads/2023/12/pilates-mat-barcelona-720x481-1.jpg",
      display: false,
    },
    {
      id: 8,
      nombre: "Kickboxing",
      descripcion:
        "Entrenamiento de alta intensidad que combina movimientos de boxeo y artes marciales",
      duracion: "60 minutos",
      img: "https://robkaman.com/wp-content/uploads/2023/06/Women-in-Kickboxing-2.jpg",
      display: false,
    },
  ]);

  const [mostrar, setMostrar] = useState(false);

  const handleMostrarActividades = () => {
    setMostrar(!mostrar);
  };

  const handleMostrarDescripcion = (id) => {
    const nuevoArray = actividades.map(
      (actividad) => {
        if (actividad.id === id) {
          actividad.display = !actividad.display;
        }
        return actividad;
      }
      // actividad.id === id ? { ...actividad, display:!actividad.display } : actividad
    );
    setActividades(nuevoArray);
    //setAvtividades(nuevoArrayActividades)
  };
  console.log(actividades);
  return (
    <div className="ContenedorActividades">
      <h2>Nuestras clases</h2>
      {mostrar && (
        <div className="Actividades">
          {actividades.map((actividad) => (
            <div
              className={`actividad${actividad.id}`}
              style={{ marginTop: "20px", padding: "15px" }}
              key={actividad.id}
            >
              <h3 className="tituloActividad">{actividad.nombre}</h3>
              {/* <p>{actividad.descripcion}</p>
              <p>{actividad.duracion}</p> */}
              <img
                onClick={() => handleMostrarDescripcion(actividad.id)}
                style={{
                  width: "350px",
                  height: "250px",
                  cursor: "pointer",
                }}
                src={actividad.img}
                alt={actividad.nombre}
              />
              {actividad.display && (
                <div className="fantasma">
                  <p className="infoActividad">{actividad.descripcion}</p>
                  <p className="infoActividad">{actividad.duracion}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      <button className="BotonActividades" onClick={handleMostrarActividades}>
        {mostrar
          ? "OCULTAR ACTIVIDADES"
          : "PINCHA EN CADA UNA DE ELLAS PARA SABER MAS"}
      </button>
    </div>
  );
}

export default ActividadesGim;

Formulario de ingreso a FitLife
En este ejercicio vamos a imaginar que hemos aceptado un trabajo para la creación de un formulario de ingreso al gimnasio FitLife. Tu misión será desarrollar un formulario de registro intuitivo y atractivo para que los nuevos miembros puedan unirse a FitLife con facilidad. El formulario debe ser atractivo y fácil de usar, reflejando la vibra moderna y acogedora de nuestro gimnasio.

1. Requisitos del formulario

- Componentes:

Crear componentes reutilizables para cada sección del formulario (datos personales, información de contacto, preferencias de entrenamiento, etc.).

Implementar la lógica de cada sección como un componente independiente.

- Props y State:

Pasar datos entre componentes utilizando props.

Gestionar el estado interno de cada componente con useState.

- Manejo de eventos:

Validar la entrada del usuario en tiempo real.

Mostrar mensajes de error y éxito. -- Manejo de errores con CSS con condicionales

- Comunicación hijo-padre:

Enviar datos desde el componente hijo al componente padre al completar el formulario.

- Condicionales y Listas:

Mostrar u ocultar elementos del formulario según las opciones del usuario.

Mostrar una lista de opciones de entrenamiento disponibles.

- Aplicación de estilos:

Aplicar estilos CSS a los componentes para una interfaz atractiva.

Usar clases CSS para diferentes estados de los elementos (activo, inactivo, error).

- Estilos dinámicos:

Cambiar estilos dinámicamente según las opciones del usuario.

Styled Components: -- esto noo

Implementar styled components para una mejor organización y mantenimiento del código CSS.

CSS Modules: -- esto noo

Usar CSS Modules para evitar conflictos de nombres de clase.

- Peticiones HTTP:

Enviar datos del formulario al servidor para registrar al nuevo miembro.

Librerías:

Implementar una librería de gestión de formularios como Formik o React Hook Form para facilitar la validación y el manejo de errores.

2. Recursos adicionales
   Documentación de React: https://es.reactjs.org/docs/

Formik: https://formik.org/

React Hook Form: https://react-hook-form.com/

3. Consejos
   Divide el formulario en secciones pequeñas y manejables.

Comienza con una versión simple del formulario y ve agregando funcionalidades gradualmente.

Prueba el formulario con diferentes casos de uso para asegurarte de que funciona correctamente.

Pide feedback a tus compañeros o profesores para mejorar la experiencia del usuario.

Guía para realizar el ejercicio
Planificación y Diseño

Definir las secciones del formulario:

Datos personales (nombre, correo electrónico, teléfono)

Información de contacto (dirección, ciudad, código postal)

Preferencias de entrenamiento (tipo de entrenamiento, objetivos, disponibilidad)

Datos de pago (método de pago, información de la tarjeta)

Diseñar la interfaz del formulario:

Elegir una paleta de colores y tipografía que represente la marca FitLife.

Crear un diseño atractivo y fácil de usar para cada sección del formulario.

Utilizar imágenes y vídeos para mostrar el ambiente del gimnasio y las clases disponibles. --opcional 

Implementación de React

Componentes:

Crear un componente principal para el formulario que contenga los demás componentes.

Desarrollar componentes independientes para cada sección del formulario.

Pasar datos entre componentes utilizando props.

Props y State:

Definir el estado interno de cada componente con useState.

Pasar datos dinámicos a los componentes como props.

Manejo de eventos:

Validar la entrada del usuario en tiempo real.

Mostrar mensajes de error y éxito.

Implementar eventos para enviar el formulario.

Funcionalidades avanzadas

Comunicación hijo-padre:

Enviar datos desde el componente hijo al componente padre al completar el formulario.

Condicionales y Listas:

Mostrar u ocultar elementos del formulario según las opciones del usuario.

Mostrar una lista de opciones de entrenamiento disponibles.

Aplicación de estilos:

Aplicar estilos CSS a los componentes para una interfaz atractiva.

Usar clases CSS para diferentes estados de los elementos (activo, inactivo, error).

Estilos dinámicos:

Cambiar estilos dinámicamente según las opciones del usuario.

Integración de librerías

Formik o React Hook Form:

Implementar una librería de gestión de formularios para facilitar la validación y el manejo de errores.

Configurar las reglas de validación para cada campo del formulario.

Mostrar mensajes de error personalizados.

Peticiones HTTP

Enviar datos del formulario al servidor:

Implementar una API para registrar al nuevo miembro.

Enviar una petición HTTP al servidor con los datos del formulario.

Mostrar un mensaje de éxito o error al completar la solicitud.

Consejos de integración de Formik y peticiones HTTP en tu formulario FitLife
Instalación de Formik
Comienza instalando las librerías necesarias:

npm install formik yup

Implementación básica de Formik

Componente principal (ejemplo):

import { useFormik } from 'formik';

import Yup from 'yup';

const MyForm = () => {

const formik = useFormik({

    initialValues: {

      nombre: '',

      email: '',

      telefono: '',

    },

    validationSchema: Yup.object({

      nombre: Yup.string().required('El nombre es obligatorio'),

      email: Yup.string().email('Introduce un email válido').required('El email es obligatorio'),

      telefono: Yup.string().required('El teléfono es obligatorio'),

    }),

    onSubmit: (values) => {

      // Enviar datos a la API

      console.log('Formulario enviado:', values);

    },

});

return (

    <form onSubmit={formik.handleSubmit}>

      <input type="text" name="nombre" value={formik.values.nombre} onChange={formik.handleChange} />

      {formik.errors.nombre && <p className="error">{formik.errors.nombre}</p>}

      ... (similar para email y telefono)

      <button type="submit">Enviar</button>

    </form>

);

};

useFormik crea un hook que nos permite gestionar el estado del formulario.

initialValues define los valores iniciales de los campos del formulario.

validationSchema define las reglas de validación para cada campo.

onSubmit se ejecuta cuando se envía el formulario.

Envío de datos a una API

Función para enviar la petición POST (ejemplo):

const enviarDatosAPI = async (datos) => {

const respuesta = await fetch('https://api.fitlife.com/registro', {

    method: 'POST',

    headers: {

      'Content-Type': 'application/json',

    },

    body: JSON.stringify(datos),

});

if (respuesta.ok) {

    // Mostrar mensaje de éxito

    console.log('Usuario registrado correctamente');

} else {

    // Mostrar mensaje de error

    console.log('Error al registrar usuario');

}

};

Integración en el componente

const MyForm = () => {

...

onSubmit: (values) => {

    enviarDatosAPI(values);

},

...

};

enviarDatosAPI envía una petición POST a la API con los datos del formulario.

Se comprueba la respuesta de la API para mostrar un mensaje de éxito o error.

import React, { useState } from 'react';
import Mensaje from './Message';


function Login(){

    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [mensaje,setMensaje] =useState('')
    //. . .Sigue añadiendo campos

    const handleUsuarioChange = (e) => setUsuario(e.target.value);
    const handleContraseñaChange=(e)=> setContraseña(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const usernameCorrecto = 'admin';
        const passwordCorrecto = '123456';

        if(!usuario||!contraseña){
            return setMensaje('Introduce ambos campos')
        }
        if (usuario === usernameCorrecto && contraseña === passwordCorrecto) {
            return setMensaje(`Bienvenido ${usuario}!`)
        }else{
            setMensaje('Usuario o contraseña incorrectos.')
        }
    };
    
    return (
      <div className='wrapper'>
        <h1>LOGIN</h1>
          <form className='formulario' onSubmit={handleSubmit}>
              <label className='label' htmlFor="usuario">Usuario:</label>
              <input type='text' onChange={handleUsuarioChange}></input>
              <label className='label'htmlFor="contrasena">Password:</label>
              <input type='text' onChange={handleContraseñaChange}></input>
              <button type='submit'>Iniciar sesion</button>
          </form>
          {mensaje && <Mensaje mensaje={mensaje} />}
      </div>
    );
};


export default Login

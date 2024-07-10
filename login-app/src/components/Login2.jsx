import React, { useState } from 'react';
import Mensaje from './Message';

function Login2(){

    const [credenciales,setCredenciales]=useState({
        usuario: '',
        contraseña:'',
        mensaje:''
    })

    const handleCredencialesChange= (e,field)=>{
        setCredenciales({
            ...credenciales,
            [field]:e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const usernameCorrecto = 'ignacio';
        const passwordCorrecto = '123456';

        if (credenciales.usuario === usernameCorrecto && credenciales.contraseña === passwordCorrecto) {
            return setCredenciales({
                ...credenciales,
                mensaje:`Bienvenido ${credenciales.usuario}!`}

            )
        }else{
            setCredenciales({
                ...credenciales,
                mensaje:`Usuario o contraseña incorrectos.`
            })
        }
    }
        return (
            <div className='wrapper'>
                <h1>LOGIN</h1>
                <form className='formulario' onSubmit={handleSubmit}>
                    <label className='label' htmlFor="usuario">Usuario:</label>
                    <input type='text' onChange={(e)=> handleCredencialesChange(e, 'usuario')}></input>
                    <label className='label' htmlFor="contrasena">Password:</label>
                    <input type='text' onChange={(e)=> handleCredencialesChange(e, 'contraseña')}></input>
                    <button type='submit'>Iniciar sesion</button>
                </form>
                {credenciales.mensaje && <Mensaje mensaje={credenciales.mensaje} />}
            </div>

        );
};


export default Login2
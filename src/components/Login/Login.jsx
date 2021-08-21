import React from 'react'
import { useState } from 'react';


function initialState(){
    return {user: '', password: '' };
}


export default function userLogin() {

    const [value, setValue] = useState(initialState)

    function onChange(event){
        const { value, usuario } = event.target
        
        setValue({
            ...value,
            [usuario]: value
        });

    }
    

    return (
        <div>
            <h1>ByteBank</h1>

            <form>
            <label>Usuario</label>

            <input 
            placeholder="CPF" 
            type="text" 
            name="usuario"
            onChange={onChange}
            value={value.user} />

            <label>Senha</label>

            <input 
            placeholder="Senha" 
            type="text" 
            name="password"
            onChange={onChange}
            value={value.password}
            />

            <button>LogIn</button>
            </form>
        </div>
    )
}
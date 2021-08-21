import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import { useHistory } from "react-router-dom";

import '../Login/login.css'
import wallpaperfirst from '../../img/wallpaperfirst.svg';
import wallpaperfundo from '../../img/wallpaperfundo.svg';



export default function UserLogin() {

    const history = useHistory();
    const goHome = () => history.push('/');


    return (
        <div className="Login">
            <h1 className="Login-Title"><strong>ByteBank</strong></h1>

            <form>
                <label>Usuario</label>

                <input
                    placeholder="CPF"
                    type="text"
                    name="usuario" />

                <label
                className="label-senha">Senha</label>

                <input
                    placeholder="Senha"
                    type="password"
                    name="password"
                />
                <div>
                    <Router>
                        <button to="/" className="loginbutton" onClick={goHome}>LogIn</button>
                    </Router>
                </div>
            </form>
            <img id="img1" className="background-first" src={wallpaperfirst} />
            <img id="img2" className="background-second" src={wallpaperfundo} />
        </div>
    )
}
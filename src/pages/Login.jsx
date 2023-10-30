import React from "react";
import "./css/Login.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Login() {
  return (
    <div className="Login">
      <div className="Login-container">
        <h2>Iniciar Sesión</h2>
        <form className="Login-fields">
          <input type="email" placeholder="Email" required />
          <input
            type="password"
            placeholder="Contraseña"
            name=""
            id=""
            required
          />
           <input type="submit" value="Continuar" className="btn-submit"/>
        </form>
        
<br /><br /><br />
        <p className="create-acount">
          Aun no tienes una cuenta? <Link to="/Singup"><a href="">Registrate aquí</a></Link>
        </p>
      </div>
    </div>
  );
}

export default Login;

import React from "react";
import "./css/Singup.css"
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { auth } from "../assets/helpers/users_firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function SingUp() {
  const [person, setPerson] = useState({});
  const [user, setUser] = useState({});

  const person2 = {
    name:"",
    lastName:"",
    shippingAddess:"",
    phoneNumber:[]
  }
  const setName = (name)=> {
    setPerson({

    })
  }

  const singUp = (e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) =>{
      console.log(userCredential);
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div className="Singup">
      <div className="Singup-container">
        <h2>Registro de Usuario</h2>
        <form className="Singup-fields" onSubmit={singUp}>
          <input type="text" placeholder="Nombres" required  />
          <input type="text" placeholder="Apellidos" required />
         <label htmlFor="" >Tipo de identificación: </label>
          <select name="" id="" value="id-type">
            <option value="CC" selected>Cédula de ciudadanía</option>
            <option value="CE" >Cédula de extrangería</option>
          </select>
          <input type="number" placeholder="Número de identificación"  required/>
          <input type="email" placeholder="Email"  required/>
          <input type="password" placeholder="Contraseña"  name="" id=""  required/>
          <input type="text" placeholder="Dirección de envío"  required/>
          <input type="number" placeholder="Número telefónico"  required/>
          <input type="number" placeholder="Alternativa número telefónico (opcional)" />
          <input type="submit" value="Continuar" className="btn-submit"/>
        </form>
        <div className="Singup-agree">
          <input type="checkbox" name="" id="" />
          <p>Para continuar con el proceso de registro, debes estar de acuerdo con las politicas de tratamiento de datos.</p>
        </div>
        
        <p className="Singup-login">Ya tienes una cuenta? <Link to="/Login"><a href="">Ingresa aquí</a></Link> </p>
        
      </div>
    </div>
  );
}

export default SingUp;

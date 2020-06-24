import React, { Component, useState} from 'react';
import { Link } from "react-router-dom";
import './client.css';

const urlapi = process.env.REACT_APP_APIURL || ''

const AskedNumber = (props) => {
    const [state, setState] = useState({
        id: "",
        email: "",
        phone: "",
    }) 
    const handleChange = e => {
        e.preventDefault()
        setState({
        ...state,
          [e.target.name]: e.target.value
        })
      }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state)
         if(state.id ==="" || state.email ==="" || state.phone ===""){
             alert("Se deben de llenar todos los campos")
             return;
         }
        fetch(urlapi + 'petitions', {
            method: 'POST',
            body: JSON.stringify(state)
        }).then(response => response.json()).then(posts => {
            props.history.push('/petitions_2')
        })
    }
    return(
                <div>
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div class="container">
                        <li>
                            <div className="row col-md-3 offset-sm-1">
                                <img className="pb-4" src='./Logo.svg' width='180' />
                            </div>
                        </li>
                        <ul class="nav justify-content-end">
                            <Link className="navbar-brand" to="/">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Home</a>
                                </li>
                            </Link>
                        </ul>
                        </div>
                    </nav>
                <div class="pt-5"></div>
                <div class="container-lg mx-auto float-md-right">
                    <button type="button" class="btn btn-dark ml-5 w-auto">1</button>
                    <span class="badge badge-pill pr-0 pl-0">———————</span>
                    <button type="button" class="btn btn-light w-25 w-auto">2</button>
                    <span class="badge badge-pill pr-0 pl-0">———————</span>
                    <button type="button" class="btn btn-light w-25 w-auto">3</button>
                    <span class="badge badge-pill pr-0 pl-0">———————</span>
                    <button type="button" class="btn btn-light w-25 w-auto">4</button>
                    <span class="badge badge-pill pr-0 pl-0 ">———————</span>
                    <button type="button" class="btn btn-light w-25 w-auto">5</button>
                </div>
    
                <form on onSubmit={handleSubmit} class="needs-validation container-md">
                    <div class="pb-5"></div>
                    <legend id="title" class="col-form-label font-weight-bold pb-0">Iniciando la solicitud</legend>
                    <legend id="instructions" class="col-form-label pt-0">Ingrese los siguientes datos.</legend>
                    <label id="instructions" for="formGroupExampleInput validationNumberRequest" class="pt-3">¿Cuál es el número de pedido? (*)</label>
                    <input type="text" class="form-control w-50" id="formGroupExampleInput validationNumberRequest" required name="id" onChange={handleChange}></input>
                    <label id="instructions" for="exampleInputEmail1" class="pt-3">Correo electrónico (*)</label>
                    <input type="email" class="form-control w-50" id="exampleInputEmail1" aria-describedby="emailHelp" required name="email" onChange={handleChange}></input>
                    <label id="instructions" for="formGroupExampleInput" class="pt-3">Teléfono (*)</label>
                    <input type="text" class="form-control w-50" id="formGroupExampleInput" name="phone" required onChange={handleChange}></input>
                    <div class="pt-3 pb-3"></div>
                    <a href="https://api.whatsapp.com/send?phone=+56993232898&text=&source=&data=&app_absent=" type="button" class="btn btn-success w-auto"><i class="fa fa-whatsapp"></i> ¡Contáctanos por What's App!</a>
                    <div class="pb-3"></div>
                    <button href="petitions_2" type="submit" class="btn btn-dark button-md-size w-auto">Siguiente</button>
                </form>
                <div className="footer footer_bottom mt-3 w-100">
                            <div className="py-3 bg-dark">
                                <div className="container">
                                    <ul class="nav justify-content-end">
                                        <li class="nav-item mx-auto">
                                            <p class="white-font text-centered">S H I P B A C K © 2020. Todos los derechos reservados.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
            </div>
    )
}

export default AskedNumber;
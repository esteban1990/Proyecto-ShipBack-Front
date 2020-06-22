import React, { Component, useState } from 'react';
import { Link } from "react-router-dom";
import './client.css';

const urlapi = process.env.REACT_APP_APIURL || ''

const QuestType = (props) => {
    const [state, setState] = useState({
        change_or_return: "",
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
        if (state.change_or_return === "") {
            alert("Seleccione si desea cambiar o devolver el producto")
            return;
        }
        fetch(urlapi + '/posts', {
            method: 'POST',
            body: JSON.stringify(state)
        }).then(response => response.json()).then(posts => {
            props.history.push('/petitions_3')
        })
    }
    return (
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
                <button type="button" class="btn btn-light ml-5 w-auto">1</button>
                <span class="badge badge-pill pr-0 pl-0">———————</span>
                <button type="button" class="btn btn-dark w-25 w-auto">2</button>
                <span class="badge badge-pill pr-0 pl-0">———————</span>
                <button type="button" class="btn btn-light w-25 w-auto">3</button>
                <span class="badge badge-pill pr-0 pl-0">———————</span>
                <button type="button" class="btn btn-light w-25 w-auto">4</button>
                <span class="badge badge-pill pr-0 pl-0 ">———————</span>
                <button type="button" class="btn btn-light w-25 w-auto">5</button>
            </div>


            <form class="container-md" on onSubmit={handleSubmit}>
                <div class="pb-5"></div>
                <legend id="title" class="col-form-label font-weight-bold">Detalles del pedido</legend>
                <legend id="instructions" class="col-form-label pt-3">Seleccione los productos que desea cambiar o devolver. Debe elegir al menos 1. (*)</legend>
                <div class="pb-5"></div>
                <table class="table pt-3" required>
                    <tr>
                        <th scope="col">Número</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Seleccionar</th>
                    </tr>
                    <th scope="row">1</th>
                    <td>Pack x2 Pantalon Buzo de Polar Niño</td>
                    <td>$ 7.990</td>
                    <td><input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" /></td>
                </table>
                <fieldset class="form-group">
                    <legend id="instructions" class="col-form-label">¿Desea cambiar o devolver el producto? (*)</legend>
                    <select class="form-control w-50" id="exampleFormControlSelect1" onChange={handleChange} required name="change_or_return">
                        <option>Seleccione una opción</option>
                        <option name="change">Cambiar producto</option>
                        <option name="return">Devolver producto</option>
                    </select>
                </fieldset>
                <div class="pb-3"></div>
                <a href="https://api.whatsapp.com/send?phone=+56993232898&text=&source=&data=&app_absent=" type="button" class="btn btn-success w-auto"><i class="fa fa-whatsapp"></i> ¡Contáctanos por What's App!</a>
                <div class="pb-3"></div>
                <a href="petitions_1" type="button" class="btn btn-secondary mr-1 w-auto">Anterior</a>
                <button href="petitions_3" type="submit" class="btn btn-dark w-auto">Siguiente</button>
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
    );
}

export default QuestType;
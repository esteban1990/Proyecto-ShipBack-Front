import React, { Component, useState } from 'react';
import { Link } from "react-router-dom";
import './client.css'

const urlapi = process.env.REACT_APP_APIURL || ''

const Change = (props) => {
    const [state, setState] = useState({
//        change_product: "",
        state: "",
        city: "",
        address: "",
        commune: "",
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
         if(
//            change_product ==="" || 
            state.state ==="" || state.city ==="" || state.address ==="" || state.commune ===""){
             alert("Se deben de llenar todos los campos")
             return;
         }
        fetch(urlapi + '/posts', {
            method: 'POST',
            body: JSON.stringify(state)
        }).then(response => response.json()).then(posts => {
            props.history.push('/petitions_5')
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
                <button type="button" class="btn btn-light w-25 w-auto">2</button>
                <span class="badge badge-pill pr-0 pl-0">———————</span>
                <button type="button" class="btn btn-dark w-25 w-auto">3</button>
                <span class="badge badge-pill pr-0 pl-0">———————</span>
                <button type="button" class="btn btn-light w-25 w-auto">4</button>
                <span class="badge badge-pill pr-0 pl-0 ">———————</span>
                <button type="button" class="btn btn-light w-25 w-auto">5</button>
            </div>

            <form class="container-md" on onSubmit={handleSubmit}>
                <div class="pb-5"></div>
                <legend id="title" class="col-form-label font-weight-bold">Cambio de producto</legend>
                <legend id="instructions" class="col-form-label">Seleccione los productos por los que desea cambiar su pedido actual. Debe elegir al menos 1.</legend>
                <div class="pb-3"></div>
                <table class="table pt-3">
                    <tr>
                        <th scope="col">Número</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Seleccionar</th>
                    </tr>
                    <th scope="row">1</th>
                    <td>Pack x2 Pantalon Buzo de Polar Niño</td>
                    <td>$ 7.990</td>
                    <td><input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" onChange={handleChange}/></td>
                </table>
                <div class="pb-3"></div>

                <select class="custom-select mr-sm-2 w-50" id="inlineFormCustomSelect" name="state" required onChange={handleChange}>
                    <option selected>Región</option>
                    <option value="1">Arica y Parinacota.</option>
                    <option value="2">Tarapacá.</option>
                    <option value="3">Antofagasta.</option>
                    <option value="4">Atacama.</option>
                    <option value="5">Coquimbo.</option>
                    <option value="6">Valparaíso.</option>
                    <option value="7">Metropolitana de Santiago.</option>
                    <option value="8">Libertador General Bernardo O'Higgins.</option>
                    <option value="9">Maule.</option>
                    <option value="10">Ñuble.</option>
                    <option value="11">Biobío.</option>
                    <option value="12">Araucanía.</option>
                    <option value="13">Ríos.</option>
                    <option value="14">Lagos.</option>
                    <option value="15">Aisén del G. Carlos Ibáñez del Campo.</option>
                    <option value="16">Magallanes y la Antártica Chilena.</option>
                </select>

                <div class="pb-2"></div>

                <label id="instructions" for="formGroupExampleInput" class="pt-3" >Dirección de despacho (*)</label>
                <input type="text" class="form-control w-50" id="formGroupExampleInput" name="address" required onChange={handleChange}></input>

                <label id="instructions" for="formGroupExampleInput" class="pt-3">Ciudad de despacho (*)</label>
                <input type="text" class="form-control w-50" id="formGroupExampleInput" name="city" required onChange={handleChange}></input>

                <label id="instructions" for="formGroupExampleInput" class="pt-3">Comuna de despacho (*)</label>
                <input type="text" class="form-control w-50" id="formGroupExampleInput" name="commune" required onChange={handleChange}></input>

                <div class="pb-3"></div>
                <a href="https://api.whatsapp.com/send?phone=+56993232898&text=&source=&data=&app_absent=" type="button" class="btn btn-success w-auto"><i class="fa fa-whatsapp"></i> ¡Contáctanos por What's App!</a>
                <div class="pb-3"></div>
                <a href="petitions_2" type="button" class="btn btn-secondary mr-1 w-auto">Anterior</a>
                <button href="petitions_5" type="submit" class="btn btn-dark w-auto">Siguiente</button>
            </form>
            <div className="footer mt-3 w-100">
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


export default Change;
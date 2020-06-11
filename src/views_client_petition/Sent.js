import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './client.css'

class Sent extends Component {
    render() {
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
                    <button type="button" class="btn btn-light w-25 w-auto">3</button>
                    <span class="badge badge-pill pr-0 pl-0">———————</span>
                    <button type="button" class="btn btn-light w-25 w-auto">4</button>
                    <span class="badge badge-pill pr-0 pl-0 ">———————</span>
                    <button type="button" class="btn btn-dark w-25 w-auto">5</button>
                </div>

                <div class="container-md">
                    <div class="pb-5"></div>
                    <legend id="title" class="col-form-label font-weight-bold pt-5">¡Muchas gracias por su pedido!</legend>
                    <legend id="instructions" class="col-form-label">El código de su solicitud es: 123456AB</legend>
                    <legend id="instructions" class="col-form-label">Le enviaremos el código de su solicitud junto con los detalles de su transaccion a usuario@dominio.cl</legend>
                </div>
            </div>
        );
    }
}
export default Sent;
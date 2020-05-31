import React, { Component } from 'react';

class Sent extends Component {
    render() {
        return (
            <div>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="row  col-md-3 offset-sm-1">
                        <a className="navbar-brand" href="#">
                            S H I P B A C K
                        </a>
                    </div>
                    <div className="row  col-sm-2 offset-sm-5">
                        <ul className="navbar-nav pl-5">
                            <li className="nav-item active">
                                <a className="nav-link offset-sm-5" href="#">
                                    Account
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="pt-5"></div>
                <div class="pt-5"></div>
            <div class="container-lg mx-auto pr-3 mr-3 mt-3">
                <button type="button" class="btn btn-light ml-5">1</button>
                <span class="badge badge-pill pr-0 pl-0">———————</span>
                <button type="button" class="btn btn-light">2</button>
                <span class="badge badge-pill pr-0 pl-0">———————</span>
                <button type="button" class="btn btn-light">3</button>
                <span class="badge badge-pill pr-0 pl-0">———————</span>
                <button type="button" class="btn btn-light">4</button>
                <span class="badge badge-pill pr-0 pl-0">———————</span>
                <button type="button" class="btn btn-dark">5</button>
            </div>

                <div class="container-md">
                    <div class="pb-5"></div>
                    <legend class="col-form-label font-weight-bold">¡Muchas gracias por su pedido!</legend>
                    <legend class="col-form-label">El código de su solicitud es: 123456AB</legend>
                    <legend class="col-form-label">Le enviaremos el código de su solicitud junto con los detalles de su transaccion a usuario@dominio.cl</legend>
                </div>
            </div>
        );
    }
}
export default Sent;
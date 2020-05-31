import React, { Component } from 'react';

class AskedNumber extends Component {
    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="row  col-md-3 offset-sm-1">
                    <a className="navbar-brand" href="#">
                        S H I P B A C K
                    </a>
                </div>
                <div className="row col-sm-2 offset-sm-5">
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
                <button type="button" class="btn btn-dark ml-5">1</button>
                <span class="badge badge-pill pr-0 pl-0">———————</span>
                <button type="button" class="btn btn-light">2</button>
                <span class="badge badge-pill pr-0 pl-0">———————</span>
                <button type="button" class="btn btn-light">3</button>
                <span class="badge badge-pill pr-0 pl-0">———————</span>
                <button type="button" class="btn btn-light">4</button>
                <span class="badge badge-pill pr-0 pl-0">———————</span>
                <button type="button" class="btn btn-light">5</button>
            </div>

            <form class="needs-validation container-md">
                <div class="pb-5"></div>
                <legend class="col-form-label font-weight-bold mb-0">Iniciando la solicitud</legend>
                <legend class="col-form-label">Ingrese los siguientes datos.</legend>
                <label for="formGroupExampleInput validationNumberRequest">¿Cuál es el número de pedido?</label>
                <input type="text" class="form-control" id="formGroupExampleInput validationNumberRequest"></input>
                <label for="exampleInputEmail1">Correo electrónico</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                <label for="formGroupExampleInput">Teléfono</label>
                <input type="text" class="form-control" id="formGroupExampleInput"></input>
                <div class="pb-3"></div>
                <a href="https://api.whatsapp.com/send?phone=+56993232898&text=&source=&data=&app_absent=" type="button" class="btn btn-success"><i class="fa fa-whatsapp"></i> ¡Contáctanos por What's App!</a>
                <div class="pb-3"></div>
                <a href="petitions_2" type="button" class="btn btn-dark">Siguiente</a>
            </form>
        </div>
        );
    }
}
export default AskedNumber;
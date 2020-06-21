import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './client.css'

const Return = () => {
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

        

        <form class="container-md">
            <div class="pb-3"></div>
            <legend id="title" class="col-form-label font-weight-bold pb-0">Devolución</legend>
            <legend id="instructions" class="col-form-label">Ingrese sus datos de cuenta para efectuar la transacción.</legend>
            <div class="pb-3"></div>
            <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect" />Banco
            <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                <option selected>Seleccione Banco</option>
                    <optgroup label="Instituciones bancarias.">
                        <option value="BBVA">BBVA.</option>
                        <option value="Desarrollo">Banco del Desarrollo.</option>
                        <option value="Chile_Edwards">Banco Chile/Edwards.</option>
                        <option value="Internacional">Banco Internacional.</option>
                        <option value="Estado">Banco Estado.</option>
                        <option value="Scotiabank">Banco Scotiabank.</option>
                        <option value="Bci">Banco Bci.</option>
                        <option value="do_Brasil">Banco do Brasil S.A.</option>
                        <option value="Corpbanca">Corpbanca.</option>
                        <option value="BICE">Banco BICE.</option>
                        <option value="BSBC">Banco HSBC Bank.</option>
                        <option value="Santander">Banco Santander.</option>
                        <option value="Itau">Banco Itaú.</option>
                        <option value="Security">Banco Security.</option>
                        <option value="Falabella">Banco Falabella.</option>
                        <option value="Ripley">Banco Ripley.</option>
                        <option value="RaboBank">RaboBank.</option>
                        <option value="Consorcio">Banco Consorcio.</option>
                        <option value="Paris">Banco Paris.</option>
                    </optgroup>
                    <optgroup label="Otras instituciones no bancarias.">
                        <option value="Coopeuch">Coopeuch.</option>
                        <option value="Los_Heroes">Caja Los Héroes.</option>
                    </optgroup>
            </select>

            <div class="pb-3"></div>
            <label id="instructions" class="mr-sm-2 sr-only" for="inlineFormCustomSelect" />Tipo de cuenta
            <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                <option selected>Seleccione tipo cuenta </option>
                    <option value="Corriente">Cuenta corriente.</option>
                    <option value="Vista">Cuenta vista.</option>
                    <option value="Ahorro">Cuenta de ahorro.</option>
            </select>

            <div class="pb-3"></div>
            <label for="formGroupExampleInput">Número de cuenta</label>
            <input type="text" class="form-control" id="formGroupExampleInput"></input>

            <div class="pb-3"></div>
                <a href="https://api.whatsapp.com/send?phone=+56993232898&text=&source=&data=&app_absent=" type="button" class="btn btn-success w-auto"><i class="fa fa-whatsapp"></i> ¡Contáctanos por What's App!</a>
                <div class="pb-3"></div>
                <a href="petitions_2" type="button" class="btn btn-secondary mr-1 w-auto">Anterior</a>
                <a href="petitions_5" type="button" class="btn btn-dark w-auto">Siguiente</a>
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

export default Return;
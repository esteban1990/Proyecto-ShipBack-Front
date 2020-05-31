import React, { Component } from 'react';
import {Link} from "react-router-dom"


class Return extends Component {
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
                <button type="button" class="btn btn-dark">3</button>
                <span class="badge badge-pill pr-0 pl-0">———————</span>
                <button type="button" class="btn btn-light">4</button>
                <span class="badge badge-pill pr-0 pl-0">———————</span>
                <button type="button" class="btn btn-light">5</button>
            </div>

            
   
            <form class="container-md">
                <div class="pb-3"></div>
                <legend class="col-form-label font-weight-bold">Devolución de producto</legend>
                <legend class="col-form-label">Ingrese sus datos de cuenta para efectuar la transacción.</legend>
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
                <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect" />Tipo de cuenta
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
                <a href="https://api.whatsapp.com/send?phone=+56993232898&text=&source=&data=&app_absent=" type="button" class="btn btn-success"><i class="fa fa-whatsapp"></i> ¡Contáctanos por What's App!</a>
                <div class="pb-3"></div>
                <a href="petitions_2" type="button" class="btn btn-secondary mr-1">Anterior</a>
                <a href="petitions_5" type="button" class="btn btn-dark">Siguiente</a>
            </form>
            </div>
        );
    }
}
export default Return;
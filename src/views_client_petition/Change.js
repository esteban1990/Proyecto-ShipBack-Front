import React, { Component } from 'react';
import { Link } from "react-router-dom"


class Change extends Component {
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
                    <div class="pb-5"></div>
                    <legend class="col-form-label font-weight-bold">Cambio de producto</legend>
                    <legend class="col-form-label">Seleccione los productos por los que desea cambiar su pedido actual. Debe elegir al menos 1.</legend>
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
                        <td><input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" /></td>
                    </table>
                    <div class="pb-3"></div>

                    <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
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

                    <div class="pb-3"></div>

                    <label for="formGroupExampleInput">Dirección de despacho</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" />

                    <label for="formGroupExampleInput">Ciudad de despacho</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" />

                    <label for="formGroupExampleInput">Comuna de despacho</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" />

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
export default Change;
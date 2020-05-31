import React, { Component } from 'react';

class QuestType extends Component {
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
                <button type="button" class="btn btn-dark">2</button>
                <span class="badge badge-pill pr-0 pl-0">———————</span>
                <button type="button" class="btn btn-light">3</button>
                <span class="badge badge-pill pr-0 pl-0">———————</span>
                <button type="button" class="btn btn-light">4</button>
                <span class="badge badge-pill pr-0 pl-0">———————</span>
                <button type="button" class="btn btn-light">5</button>
            </div>


            <form class="container-md">
                <div class="pb-5"></div>
                <legend class="col-form-label font-weight-bold">Detalles del pedido</legend>
                <legend class="col-form-label">Seleccione los productos que desea cambiar o devolver. Debe elegir al menos 1.</legend>
                <div class="pb-5"></div>
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
                <fieldset class="form-group">
                    <legend class="col-form-label">¿Desea cambiar o devolver el producto?</legend>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                        <label class="form-check-label" for="gridRadios1" />Cambiar producto
                </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                        <label class="form-check-label" for="gridRadios1" />Devolver producto
                </div>
                </fieldset>
                <div class="pb-3"></div>
                <a href="https://api.whatsapp.com/send?phone=+56993232898&text=&source=&data=&app_absent=" type="button" class="btn btn-success"><i class="fa fa-whatsapp"></i> ¡Contáctanos por What's App!</a>
                <div class="pb-3"></div>
                <a href="petitions_1" type="button" class="btn btn-secondary mr-1">Anterior</a>
                <a href="petitions_3" type="button" class="btn btn-dark">Siguiente</a>
            </form>
        </div>          
        );
    }
}
export default QuestType;
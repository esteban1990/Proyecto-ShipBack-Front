import React, { Component } from 'react';
import NavBar from '../NavBar/navBar.js';

class Tracking extends Component {
    render() {
        return (
            <div>
            <NavBar />
            <div>
            <div className='tracking container-md mx-auto'>
                <div className="pb-5"></div>
                <form className="bg-dark rounded">
                    <legend className="text-white pl-3">Filtros</legend>
                    <div class="row mx-auto">
                        <div class="col">
                            <input type="text" class="form-control form-control-sm" placeholder="Número de pedido" />
                        </div>
                        <div class="col">
                            <input type="text" class="form-control form-control-sm" placeholder="Correo electrónico" />
                        </div>
                        <div class="col">
                            <select class="form-control form-control-sm">
                                <option>Fecha ingreso</option>
                                <option>Mayo 2020</option>
                                <option>Junio 2020</option>
                                <option>Julio 2020</option>
                                <option>Agosto 2020</option>
                                <option>Septiembre 2020</option>
                                <option>Octubre 2020</option>
                                <option>Noviembre 2020</option>
                                <option>Diciembre 2020</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mx-auto pt-3 pb-3">
                        <div class="col">
                            <select class="form-control form-control-sm">
                                <option>Tipo transacción</option>
                                <option>Cambio</option>
                                <option>Devolución</option>
                            </select>
                        </div>
                        <div class="col">
                            <select class="form-control form-control-sm">
                                <option>Courier</option>
                                <option>Chilexpress</option>
                            </select>
                        </div>
                        <div class="col">
                            <select class="form-control form-control-sm">
                                <option>Estado</option>
                                <option>Pedido enviado</option>
                                <option>En ruta</option>
                                <option>Pedido recibido</option>
                                <option>Pedido rechazado</option>
                                <option>Transacción realizada</option>
                                <option>Transacción rechazada</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-4 mx-auto pl-3 pb-3">
                        <button type="button" class="btn btn-light">Buscar</button>
                    </div>
                </form>
                <div class="pb-5"></div>
                <table class="table table-striped pt-3">
                    <thead>
                        <tr>
                            <th scope="col">Fecha de pedido</th>
                            <th scope="col">ID Usuario</th>
                            <th scope="col">ID Despacho</th>
                            <th scope="col">ID Factura</th>
                            <th scope="col">Productos</th>
                            <th scope="col">Courier</th>
                            <th scope="col">Precio</th>                          
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">458693</th>
                            <td>correo@dominio.cl</td>
                            <td>+5693847592</td>
                            <td>27/05/2020</td>
                            <td>Cambio</td>
                            <td>Chilexpress</td>
                            <td><span class="badge badge-primary">Pedido enviado</span></td>
                        </tr>
                        <tr>
                            <th scope="row">239401</th>
                            <td>correo@dominio.ar</td>
                            <td>+5693219053</td>
                            <td>20/05/2020</td>
                            <td>Devolución</td>
                            <td>No aplica</td>
                            <td><span class="badge badge-success">Transacción realizada</span></td>
                        </tr>
                        <tr>
                            <th scope="row">420492</th>
                            <td>correo@dominio.co</td>
                            <td>+5693235912</td>
                            <td>08/05/2020</td>
                            <td>Cambio</td>
                            <td>Chilexpress</td>
                            <td><span class="badge badge-warning">En ruta</span></td>
                        </tr>
                        <tr>
                            <th scope="row">480920</th>
                            <td>correo@dominio.eu</td>
                            <td>+5693249440</td>
                            <td>03/03/2020</td>
                            <td>Cambio</td>
                            <td>Chilexpress</td>
                            <td><span class="badge badge-success">Pedido recibido</span></td>
                        </tr>
                        <tr>
                            <th scope="row">429240</th>
                            <td>correo@dominio.com</td>
                            <td>+5693123440</td>
                            <td>28/05/2020</td>
                            <td>Cambio</td>
                            <td>Chilexpress</td>
                            <td><span class="badge badge-danger">Pedido rechazado</span></td>
                        </tr>
                    </tbody>
                </table>
                <div class="pb-5"></div>
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link text-white bg-dark" href="#">Anterior</a></li>
                        <li class="page-item"><a class="page-link text-dark" href="#">1</a></li>
                        <li class="page-item"><a class="page-link text-dark" href="#">2</a></li>
                        <li class="page-item"><a class="page-link text-dark" href="#">3</a></li>
                        <li class="page-item"><a class="page-link text-white bg-dark" href="#">Siguiente</a></li>
                    </ul>
                </nav>
             
            </div>
            </div>
      
            </div>

        )
    }
}

export default Tracking
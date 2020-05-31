import React, { Component } from 'react';

class Review extends Component {
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
                <button type="button" class="btn btn-dark">4</button>
                <span class="badge badge-pill pr-0 pl-0">———————</span>
                <button type="button" class="btn btn-light">5</button>
            </div>

            <form class="container-md">
                <div class="pb-5"></div>
                <legend class="col-form-label font-weight-bold">Revisión del pedido</legend>
                <legend class="col-form-label">Revise que los datos se encuentren correctos antes de enviar.</legend>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">[Estado de la solicitud]</h1>
                        <p class="lead">[Acá va a ir la solicitud dependiendo de si es devolución o cambio]</p>
                    </div>
                </div>
                <label for="formGroupExampleInput">Ingrese si tiene comentarios que permitan entender por qué está haciendo la devolución o cambio.</label>
                <input type="text" class="form-control" id="formGroupExampleInput"></input>
                <div class="pb-3"></div>
                <a href="https://api.whatsapp.com/send?phone=+56993232898&text=&source=&data=&app_absent=" type="button" class="btn btn-success"><i class="fa fa-whatsapp"></i> ¡Contáctanos por What's App!</a>
                <div class="pb-3"></div>
                <a href="petitions_3" type="button" class="btn btn-secondary mr-1">Anterior</a>
                <a href="#" type="button" class="btn btn-dark" data-toggle="modal" data-target="#staticBackdrop">Finalizar</a>
                <div class="modal fade" id="staticBackdrop" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">¡IMPORTANTE!</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    <div class="modal-body">
                        ¿Está seguro que quiere enviar esta solicitud?
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                        <a href="petition_sent" button type="button" class="btn btn-dark">Enviar</a>
                    </div>
                    </div>
                </div>
                </div>              
            </form>
            </div>         
        );
    }
}
export default Review;
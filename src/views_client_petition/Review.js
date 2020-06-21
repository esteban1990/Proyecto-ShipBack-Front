import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './client.css'

const Review = () => {
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
                <button type="button" class="btn btn-dark w-25 w-auto">4</button>
                <span class="badge badge-pill pr-0 pl-0 ">———————</span>
                <button type="button" class="btn btn-light w-25 w-auto">5</button>
            </div>


            <form class="container-md">
                <div class="pb-5"></div>
                <legend id="title" class="col-form-label font-weight-bold">Revisión del pedido</legend>
                <legend id="instructions" class="col-form-label">Revise que los datos se encuentren correctos antes de enviar.</legend>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">[Estado de la solicitud]</h1>
                        <p class="lead">[Acá va a ir la solicitud dependiendo de si es devolución o cambio]</p>
                    </div>
                </div>
                <label id="instructions" for="formGroupExampleInput">Ingrese si tiene comentarios que permitan entender por qué está haciendo la devolución o cambio.</label>
                <input type="text" class="form-control" id="formGroupExampleInput"></input>
                <div class="pb-3"></div>
                <a href="https://api.whatsapp.com/send?phone=+56993232898&text=&source=&data=&app_absent=" type="button" class="btn btn-success w-auto"><i class="fa fa-whatsapp"></i> ¡Contáctanos por What's App!</a>
                <div class="pb-3"></div>
                <a href="petitions_3" type="button" class="btn btn-secondary mr-1 w-auto">Anterior</a>
                <a href="#" type="button" class="btn btn-dark w-auto" data-toggle="modal" data-target="#staticBackdrop">Finalizar</a>
                <div class="modal fade" id="staticBackdrop" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">¡IMPORTANTE!</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body mx-auto">
                                ¿Está seguro que quiere enviar esta solicitud?
                </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary w-auto" data-dismiss="modal">Volver</button>
                                <a href="petition_sent" button type="button" class="btn btn-dark w-auto text-centered">Enviar</a>
                            </div>
                        </div>
                    </div>
                </div>
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

export default Review;
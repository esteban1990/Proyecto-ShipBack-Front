import React from "react";
import { Link } from "react-router-dom";
import './home.css'

const Home = () => {


    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <li>
                        <div className="row col-md-3 offset-sm-1">
                            <img className="pb-4" src='./Logo.svg' width='180' />
                        </div>
                    </li>

                    <ul class="nav justify-content-end">
                        <Link className="navbar-brand" to="/petitions_1">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Clientes</a>
                            </li>
                        </Link>
                        <div className="navbar-brand">
                            <li class="nav-item">
                                <a class="nav-link" href="#carouselExampleControls">¿Qué hacemos?</a>
                            </li>
                        </div>
                        <div className="navbar-brand">
                            <li class="nav-item">
                                <a class="nav-link" href="#howitworks">¿Cómo funcionamos?</a>
                            </li>
                        </div>
                        <Link className="navbar-brand" to="/signup"><li class="nav-item">
                            <a class="nav-link" href="#">Sign up</a>
                        </li>
                        </Link>
                        <Link className="navbar-brand" to="login"><li class="nav-item">
                            <a class="nav-link" href="#">Log in</a>
                        </li>
                        </Link>
                    </ul>

                </div>
            </nav>

            <div class="jumbotron text-center mt-5 container-md main-presentation">
                <h1 class="display-4 white-font text-right">S H I P B A C K</h1>
                <p class="lead white-font text-right">LA SOLUCIÓN INTELIGENTE PARA GESTIONAR CAMBIOS Y DEVOLUCIONES.</p>
                <p class="white-font text-right">Preocúpate que el cliente llegue, nosotros nos preocupamos de que vuelva.</p>
                <a href="https://api.whatsapp.com/send?phone=+56993232898&text=&source=&data=&app_absent=" type="button" class="btn btn-light button-md-size w-25 float-right">Chatea con nosotros</a>
            </div>

            <div id="carouselExampleControls" class="carousel container-lg mt-5" data-ride="carousel">
                <div class="carousel-inner">
                    <div id="about-us-first-slide" class="carousel-item rounded active">
                        <div class="carousel-caption d-none d-md-block rounded">
                            <h1 class="white-font text-centered">¿Qué hacemos?</h1>
                            <p class="white-font carousel-p-size">Gestionamos de forma fácil y sencilla los cambios y devoluciones que solicitan tus clientes.</p>
                        </div>
                    </div>
                    <div id="about-us-second-slide" class="carousel-item rounded">
                        <div class="carousel-caption d-none d-md-block rounded">
                            <h1 class="text-centered">¿Qué hacemos?</h1>
                            <p class="carousel-p-size">Con administración amigable y reportabilidad en tiempo real.</p>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>

            <div id="howitworks" class="jumbotron jumbotron-fluid mt-4 m-b-4 container-md rounded">
                <div class="container">
                    <h1 class="display-4 text-center mb-5">¿Cómo funcionaría para mi cliente?</h1>
                    <div className="row d-flex">
                        
                        <div className="col-4">
                            <img class="card-img-top" id="step-one" src="https://upload.wikimedia.org/wikipedia/commons/5/54/Blank_Canvas_on_Transparent_Background.png" class="rounded-circle" alt="Card image cap" />
                            <div class="card-body">
                                <h2 class="card-title">Paso 1</h2>
                                <p class="card-text">En pocos clicks, tu cliente solicita un cambio o devolución.</p>
                            </div>
                        </div>


                        <div className="col-4">
                            <img class="card-img-top" id="step-two" src="https://upload.wikimedia.org/wikipedia/commons/5/54/Blank_Canvas_on_Transparent_Background.png" class="rounded-circle" alt="Card image cap" />
                            <div class="card-body">
                                <h2 class="card-title">Paso 2</h2>
                                <p class="card-text">Recibes la confirmación y apruebas el caso.</p>

                            </div>
                        </div>
                        <div className="col-4">
                            <img class="card-img-top" id="step-three" src="https://upload.wikimedia.org/wikipedia/commons/5/54/Blank_Canvas_on_Transparent_Background.png" class="rounded-circle" alt="Card image cap" />
                            <div class="card-body">
                                <h2 class="card-title">Paso 3</h2>
                                <p class="card-text">El courier realiza el cambio en la puerta de tu cliente en menos de 24 horas.</p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>




            <div className="footer mt-3">
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

        </>
    )


}

export default Home;
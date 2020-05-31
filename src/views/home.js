import React from "react";
import { Link } from "react-router-dom";


const Home = () => {


    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <li>
                        <a class="navbar-brand" href="#">ShipBack</a>

                    </li>

                    <ul class="nav justify-content-end">
                    <Link className="navbar-brand" to="/petitions_1">  <li class="nav-item">
                                <a class="nav-link" href="#">Clientes</a> 
                             </li>
                    </Link>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">¿Como funcionamos?</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">¿Que hacemos?</a>
                    </li>
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

        <div class="jumbotron text-center">
            <h1 class="display-4">ShipBack</h1>
            <img src="...." width="150px" />
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>

            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a class="btn btn-primary btn-lg" href="#" role="button">Chatea con Nosotros</a>
        </div>

        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">¿Que Hacemos?</h1>
                <h3>Estandarizamos tus devoluciones</h3>
                <p class="lead">Integramos nuestra plataforma en tu e-commerce y en minutos tendrás la solución para automatizar los flujos de postventa, pudiendo gestionarlos
                     desde un panel de administración amigable y con reportería en tiempo real.</p>
            </div>
        </div>

        <div class="jumbotron jumbotron-fluid mb-0">
            <div class="container">
                <h1 class="display-4 text-center mb-5">¿Como funcionaria para mi Cliente?</h1>
                <div className="row">
                    <div className="col-4">
                        <img class="card-img-top" src="http://placehold.it/250x250" class="rounded-circle" alt="Card image cap" />
                        <div class="card-body">
                            <h2 class="card-title">Paso 1</h2>
                            <p class="card-text">En pocos clicks, tu cliente solicita un cambio o devolución.</p>

                        </div>
                    </div>


                    <div className="col-4">
                        <img class="card-img-top" src="http://placehold.it/250x250" class="rounded-circle" alt="Card image cap" />
                        <div class="card-body">
                            <h2 class="card-title">Paso 2</h2>
                            <p class="card-text">Recibes la confirmación y apruebas el caso.</p>

                        </div>
                    </div>
                    <div className="col-4">
                        <img class="card-img-top" src="http://placehold.it/250x250" class="rounded-circle" alt="Card image cap" />
                        <div class="card-body">
                            <h2 class="card-title">Paso 3</h2>
                            <p class="card-text">ShipBack realiza el cambio en la puerta de tu cliente en menos de 24 horas.</p>

                        </div>
                    </div>
                </div>

            </div>
        </div>




        <div className="footer">
            <div className="py-3 bg-dark">
                <div className="container">
                    <ul class="nav justify-content-end">
                        <li class="nav-item">
                            <a class="nav-link" href="#"></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Habla con Nosotros!</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">¿Como funcionamos?</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">¿Que hacemos?</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sign In</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Log In</a>
                        </li>

                        <li class="nav-item ">
                            <a class="nav-link" href="#">ShipBack</a>
                        </li>

                        <li class="nav-item ">
                            <img src="shipback.svg" width="60px" />
                        </li>
                    </ul>

                </div>

            </div>
        </div>

        </>
    )


}

export default Home;
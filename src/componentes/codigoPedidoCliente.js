import React from "react";
import {Link} from "react-router-dom"


const CodigoPedidoCliente = () =>{

    return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
         <Link className="navbar-brand" to="/"><a class="navbar-brand" href="#">ShipBack</a>  
            </Link>
            </nav>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3 className="title">!Muchas gracias por su pedido!</h3>
                        <h4>El codigo de su pedido es:</h4>
                        <input type="text" placeholder="Numero-Pedido" class="form-control"/>
                        <br/>
                        <p className="lead">Le enviaremos el codigo de su solicitud junto con los detalles de la transaccion a probandp@correo.com </p>
                    </div>
                </div>
            </div>
    )
}


export default CodigoPedidoCliente;
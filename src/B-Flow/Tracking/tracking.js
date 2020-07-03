import React, { useContext, useEffect } from "react";
import { Context } from "../../store/AppContext.js";
import NavBar from '../NavBar/navBar.js';




const Tracking = (props) => {

    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.allOrdersConfirm();
    }, [])
    return (


        <div class="pb-5">
            <NavBar />

            <div className="container pt-5">
                <table class="table">
                    <thead>
                        <tr>

                            <th scope="col">ID Factura</th>
                            <th scope="col">ID Order</th>
                            <th scope="col">ID Despacho</th>
                            <th scope="col">Prodcutos</th>
                            <th scope="col">Courrier</th>
                            <th scope="col">Borrar</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            store.listarOrdenesConfirmadas.length > 0 &&
                            store.listarOrdenesConfirmadas.map((order, i) => {
                                return (

                                    <tr key={i}>
                                        <th scope="row">{order.invoice_id}</th>
                                        <td>{order.id}</td>
                                        <td>{order.office_id}</td>
                                        <td>{order.products}</td>
                                        <td>{order.courrier}</td>
                                        <td><button className="btn btn-danger" onClick={() => actions.deleteOrder(order.invoice_id)}>Borrar</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Tracking;


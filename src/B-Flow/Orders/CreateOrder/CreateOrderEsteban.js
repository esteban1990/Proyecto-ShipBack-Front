import React, { useContext } from "react";
import { Context } from "../../../store/AppContext.js";
import { Link } from "react-router-dom";


const CreateOrderEsteban = (props) => {

    const { store, actions } = useContext(Context);


    const handleSubmit = (e) => {
        e.preventDefault();
        if(store.address ==="" || store.streetAdress==="" || store.apartament==="" || store.city==="" || store.postCode===""
        || store.recipient==="" || store.email==="" || store.orderNumber==="" || store.phone===""){
            alert("Se deben de llenar todos los campos")
            return;
        }
    }

    return (
    

        <div className="container pt-5">
            <div classname="row">
                <div classname="col">
                    <div className="card">
                        <div classname="card-header">
                           

                            <div className="card-body">
                                <form on onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-12">
                                            <label for="" class="form-label">Pick Up</label>
                                            <p>Address</p>
                                            <input type="text" name="address" class="form-control" onClick={actions.handleChange}></input>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <label for="" class="form-label">Street address</label>
                                            <input type="text" name="streetAddress" onClick={actions.handleChange} class="form-control"></input>
                                        </div>


                                        <div className="col">
                                            <label for="" class="form-label">Apartament</label>
                                            <input type="text" name="apartament" onClick={actions.handleChange} class="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <label for="" class="form-label">city</label>
                                            <input type="text" name="city" onClick={actions.handleChange} class="form-control"></input>
                                        </div>
                                        <div className="col-6">
                                            <label for="" class="form-label">Post Code</label>
                                            <input type="text" name="postCode" onClick={actions.handleChange} class="form-control"></input>
                                        </div>
                                    </div>


                                    <div className="row mt-5 mb-2">
                                        <div className="col-12">
                                            <h5>Order Details</h5>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <label for="" class="form-label">Recipient</label>
                                            <input type="text" name="recipient" onClick={actions.handleChange} class="form-control"></input>
                                        </div>
                                        <div className="col">
                                            <label for="" class="form-label">Email</label>
                                            <input type="email" name="email" onClick={actions.handleChange} class="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <label for="" class="form-label">Order Reference Number</label>
                                            <input type="text" name="orderNumber"class="form-control"></input>
                                        </div>
                                        <div className="col">
                                            <label for="" class="form-label">Phone</label>
                                            <input type="text" name="phone" class="form-control"></input>
                                        </div>
                                    </div>
                            
                                




                                    <div className="row justify-content-center pt-4">
                                        <div className="col-6">
                                            <Link to="/orders"><button type="submit"
                                                class="btn btn-primary">Add Orders</button>
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default CreateOrderEsteban;
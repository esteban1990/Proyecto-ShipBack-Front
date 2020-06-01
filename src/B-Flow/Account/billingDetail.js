import React, { useContext } from 'react';
import { Context } from "../../store/AppContext.js";
import { Link } from "react-router-dom";


const BillingDetails = (props) => {

    const { store, actions } = useContext(Context);
    return (

        <div className="container mt-5">
            <div className="row">
                <div className="col-3">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="title">Billing Details</h3>
                        </div>
                        <div className="card-body">
                            <a className="nav-link" href="#">Payment Details</a>
                            <br />
                            <Link to="/navbar/billingDetails/invoices"><a className="nav-link" href="#">Invoices</a>
                            </Link>
                            <br />
                            <a className="nav-link" href="#">Subscriptions</a>
                        </div>
                    </div>
                </div>
                <div className="col-9">
                    <div className="container">
                        <div className="card-footer">
                            <h3>Payment Card</h3>
                            <form>
                                <label for="" class="form-label">Card Number</label>
                                <input type="text" class="form-control" value={store.cardNumber} onChange={e => actions.handleChange(e)}></input>
                                <div className="row">
                                    <div className="col-4">
                                        <label for="" class="form-label">CVV</label>
                                        <input type="text" class="form-control" value={store.cvv} onChange={e => actions.handleChange(e)}></input>

                                    </div>
                                    <div className="col-4">
                                        <label for="" class="form-label">Month</label>
                                        <input type="text" class="form-control" value={store.date} onChange={e => actions.handleChange(e)}></input>

                                    </div>
                                    <div className="col-4">
                                        <label for="" class="form-label">Year</label>
                                        <input type="text" class="form-control" value={store.year} onChange={e => actions.handleChange(e)}></input>

                                    </div>
                                </div>
                                <div className="row mt-4 justify-content-center">
                                    <div className="col-5">
                                        <button type="button" onClick={e => actions.editBillingDetails(props.history)} class="btn btn-primary">Update</button>
                                    </div>
                                </div>

                                <div className="row mt-4 justify-content-center">
                                    <div className="col-5">
                                        <button type="button" onClick={e => actions.createBillingDetails(props.history)} class="btn btn-primary">Add</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )

}

export default BillingDetails
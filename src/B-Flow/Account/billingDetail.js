import React, { useContext } from 'react';
import { Context } from "../../store/AppContext.js";
import { Link } from "react-router-dom";
import './account.css';
import NavBar from '../NavBar/navBar.js';

const urlapi = process.env.REACT_APP_APIURL || ''

//Context
const BillingDetails = (props) => {

    const { store, actions } = useContext(Context);

  //  const handleSubmit = (e) => {
    //    e.preventDefault();
      //  if (store.cardNumber === "" || store.cvv === "" || store.month === "" || store.year === "") {
        //    alert("se deben de llenar todos los camps")
       // }

        //fetch(urlapi + '/billingdetails', {
          //  method: 'POST',
            //body: JSON.stringify(store)
       // }).then(response => response.json()).then(posts => {
         //   props.history.push('/orders')
        //})
   // }

    return (
      <div>
            <NavBar />

            <div className="container mt-5">
                <div className="row">
                    <div className="col-3">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="title" style={{ textAlign: 'center' }}>Billing Details</h4>
                            </div>
                            <div className="card-body billingDetail">
                                <a className="nav-link">Payment Details</a>
                                <hr />
                                <Link to="/navbar/billingDetails/invoices"><a className="nav-link">Invoices</a>
                                </Link>
                                <hr/>
                                <Link to="/billingdetails/detailCards"><a className="nav-link">Details Cards</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="container">
                            <div className="card-footer">
                                <h4>Payment Card</h4>
                                <hr />
                                <form onSubmit={(e) => actions.createBillingDetails(e, props.history)}>
                                    <label for="" class="form-label">Card Number</label>
                                    <input type="text" class="form-control" name="cardNumber" onChange={actions.handleChange}></input>
                                    <div className="row">
                                        <div className="col-4">
                                            <label for="" class="form-label">CVV</label>
                                            <input type="text" class="form-control" name="cvv" onChange={actions.handleChange}></input>

                                        </div>
                                        <div className="col-4">
                                            <label for="" class="form-label">Month</label>
                                            <input type="text" class="form-control" name="month" onChange={actions.handleChange}></input>

                                        </div>
                                        <div className="col-4">
                                            <label for="" class="form-label">Year</label>
                                            <input type="text" class="form-control" name="year" onChange={actions.handleChange}></input>

                                        </div>
                                    </div>
    
                                    <div className="row mt-4 justify-content-center">
                                        <div className="col-5">
                                         <Link to="/billingdetails/detailCards"><button type="submit"  class="btn btn-primary">Add Credit Card</button></Link>
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

export default BillingDetails;
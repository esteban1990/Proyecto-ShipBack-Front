import React from "react";
import { Link } from "react-router-dom"

const Invoices = () => {

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-3">
                    <div className="card">
                        <div className="card-header">
                        <h3 className="title">Billing Details</h3>
                            </div>

                        <div className="card-body">
                            <Link to="/navbar/billingDetails"><a className="nav-link" href="#">Payment Details</a>
                            </Link>
                            <br />
                            <a className="nav-link" href="#">Invoices</a>
                            <br />
                            <a className="nav-link" href="#">Subscriptions</a>
                        </div>
                    </div>
                   
                </div>
                <div className="col-9">
                    <div className="container">
                    <h5>Billing History</h5>
                        <div className="card-footer">
                            <h5 className="pt-3 pb-2">Invoices</h5>
                
                            <div className="row">
          <div className="col">
            <table class="table table-dark text-center">
              <thead>
                <tr>
                  <th scope="col"> Invoice ID</th>
                  <th scope="col">Date</th>
                  <th scope="col">Status</th>
                  <th scope="col">Service</th>
                  <th scope="col">Amount</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">2</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>Otto</td>
                  <td>$$</td>

                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>Otto</td>
                  <td>$$</td>

                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>Otto</td>
                  <td>$$</td>


                </tr>
              </tbody>
            </table>
          </div>
        </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Invoices;
import React,{useContext} from "react";
import { Link } from "react-router-dom"
import { Context } from "../../store/AppContext.js";

const Invoices = (props) => {

    const {store, actions} = useContext(Context)

    return (
      <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-3">
                    <div className="card">
                        <div className="card-header">
                        <h3 className="title">Billing Details</h3>
                            </div>

                        <div className="card-body">
                            <Link to="/billingDetails"><a className="nav-link" href="#">Payment Details</a>
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
            <table class="table table-white text-center">
              <thead>
                <tr>
                  <th scope="col">Invoice ID</th>
                  <th scope="col">Date</th>
                  <th scope="col">Status</th>
                  <th scope="col">Service</th>
                  <th scope="col">Amount</th>

                </tr>
              </thead>
              <tbody>
                {

                  store.invoices.length > 0  &&
                  store.invoices.map((invoice,i)=>{
                  return(

                  
                <tr key={i}>
                  <th scope="row">{invoice.id}2</th>
                  <td>{invoice.date}</td>
                  <td>{invoice.status}</td>
                  <td>{invoice.service}</td>
                  <td>{invoice.amount}</td>

                </tr>
  
                    )
                  })
                  }
              </tbody>
            </table>
          </div>
        </div>
              
                
                        </div>
                    </div>
                </div>
            </div>
      
        </div>
        </>
    )
}


export default Invoices;
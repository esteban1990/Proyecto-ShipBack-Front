import React, { useContext} from 'react';
import { Context } from "../../store/AppContext.js";
import { Link } from "react-router-dom";
import './account.css';
import NavBar from '../NavBar/navBar.js';

//CONTEXT Y HOOKS

const Settings = (props) => {


    const { store, actions } = useContext(Context);
    
    return (
        <>
 <div>
      <NavBar />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-3">
                    <div className="card-header">
                                <h4 className="title" style={{textAlign:'center'}}>Settings</h4>
                            </div>
                        <div className="card">
                            <div className="card-body">
                                <Link to="/settings"><a className="nav-link">General</a>
                                </Link>
                                <hr />
                                <Link to="/navbar/settings/users"><a className="nav-link">Users</a>
                                </Link>
                                <hr/>
                                <Link to="/navbar/settings/detalles_Emprendedor"><a className="nav-link">Entrepreneurial details </a>
                                </Link>
                                <hr />
                                <Link to="/navbar/settings/detalle_UsuariosEmprendedor"><a className="nav-link">Entrepreneurial user detail </a>
                                </Link>
                                <hr />
                            </div>



                        </div>
                    </div>

                    <div className="col-9">
                        <div className="container">
                            <div className="card-footer">
                                <form onSubmit={(e) => actions.createStoreDetails(e, props.history)}>
                                    <h4 className="text-center">Sender Details</h4>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-3">
                                            <label for=""
                                                class="form-label">
                                                Store Name</label>
                                        </div>
                                        <div className="col-3">
                                            <input type="text"
                                                class="form-control"
                                                name="storeName"
                                                value={store.storeName}
                                                onChange={actions.handleChange} />
                                        </div>
                                        <div className="col-3">
                                            <label for="" class="form-label">
                                                Contact Name</label>
                                        </div>
                                        <div className="col-3">
                                            <input type="text"
                                                name="contactName"
                                                value={store.contactName}
                                                class="form-control"
                                                onChange={actions.handleChange}></input>
                                        </div>
                                    </div>

                                    <div className="row pt-3">
                                        <div className="col-3">
                                            <label for="" class="form-label">Company Name</label>
                                        </div>
                                        <div className="col-3">
                                            <input type="text"
                                                name="companyName"
                                                class="form-control"
                                                value={store.companyName}
                                                onChange={actions.handleChange} />
                                        </div>
                                        <div className="col-3">
                                            <label for="" class="form-label">Contact Phone</label>
                                        </div>
                                        <div className="col-3">
                                            <input type="text"
                                                name="contactPhone"
                                                class="form-control"
                                                value={store.contactPhone}
                                                onChange={actions.handleChange}></input>
                                        </div>
                                    </div>

                                    <div className="row pt-3">
                                        <div className="col-3">
                                            <label for="" class="form-label">Industry</label>
                                        </div>
                                        <div className="col-3">
                                            <input type="text"
                                                name="industry"
                                                class="form-control"
                                                value={store.industry}
                                                onChange={actions.handleChange} />
                                        </div>
                                        <div className="col-3">
                                            <label for="" class="form-label">Email Contact</label>
                                        </div>
                                        <div className="col-3">
                                            <input type="text"
                                                name="emailContact"
                                                class="form-control"
                                                value={store.emailContact}
                                                onChange={actions.handleChange}></input>
                                        </div>
                                    </div>

                                    <div className="mt-5" style={{textAlign:'center'}}>
                                        <h4>Pick Up Addresses</h4>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label for="" class="form-label">Address</label>
                                                <input type="text"
                                                    name="address"
                                                    class="form-control"
                                                    value={store.address}
                                                    onChange={actions.handleChange}></input>
                                            </div>
                                        </div>

                                        <div className="col-6">
                                            <div className="form-group">
                                                <label for="" class="form-label">City</label>
                                                <input type="text"
                                                    name="city"
                                                    class="form-control"
                                                    value={store.city}
                                                    onChange={actions.handleChange}></input>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row justify-content-center">
                                        <div className="col-5">
                                          <Link to="/navbar/settings/detalles_Emprendedor"><button type="submit" class="btn btn-primary">+Add Location</button></Link>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                </div>
                </div>
            </div>


        </>
    )
}

export default Settings
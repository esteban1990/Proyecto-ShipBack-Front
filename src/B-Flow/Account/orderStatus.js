import React,{useContext} from "react";
import {Context} from "../../store/appContext";
import {Link} from "react-router-dom";


const OrderStatus = () => {

    const {store, actions} = useContext(Context)

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-3">
                    <h3 className="mb-3">Settings</h3>

                    <div className="card">

                        <div className="card-body">
                        <Link to="/navbar/settings"><a className="nav-link" href="#">General</a>
                        </Link>
                            <br />
                          <Link to="/navbar/settings/profileUser"><a className="nav-link" href="#">My Profile</a>
                          </Link>
                            <br />
                         <Link to="/navbar/settings/users"><a className="nav-link" href="#">Users</a>
                         </Link>
                            <br />
                            <a className="nav-link" href="#">Notifications</a>
                            <br/>
                            <Link to="/navbar/settings/carriers"><a className="nav-link" href="#">Carriers</a>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="col-9">
                    <div className="container">
                        <h3>Notifications</h3>
                        <div className="side">
                            <form>
                                <h5 className="mt-3">Progress Update</h5>
                                <div className="row text-center">
                                    <p>Shippit automatically sends delivery progress notifications to your recipients. Progress updates can be sent via email and SMS.</p>
                                    <div className="col-3">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" onChange={e => actions.handleChange(e)}  value="option1" />
                                        <label class="form-check-label" for="inlineCheckbox1">ON</label>
                                    </div>
                                    </div>
                                    <div className="col-3">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" onChange={e => actions.handleChange(e)} value="option2" />
                                        <label class="form-check-label" for="inlineCheckbox2">OFF</label>
                                    </div>
                                    </div>
                                    <div className="col-3">
                                        <label class="form-label">In Transit</label>
                                    </div>
                                </div>

                                <div className="row text-center">
                                    <div className="col-3">
                                <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" onChange={e => actions.handleChange(e)} value="option1" />
                                        <label class="form-check-label" for="inlineCheckbox1">ON</label>
                                    </div>
                                    </div>

                                    <div className="col-3">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                        <label class="form-check-label" for="inlineCheckbox2">OFF</label>
                                    </div>
                                    </div>

                                    <div className="col-3">
                                        <label class="form-label">With Driver</label>
                                    </div>
                                    
                                </div>

                                <div className="row text-center">
                                    <div className="col-3">
                                <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                        <label class="form-check-label" for="inlineCheckbox1">ON</label>
                                    </div>
                                    </div>

                                    <div className="col-3">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                        <label class="form-check-label" for="inlineCheckbox2">OFF</label>
                                    </div>
                                    </div>

                                    <div className="col-3">
                                        <label class="form-label">Partial Completed</label>
                                    </div>
                                    
                                </div>


                                <div className="row text-center">
                                    <div className="col-3">
                                <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                        <label class="form-check-label" for="inlineCheckbox1">ON</label>
                                    </div>
                                    </div>

                                    <div className="col-3">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                        <label class="form-check-label" for="inlineCheckbox2">OFF</label>
                                    </div>
                                    </div>

                                    <div className="col-3">
                                        <label class="form-label">Completed</label>
                                    </div>
                                    
                                </div>

                                <div className="row mt-4">
                                    <div class="col-4">
                                    <button type="button" class="btn btn-primary">Update</button>
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

export default OrderStatus;
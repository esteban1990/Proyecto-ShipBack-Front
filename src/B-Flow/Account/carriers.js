import React from "react"
import { Link } from "react-router-dom"



const Carriers = () => {


    return (

        <div className="container mt-5">
            <div className="row">
                <div className="col-3">
                    <h3 className="mb-3">Settings</h3>

                    <div className="card">
                        <div className="card-body">
                        <Link to="/settings"><a className="nav-link" href="#">General</a>
                        </Link>
                            <br />
                            <Link to="/navbar/settings/profileUser"><a className="nav-link" href="#">My Profile</a>
                            </Link>
                            <br />
                            <Link to="/navbar/settings/users"><a className="nav-link" href="#">Users</a>
                            </Link>
                            <br />
                            <Link to="/navbar/settings/orderStatus"><a className="nav-link" href="#">Notifications</a>
                            </Link>
                            <br />
                            <a className="nav-link" href="#">Carriers</a>
                        </div>



                    </div>
                </div>
                <div className="col-9">
                    <div className="container">
                        <h5>Carriers</h5>
                        <div className="row">
                            <div className="col">
                                <div className="card-footer">
                            <h5>Smart Carrier Allocation</h5>
                            <br/>
                            <p>Choose your preferred carrier or enable multiple carriers within the main service types to reduce shipping costs and improve delivery experiences for your customers. With the power of multi-carrier bookings,
                        Shippit will automatically allocate the right carrier for every order.</p>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <form>
                                <h5 className="mt-3">Turn On if Carrier is Avaible</h5>
                            

                           

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
                                        <label class="form-label">Chile Express</label>
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
export default Carriers;
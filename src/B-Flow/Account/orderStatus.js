import React,{useContext} from "react";
import {Context} from "../../store/AppContext";
import {Link} from "react-router-dom";
import NavBar from '../NavBar/navBar.js'; 


const OrderStatus = () => {

    const {store, actions} = useContext(Context)

    return (
        <div>
        <NavBar />
        <div className="container">
            <div className="row mt-5">
                <div className="col-3">
                <div className="card-header">
                                <h4 className="title" style={{textAlign:'center'}}>Settings</h4>
                            </div>

                    <div className="card">

                        <div className="card-body">
                        <Link to="/settings"><a className="nav-link">General</a>
                        </Link>
                            <hr />
                          <Link to="/navbar/settings/profileUser"><a className="nav-link">My Profile</a>
                          </Link>
                            <hr />
                         <Link to="/navbar/settings/users"><a className="nav-link">Users</a>
                         </Link>
                            <hr />
                            <a className="nav-link">Notifications</a>
                            <hr/>
                            <Link to="/navbar/settings/carriers"><a className="nav-link">Carriers</a>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="col-9">
                    <div className="container">
                        <h4>Notifications</h4>
                        <div className="card mb-5">
                        <div className="card-body">
                            <form>
                                <h5>Progress Update</h5>
                                <hr/>
                                <div className="row text-center " style={{justifyContent:'center'}}>
                                    <p className='ml-3'>Shippit automatically sends delivery progress notifications to your recipients. Updates can be sent it.</p>
                                    <div className="col-3">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" onChange={e => actions.handleChange(e)}  value="option1" />
                                        <label className="form-check-label" for="inlineCheckbox1">ON</label>
                                    </div>
                                    </div>
                                    <div className="col-3">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" onChange={e => actions.handleChange(e)} value="option2" />
                                        <label className="form-check-label" for="inlineCheckbox2">OFF</label>
                                    </div>
                                    </div>
                                    <div className="col-3">
                                        <label className="form-label">In Transit</label>
                                    </div>
                                </div>

                                <div className="row text-center" style={{justifyContent:'center'}}>
                                    <div className="col-3">
                                <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" onChange={e => actions.handleChange(e)} value="option1" />
                                        <label className="form-check-label" for="inlineCheckbox1">ON</label>
                                    </div>
                                    </div>

                                    <div className="col-3">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                        <label className="form-check-label" for="inlineCheckbox2">OFF</label>
                                    </div>
                                    </div>

                                    <div className="col-3">
                                        <label className="form-label">With Driver</label>
                                    </div>
                                    
                                </div>

                                <div className="row text-center " style={{justifyContent:'center'}}>
                                    <div className="col-3">
                                <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                        <label className="form-check-label" for="inlineCheckbox1">ON</label>
                                    </div>
                                    </div>

                                    <div className="col-3">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                        <label className="form-check-label" for="inlineCheckbox2">OFF</label>
                                    </div>
                                    </div>

                                    <div className="col-3">
                                        <label className="form-label">Partial Completed</label>
                                    </div>
                                    
                                </div>


                                <div className="row text-center" style={{justifyContent:'center'}}>
                                    <div className="col-3">
                                <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                        <label className="form-check-label" for="inlineCheckbox1">ON</label>
                                    </div>
                                    </div>

                                    <div className="col-3">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                        <label className="form-check-label" for="inlineCheckbox2">OFF</label>
                                    </div>
                                    </div>

                                    <div className="col-3">
                                        <label className="form-label">Completed</label>
                                    </div>
                                    
                                </div>

                                <div className="row mt-4" style={{justifyContent:'center'}}>
                                    <div className="col-6" >
                                    <button type="button" className="btn btn-primary">Update</button>
                                </div>
                                </div>


                               
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default OrderStatus;
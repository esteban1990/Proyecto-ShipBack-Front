import React,{useContext} from "react";
import { Context } from "../../store/appContext.js";
import {Link} from "react-router-dom"


const Users = (props) => {

    const {store, actions} = useContext(Context)

    return (
        <div className="container mt-5">
            <div className="row">
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
                        <a className="nav-link" href="#">Users</a>
                        <br />
                  <Link to="/navbar/settings/orderStatus"><a className="nav-link" href="#">Notifications</a>
                  </Link>
                  <br/>
                  <Link to="/navbar/settings/carriers"><a className="nav-link" href="#">Carriers</a>
                            </Link>

                    </div>
                    </div>

                </div>
                <div className="col-9">
                    <div className="container">
                        <h5>Users</h5>
                        <div className="side">
                            <from>
                                <div className="row">
                                    <div className="col-4">
                                        <label class="form-label">Email</label>
                                        <input type="email" class="form-control" onChange={e =>actions.handleChange(e)}></input>
                                    </div>

                                    <div className="col-4">
                                        <label class="form-label">Movil</label>
                                        <input type="text" class="form-control" onChange={e =>actions.handleChange(e)}></input>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-4">
                                    <label class="form-label">First Name</label>
                                        <input type="text" class="form-control" onChange={e =>actions.handleChange(e)}></input>
                                    </div>
                                    <div className="col-4">
                                    <label class="form-label">Last Name</label>
                                        <input type="text" class="form-control" onChange={e =>actions.handleChange(e)}></input>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-4">
                                    <label class="form-label">Password</label>
                                        <input type="password" class="form-control" onChange={e =>actions.handleChange(e)}></input>
                                    </div>
                                    <div className="col-4">
                                    <label class="form-label">Confirm Password</label>
                                        <input type="text" class="form-control" onChange={e =>actions.handleChange(e)}></input>
                                    </div>
                                </div>

                                <div className="row pt-4">
                                    <div className="col-4">
                                        <button type="button" onClick={e => actions.createUserSettings(history.props)} class="btn btn-primary">+Add User</button>
                                    </div>
                                </div>
                                <div className="row pt-4">
                                    <div className="col-4">
                                        <button type="button" onClick={e => actions.editUser(props.history)} class="btn btn-primary">UPDATE</button>
                                    </div>
                                </div>
                            </from>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Users
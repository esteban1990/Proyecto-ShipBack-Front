import React, { useContext } from "react";
import { Context } from "../../store/AppContext.js";
import { Link } from "react-router-dom";
import './account.css';
import NavBar from '../NavBar/navBar.js';

const Users = (props) => {

    const { store, actions } = useContext(Context)

    return (
        <>
            <div>
                <NavBar />
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-3">
                            <div className="card-header">
                                <h4 className="title" style={{ textAlign: 'center' }}>Settings</h4>
                            </div>

                            <div className="card">
                                <div className="card-body" >
                                    <Link to="/settings"><a className="nav-link">General</a>
                                    </Link>
                                    <hr />
                                    <a className="nav-link">Create users</a>
                                    <hr />
                                    <Link to="/settings/entrepreneur_details"><a className="nav-link">Entrepreneur details </a>
                                    </Link>
                                    <hr />
                                    <Link to="/settings/users/all"><a className="nav-link">All users</a>
                                    </Link>
                                    <hr />
                                </div>
                            </div>

                        </div>
                        <div className="col-9">
                            <div className="container">
                                <h4>Users</h4>

                                <div className="card  mb-5">
                                    <form onSubmit={(e) => actions.createEmployee(e, props.history)}>
                                        <div className="card-body">
                                            <div className="row mt-2">
                                                <div className="col-12">
                                                    <label class="form-label">Email</label>
                                                    <input type="email" class="form-control" name="employee_email" value={store.employee_email} onChange={actions.handleChange}></input>
                                                </div>
                                            </div>


                                            <div className="row mt-2">
                                                <div className="col-6">
                                                    <label class="form-label">First Name</label>
                                                    <input type="text" class="form-control" name="employee_firstName" value={store.employee_firstName} onChange={actions.handleChange}></input>
                                                </div>
                                                <div className="col-6">
                                                    <label class="form-label">Last Name</label>
                                                    <input type="text" class="form-control" name="employee_lastName" value={store.employee_lastName} onChange={actions.handleChange}></input>
                                                </div>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-6">
                                                    <label class="form-label">Password</label>
                                                    <input type="password" class="form-control" name="employee_password" value={store.employee_password} onChange={actions.handleChange}></input>
                                                </div>
                                            </div>
                                            <div className="row pt-4" style={{ justifyContent: 'center' }}>
                                                <div className="col-6">
                                                    <button type="submit" class="btn btn-primary">+Add User</button>
                                                </div>
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

export default Users
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { auth } from "../../FireBase/fireBase.js";
import './navBar.css'

export const onLogOut = () => {
    console.log('logOut')
    auth.signOut().then(function () {
        console.log('user signed out')
    }).catch(function (error) {
        console.log('It has been an error')
    })
}

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="row  col-md-3 offset-sm-1">
                    <img src='./Logo.svg' width='180' />
                </div>
                <div className="row  col-sm-2 offset-sm-4">
                    <ul className="navbar-nav mr-auto" style={{fontSize:'18px'}}>
                        <Link to="/orders">
                            <li className="nav-item dropdown">
                                <a className="nav-link active" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Orders
                                </a>
                                <div className="dropdown-menu" style={{fontSize:'18px'}} aria-labelledby="navbarDropdown">
                                    <Link to="/orders">
                                        <a className="dropdown-item">All</a>
                                    </Link>
                                    <Link to="/createorder">
                                        <a className="dropdown-item">Create Order</a>
                                    </Link>
                                </div>
                            </li>
                        </Link>
                        <Link to="/tracking">
                            <li className="nav-item active">
                                <a className="nav-link">
                                    Tracking
                                </a>
                            </li>
                        </Link>
                        <Link to="/analytics">
                            <li className="nav-item active">
                                <a className="nav-link">
                                    Analytics
                                </a>
                            </li>
                        </Link>
                        <Link to="/settings">
                            <li className="nav-item dropdown">
                                <a className="nav-link active" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Account
                                 </a>
                                <div className="dropdown-menu" style={{fontSize:'18px'}} aria-labelledby="navbarDropdown">
                                    <Link to="/settings">
                                        <a className="dropdown-item">Settings</a>
                                    </Link>
                                    <Link to="/billingdetails">
                                        <a className="dropdown-item">Billing Details</a>
                                    </Link>
                                    <Link to="/logout">
                                        <a className="dropdown-item" onClick={onLogOut} >Logout</a>
                                    </Link>
                                </div>
                            </li>
                        </Link>
                    </ul>
                </div>
            </nav >
        );
    }
}
export default NavBar;
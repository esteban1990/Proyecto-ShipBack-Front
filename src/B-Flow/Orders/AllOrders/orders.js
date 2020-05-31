import React, { Component } from 'react';
import NavBar from '../../NavBar/navBar.js';
import { DateSelector, CourrierSelector, ButtonSelectAll, ButtonDelete, ButtonConfirm } from '../Components/buttons.js';
import './orders.css'
import DataTable from '../Components/dataTable.js';

class Orders extends Component {
    render() {
        return (
            <div className='orders'>
                <NavBar />
                <nav className="navbar">
                <div className='NavBarButtons'>
                    <a className="navbar-brand items">
                    <span className='mr-2'>From:</span> <DateSelector />
                    </a>
                    <a className="navbar-brand items">
                    <span className='mr-2'>To:</span>
                    <DateSelector />
                    </a>
                    <a className="navbar-brand items">
                    <span className='mr-2'>Courrier:</span>
                    <CourrierSelector />
                    </a>
                    <div className='button1'>
                    <ButtonSelectAll />
                    </div>
                    <div className='button2'>
                    <ButtonDelete />
                    </div>
                    <div className='button3'>
                    <ButtonConfirm />
                    </div>
                </div>
                </nav>
                <div className='dataTable'>
                <DataTable />
                </div>
            </div>
        )
    }
}

export default Orders
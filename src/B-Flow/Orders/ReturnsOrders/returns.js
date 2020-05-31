/*
Bugs-View: 5
1.	Get the confirm products from each specific process (return or exchanges) from the All view section.
2.	Label Button + functionality to create a delivery label (to use for courier company)
3.	Add a new filter (button and functionality) for labels.
4.	Add a new section inside of each view (return and exchange) for actions history.
5.	On step 4, also change headers from table to date from delivery booked, courier used, Manifest ID (it´s the id from each delivery summary generated), city from delivery, number of packages, and a button to generate the manifest (the delivery summary doc.)
*/

import React, { Component } from 'react';
import NavBar from '../../NavBar/navBar.js';
import { DateSelector, CourrierSelector, ButtonSelectAll, ButtonDelete, ButtonConfirm } from '../Components/buttons.js';
import './returns.css'
import DataTable from '../Components/dataTable.js';

class Returns extends Component {
    render() {
        return (
            <div className='returns'>
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

export default Returns;
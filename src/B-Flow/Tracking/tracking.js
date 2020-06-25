import React, { Component } from 'react';
import NavBar from '../NavBar/navBar.js';
import { DateSelector, CourrierSelector, ButtonSelectAll, ButtonDelete, ButtonConfirm } from './Components/buttons.js';
import DataTable from './Components/dataTable.js';

class Tracking extends Component {
    render() {
        return (
            <div>
            <NavBar />
            <div>
            <div className='orders'>
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
            
      
            </div>
            </div>

        )
    }
}

export default Tracking
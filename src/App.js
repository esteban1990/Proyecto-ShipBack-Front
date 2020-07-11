import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import './App.css';
import injectContext from "./store/AppContext";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./views/home";
import SignUp from './B-Flow/SignUp/signup.js';
import LogIn from './B-Flow/Login/login.js';
import Forgot from './B-Flow/Forgot/forgot.js';
import allOrders from "./B-Flow/Orders/allOrders.js";
import CreateOrder from "./B-Flow/Orders/createOrder";
import Settings from './B-Flow/Account/settings.js';
import ProfileUser from "./B-Flow/Account/profileUser";
import Users from "./B-Flow/Account/users";
import Detalles_Emprendedor from './B-Flow/Account/detalles_Emprendedor.js';
import Detalle_UsuariosEmprendedor from './B-Flow/Account/detalle_UsuariosEmprendedor.js';
import BillingDetails from './B-Flow/Account/billingDetail.js';
import Invoices from "./B-Flow/Account/invoices";
import { LogOut } from './B-Flow/Account/logOut.js';
import Tracking from './B-Flow/Tracking/tracking.js';
import Analytics from './B-Flow/Analytics/analytics.js';
import CambioDevolucion from "./views/cambioDevolucion";
import AskedNumber from './views_client_petition/First_step.js';
import QuestType from './views_client_petition/Second_step.js';
import Change from './views_client_petition/Change.js';
import Return from './views_client_petition/Return.js';
import Review from './views_client_petition/Review.js';
import Sent from './views_client_petition/Sent.js';
import Gmail_login from './B-Flow/Gmail/gmail.js';
import Admi_Usuario from './B-Flow/Crud/admi_Usuario';
import NewUser from './B-Flow/Crud/newUser.js';
import Admin from './B-Flow/Crud/admin.js'; 



class App extends Component {

  render() {

    return (
        <Router>
         
          <div className='App'>
        
            <Route exact path="/" component={Home} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/cambioDevolucion" component={CambioDevolucion} />
            <Route exact path= "/admi_usuario" component={Admi_Usuario}/>
            <Route exact path= "/newUser" component={NewUser}/>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/orders" component={allOrders} />
            <Route exact path="/createorder" component={CreateOrder} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/navbar/settings/profileUser" component={ProfileUser}/>
            <Route exact path="/navbar/settings/users" component={Users}/>
            <Route exact path= "/navbar/settings/detalles_Emprendedor" component={Detalles_Emprendedor}/>
            <Route exact path= "/navbar/settings/detalle_UsuariosEmprendedor" component={Detalle_UsuariosEmprendedor}/>
            <Route exact path="/billingdetails" component={BillingDetails} />
            <Route exact path="/navbar/billingdetails/invoices" component={Invoices}/>
            <Route exact path="/logout" component={LogOut} />
            <Route exact path="/forgot-password" component={Forgot} />
            <Route exact path="/tracking" component={Tracking} />
            <Route exact path="/analytics" component={Analytics} />
            <Route exact path="/petitions_1" component={AskedNumber} />
            <Route exact path="/petitions_2" component={QuestType} />
            <Route exact path="/petitions_3/" component={Change} />
            <Route exact path="/petitions_4/" component={Return} />
            <Route exact path="/petitions_5" component={Review} />
            <Route exact path="/petition_sent" component={Sent} />
            <Route exact path="/gmail_login" component={Gmail_login} />
        
          </div>
       
        </Router>
    );
  }
}

export default injectContext(App);
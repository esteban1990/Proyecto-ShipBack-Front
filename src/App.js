import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./views/home";
import SignUp from './B-Flow/SignUp/signup.js';
import LogIn from './B-Flow/Login/login.js';
import Orders from './B-Flow/Orders/AllOrders/orders.js';
import Returns from './B-Flow/Orders/ReturnsOrders/returns.js';
import Exchange from './B-Flow/Orders/ExchangeOrders/exchange.js';
import CreateOrder from './B-Flow/Orders/CreateOrder/createOrder.js';
import Settings from './B-Flow/Account/setting.js';
import BillingDetails from './B-Flow/Account/billingDetail.js';
import Support from './B-Flow/Account/support.js';
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


class App extends Component {

  render() {

    return (
        <Router>
          <div className='App'>
            <Route exact path="/" component={Home} />
            <Route exact path="/cambioDevolucion" component={CambioDevolucion} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/orders" component={Orders} />
            <Route exact path="/returns" component={Returns} />
            <Route exact path="/exchange" component={Exchange} />
            <Route exact path="/createorder" component={CreateOrder} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/billingdetails" component={BillingDetails} />
            <Route exact path="/support" component={Support} />
            <Route exact path="/logout" component={LogOut} />
            <Route exact path="/tracking" component={Tracking} />
            <Route exact path="/analytics" component={Analytics} />
            <Route exact path="/petitions_1" component={AskedNumber} />
            <Route exact path="/petitions_2" component={QuestType} />
            <Route exact path="/petitions_3/" component={Change} />
            <Route exact path="/petitions_4/" component={Return} />
            <Route exact path="/petitions_5" component={Review} />
            <Route exact path="/petition_sent" component={Sent} />
          </div>
        </Router>
    );
  }
}

export default App;
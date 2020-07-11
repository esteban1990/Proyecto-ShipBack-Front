import React,{useContext} from "react";
import { Context } from "../../store/AppContext.js";
import NavBar from '../NavBar/navBar.js';


const Admin = (props) => {

    const {store, actions} = useContext(Context)

    return(

        <div>
        <NavBar />
        <div className="container pt-5 mb-5">
            <div classname="row">
                <div classname="col">
                    <div className="card">
                        <div classname="card-header">
                            <div className="card-body">
                                <form onSubmit={(e) => actions.Admin(e, props.history)}>
                                    <div className="row">
                                        <div className="col-12">
                                            <label for="" class="form-label"><h5>Email</h5></label>
                                         
                                            <input type="email" required class="form-control" value={store.email}  name="email" onChange={actions.handleChange}></input>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <label for="" class="form-label">Password</label>
                                            <input type="password" required onChange={actions.handleChange} store={store.password}  name="password" class="form-control"></input>
                                        </div>
                                    </div>
                                
                                    <div className="row justify-content-center pt-4">
                                        <div className="col-6">
                                          <button type="submit"
                                                className="btn btn-primary">Enter</button>
                                               
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

export default Admin;
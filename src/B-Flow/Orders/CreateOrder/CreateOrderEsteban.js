import React,{useContext} from "react";
import { Context } from "../../../store/AppContext.js";



const CreateOrderEsteban = (props) => {

    const {store, actions} = useContext(Context);
        
        return(
        
           <div className="container pt-5">
               <div classname="row">
                   <div classname="col">
                       <div className="card">
                           <div classname="card-header">

                            <div className="card-body">
                                <form>
                                    <div className="row">
                                        <div className="col-12">
                                            <label for="" class="form-label">First Name</label>
                                            <input type="text" class="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <label for="" class="form-label">last Name</label>
                                            <input type="text" class="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <label for="" class="form-label">email</label>
                                            <input type="email" class="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <label for="" class="form-label">city</label>
                                            <input type="text" class="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <label for="" class="form-label">state</label>
                                            <input type="text" class="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12">
                                            <label for="" class="form-label">Post code</label>
                                            <input type="text" class="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="row justify-content-center pt-4">
                                        <div className="col-6">
                                            <button type="submit" onClick={e => actions.CreateOrder(props.history)} class="btn btn-primary">Submit Form</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                           </div>
                    </div>
                   </div>
               </div>
           </div>
           
               )
}
export default CreateOrderEsteban;
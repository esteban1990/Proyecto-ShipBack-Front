import React, { useState, useContext } from "react";
import NavBar from '../NavBar/navBar.js';
import { Context } from "../../store/AppContext.js";


const urlapi = process.env.REACT_APP_APIURL || ''
const CreateOrder = (props) => {
    
    
    const { store, actions } = useContext(Context);


   // const [state, setState] = useState({
     //   name: "",
       // streetAddress: "",
        //commune: "",
        //city: "",
        //invoice_id: "",
        //office_id: "",
        //products: "",
        //email: "",
        //cellphone: "",
   // })
    //const handleChange = e => {
      //  e.preventDefault()
        //setState({
          //  ...state,
            //[e.target.name]: e.target.value
       // })
   // }
    //const handleSubmit = (e) => {
      //  e.preventDefault();
        //console.log(state)
        // if(store.address ==="" || store.streetAdress==="" || store.city==="" || store.postCode===""
        // || store.recipient==="" || store.email==="" || store.orderNumber==="" || store.phone==="" || store.cellphone===""){
        //     alert("Se deben de llenar todos los campos")
        //     return;
        // }
    //fetch(urlapi + '/orders', {
      //  method: 'POST',
//        headers: {
//            mode:'no-cors',
//            'Access-Control-Allow-Origin': "*"
//        },
        //body: JSON.stringify(state)
   // }).then(response => response.json()).then(posts => {
     //   props.history.push('/orders')
    //})
//}
return (
    <div>
        <NavBar />
        <div className="container pt-5 mb-5">
            <div classname="row">
                <div classname="col">
                    <div className="card">
                        <div classname="card-header">
                            <div className="card-body">
                                <form onSubmit={(e) =>actions.createOrder(e, props.history)}>
                                    <div className="row">
                                        <div className="col-12">
                                            <label for="" class="form-label"><h5>Recoger</h5></label>
                                            <p>Nombre</p>
                                            <input type="text" required minLength={5} name="client_name" value={store.client_name} class="form-control" onChange={actions.handleChange}></input>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <label for="" class="form-label">Dirección</label>
                                            <input type="text" required name="streetAddress" value={store.streetAddress} onChange={actions.handleChange} class="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <label for="" class="form-label">Comuna</label>
                                            <input type="text" required name="commune" value={store.commune} onChange={actions.handleChange} class="form-control"></input>
                                        </div>
                                        <div className="col-6">
                                            <label for="" class="form-label">Ciudad</label>
                                            <input type="text" required name="city" value={store.city} onChange={actions.handleChange} class="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="row mt-5 mb-2">
                                        <div className="col-12">
                                            <h5>Order Details</h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <label for="" class="form-label">ID Factura</label>
                                            <input type="number" required name="invoice_id" min="5" value={store.invoice_id} onChange={actions.handleChange} class="form-control"></input>
                                        </div>
                                        <div className="col">
                                            <label for="" class="form-label">ID Despacho</label>
                                            <input type="number" required name="office_id" min="5" value={store.office_id} onChange={actions.handleChange} class="form-control"></input>
                                        </div>
                                        <div className="col">
                                        <label for="" class="form-label">Courier</label>
                                                <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" required onChange={actions.handleChange} value={store.courrier} name="courrier">
                                                    <option selected>Seleccione</option>
                                                    <option value="chilexpress">Chilexpress.</option>
                                                    <option value="dhl">DHL Express.</option>
                                                </select> 
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <label for="" class="form-label">Productos</label>
                                            <input type="text" required name="products" value={store.products} onChange={actions.handleChange} class="form-control"></input>
                                        </div>
                                        <div className="col">
                                            <label for="" class="form-label">Correo</label>
                                            <input type="email" required name="client_email" value={store.client_email} onChange={actions.handleChange} class="form-control"></input>
                                        </div>
                                        <div className="col">
                                            <label for="" class="form-label">Celular</label>
                                            <input type="text" required name="cellphone" value={store.cellphone} onChange={actions.handleChange} class="form-control"></input>
                                        </div>
                                    
                                    </div>
                                    <div className="row justify-content-center pt-4">
                                        <div className="col-6">
                                           <button type="submit"
                                                className="btn btn-primary">Add Orders</button>
                                               
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
export default CreateOrder;
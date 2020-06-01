import { METHODS } from "http";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {

            //variables para registrarse, declarandolas en el store
            path:"http://localhost:3000",
            name: "",
            lastname:"",
            email:"",
            password:"",
            confirmPassword:"",
            currentPassword:"",
            idUsuario:null,
            allUsers:{},
        
            //Billing Details
            cardNumber:null,
            cvv:null,
            month: null,
            year: null,

            //invoices
            invoices:{},
            invoice_id:null,
            invoiceDate: new Date(),
            invoiceStatus:null,
            invoiceService:"",
            invoiceAmount:0,
            
            //create order
            name:"",
            lastname:"",
            email:"",
            city:"",
            state:"",
            postCode:"",


            //Settings
            storeName:"",
            contactName:"",
            companyName:"",
            contactPhone:0,
            industry:"",
            emailContact:"",
            address:"",
            city:"",

            // variables del pedido
            pedidos:[],
            numeroPedido:null,
            idPedido:null,
            descripcionPedido:{},

            //variables del producto
            productos:{},
            idProducto:0,
            nombreProducto:"",
            descripcionProducto:{}

          
         

          



    },

    actions: {

      createUserSettings: (history) => {
        const store= getStore();
        const data = {
          name: store.name,
          lastname: store.lastname,
          email: store.email,
          password: store.password,
          confirmPassword: store.confirmPassword
      //???    id : store.idUsuario
        }

        fetch(store.path + "/api/registrarse",{
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        })

        .then(function(response){
          if(response.ok)
          return response.json();
        })
        .then(function(data){
          console.log(data);
          setStore({
            name: "",
            lastname:"",
            email:"",
            password:"",
            confirmPassword:""
        //????    idUsuario:null

          });
          history.push("/users")
        })
      },

      editUser: () => {
        const store = getStore();
        const data = {
          name : store.name,
          lastname : store.lastname,
          email : store.email,
          password : store.password,
          confirmPassword: store.confirmPassword,
         //??? idUsuario: store.idUsuario
      }
      fetch(store.path + "/api/edit_user/" + store.id, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content Type": "application/json"
        }
      })
      .then(function(response){
        if(response.ok)
        return response.json();
      })
      .then(function(data){
        console.log(data);
        setStore({
        name:"",
        lastname:"",
        password:"",
        confirmPassword:"",
        currentPassword:"",
       //??? idUsuario:null
        })
        getActions().listarUsuarios();
      //history.push("/users")
      })

    },

    editBillingDetails: () => {
        const store= getStore();
        const data = {
          cardNumber:store.cardNumber,
          cvv:store.cvv,
          month: store.month,
          year: store.year
        }
        fetch(store.path+ "/editBillingDetails",{
          method : "PUT",
          body: JSON.stringify(data),
          headers : {
            "Content Type": "application/json"
          }
        })
        .then(function(response){
          if(response.ok)
          return response.json();
        })
        .then(function(data){
          console.log(data);
          setStore({
            cardNumber:null,
            cvv:null,
            month: null,
            year: null,
          })
          //history.push("/")
        })
    }, 

    createBillingDetails: () => {
      const store= getStore();
      const data = {
        cardNumber: store.cardNumber,
        cvv: store.cvv,
        month: store.month,
        year: store.year
      }
      fetch(store.path + "/billingDetails",{
        method: "POST",
        body: JSON.stringify(data),
        headers : {
          "Content Type": "application/json"
        }
      })
      .then(function(response){
        if(response.ok)
        return response.json();
      })
      .then(function(data){
        console.log(data);
        setStore({
          cardNumber:null,
          cvv:null,
          month:null,
          year:null
        })
        //history.push("/billingDetails")
      })
    },

    createOrder: () => {
      const store = getStore();
      const data = {
             name: store.name,
            lastname:store.lastname,
            email:store.email,
            city:store.city,
            state: store.state,
            postCode: store.postCode
      }
      fetch(store.path + "/create_order",{
        method: "POST",
        body: JSON.stringify(data),
        headers : {
          "Content Type": "application/json"
        }
      })
      .then(function(response){
        if(response.ok)
        return response.json();
      })
      .then(function(data){
        console.log(data);
        setStore({
            name:"",
            lastname:"",
            email:"",
            city:"",
            state:"",
            postCode:""
        })
        // history.push("/")
      })
    },


      createStoreDetails : () => {
        const store = getStore(); 

      const data = {

            storeName: store.storeName,
            contactName: store.contactName,
            companyName:store.companyName,
            contactPhone:store.contactPhone,
            industry:store.industry,
            emailContact:store.emailContact,
            address:store.address,
            city:store.city,
        }

        fetch(store.path + "api/settings",{
          method: "POST",
          body: JSON.stringify(data),
          headers:{
            "Content Type": "application/json"
          }
        })
        .then(function(response){
          if(response.ok)
          return response.json();
        })
        .then(function(data){
          console.log(data);
          setStore({
            storeName:"",
            contactName:"",
            companyName:"",
            contactPhone:0,
            industry:"",
            emailContact:"",
            address:"",
            city:""

          });
        //  history.push("/settings")
        })

      },

      
      handleChange: e => {
        setStore({
            [e.target.name]: e.target.value
        })
    },



    listarPedidos: () =>{
      const store = getStore();
      fetch(store.path + "/api/data_pedidos",{
        method : "GET",
        headers: {
          "Content Type": "application/json"
        }
      })
      .then(function(response){
        if(response.ok)
        return response.json();
      })
      .then(function(data){
        console.log(data)
        setStore({
          pedidos : data
        })
      })
    },




    listarUsuarios: () => {
        const store = getStore();

        fetch(store.path + "/api/users",{
          method :"GET",
          headers : {
            "Content Type": "application/json"
          }
        })
        .then(function(response){
          if(response.ok)
          return response.json()
        })
        .then(function(data){
          console.log(data);
          setStore({
            allUsers : data
          })
        })
    },




      listarProductos: () => {
        const store = getStore();
        fetch(store.path + "/api/data_productos",{
          method: "GET",
          headers: {
            "Content Type": "application/json"
          }
        })
        .then(function(response){
          if(response.ok)
          return response.json();
        })
        .then(function(data){
          console.log(data);
          setStore({
            productos : data
          })
        })

      },

      

      seleccionarProducto : (producto) => {
        console.log(producto);
        setStore({
          id: producto.id,
          nombreProducto : producto.nombre,
          precioProducto: producto.precio,
          descripcionProducto: producto.descripcionProducto
        })
      },




      seleccionarPedido: (pedido) => {
        console.log(pedido)
        setStore({
          id: pedido.idPedido,
          numeroPedido: pedido.numeroPedido,
          descripcionPedido: pedido.descripcionPedido
        })
      },



      editarPedido: (history) => {
        const store = getStore();
        const data = {
          numeroPedido : store.numeroPedido,
          idPedido : store.idPedido,
          descripcionPedido : store.descripcionPedido

        }
        fetch(store.path + "/api/data_productos/" +store.id, {
          method: "PUT",
          body: JSON.stringify(data),
          headers: {
            "Content Type": "application/json"
          }
        })
        .then(function(response){
          if(response.ok)
          return response.json();
        })
        .then(function(data){
          console.log(data);
          setStore({
            idPedido:"",
            numeroPedido:"",
            descripcionPedido:""
          })
          getActions().listarPedidos();
          history.push("/pedidos")
        })
      },

    }
  }
}
export default getState;
import { METHODS, get } from "http";
import { setServers } from "dns";
import M from 'materialize-css';
import history from "../views/history";
import Auth from '../helpers/auth';
import { useHistory } from "react-router-dom";


const urlapi = process.env.REACT_APP_APIURL || ''

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      user_data: {
        firstname: "",
        lastname: "",
        email: "",
        password: ""
      },

      //todo lo que sea componente form se tiene que validar en el headers del fetch
      //variables para registrarse, declarandolas en el store


      //  allUsers: [{
      //  idUser:"", name:"", lastName:"",email:"",
      //}],

      //Billing Details
      allList_BillingDetails:[{
      cardNumber:"",
      cvv: "",
      month: "",
      year: ""
      }],

      //create order
      client_name: "",
      streetAddress: "",
      commune: "",
      city: "",
      invoice_id: "",
      office_id: "",
      products: "",
      client_email: "",
      cellphone: "",
      courrier: "",
      price: "",


      allorders: [
        {
          id: "", client_name: "", streetAddress: "", commune: "", city: "",
          invoice_id: "", office_id: "", products: "", price: "", courrier: "", client_email: "", cellphone: "", confirmed: null
        }
      ],

      confirmedorders: [
        {
          id: "", client_name: "", streetAddress: "", commune: "", city: "",
          invoice_id: "", office_id: "", products: "", price: "", courrier: "", client_email: "", cellphone: "", confirmed: null
        }
      ],

      allSenderDetails: [
        {
          storeName: "",
          contactName: "",
          companyName: "",
          contactPhone:"",
          industry:"",
          emailContact: "",
          address:"",
          city:""
       
        }

      ],

      allInvoices: [
        {
          invoiceID: "",
          invoiceDate: "",
          invoiceStatus: false,
          invoiceService: "",
          invoiceAmount: ""
        }
      ],

      listAllEmployees: [
        {
          id: "",
          employee_email:"",
          employee_password:"",
          employee_firstName:"",
          employee_lastName:""
        }
      ],


      // variables del pedido
      pedidos: [],
      numeroPedido: null,
      idPedido: null,
      descripcionPedido: {},

      //variables del producto

      idProducto: 0,
      nombreProducto: "",
      descripcionProducto: {}

    },

    actions: {
      registration: (history) => {
        const store = getStore();
        fetch(urlapi + "/signup", {
          method: "POST",
          body: JSON.stringify(store.user_data),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(resp => resp.json())
          .then(data => { if (data.success) { M.toast({ html: 'User created succesfully' }); history.push("/login") } })
          .catch(err => console.log(err));
      },
      login: (e, history) => {
        e.preventDefault();
        const store = getStore();
        fetch(urlapi + "/login", {
          method: "POST",
          body: JSON.stringify({
            email: store.user_data.email,
            password: store.user_data.password
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(function (response) {
          if (response.status >= 500) {
            history.push("/login")
            alert("Ha ocurrido un error en el servidor.")
          }
          else if (response.status >= 400 & response.status < 500) {
            history.push("/login")
            alert("Ha ingresado incorrectamente la contraseña o el correo electrónico. Verifique que los datos sean correctos.")
          }
          else if (response.status >= 200 & response.status < 300) 
            history.push("/orders")
        })
      },
      handleChangeRegistration: (evento) => {
        console.log(evento.target.value);
        const store = getStore();
        let { user_data } = store;
        user_data[evento.target.id] = evento.target.value;
        setStore({ user_data: user_data });
      },
      submitLogin: (e, history) => { //no hay un condicionante que te diga que si la contraseña es mala.
        e.preventDefault();
        const store = getStore();
        let { user_data } = store;
        let re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        let reEmail = /\S+@\S+\.\S+/;
        if (user_data.password === "" || user_data.email === "") {
          M.toast({ html: 'A form field is currently in blank' })
        } else if (!re.test(user_data.password)) {
          M.toast({ html: 'Password must contain at least 6 characters long, one uppercase letter and one number.', displayLength: 6000 })
        } else if (!reEmail.test(user_data.email)) {
          M.toast({ html: 'Invalid email input' })
        }
        // else if (user_data.password !== ) {M.toast({html: 'Wrong password'})} 
        else {
          getActions().login(history);
        }
      },
      submitRegistration: (e, history) => {
        e.preventDefault();
        const store = getStore();
        let { user_data } = store;
        let re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        let reEmail = /\S+@\S+\.\S+/;
        if (user_data.password === "" || user_data.firstname === "" || user_data.lastname === "" || user_data.email === "") {
          M.toast({ html: 'A form field is currently in blank' })
        } else if (!re.test(user_data.password)) {
          M.toast({ html: 'Password must contain at least 6 characters long, one uppercase letter and one number.', displayLength: 6000 })
        } else if (!reEmail.test(user_data.email)) {
          M.toast({ html: 'Invalid email input' })
        } else {
          getActions().registration(history);
        }
      },


      //trabajo previo


      Admin: (e, history) => {
        e.preventDefault();
        const store = getStore();
        fetch(urlapi + "/admin", {
          method: "POST",
          body: JSON.stringify({
            email: store.email,
            password: store.password
          }),
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(function(response){
          if (response.status>=500){
            history.push("/admin")
            alert("Errror en el servidor")
          }
          else if(response.status>=400 && response.status<500){
            history.push("/admin")
            alert("No esta ingresando con datos de Administrador")
          }
          else if(response.status>=200 && response.status<300){
            history.push("/admi_usuario");
            return response.json();
          }
          
        })
      },

      createUser_Admin: (e, history) => {
        e.preventDefault();
        const store = getStore();
        fetch(urlapi + "/newUser",{
          method: "POST",
          body: JSON.stringify({
            email:store.email,
            firstname:store.firstname,
            lastname:store.lastname,
            password:store.password
          }),
          headers:{
            "Content-Type": "application/json"
          }
        })
        .then(function(response){
          if(response.ok)
          return response.json();
        })
        .then(function(data){
          console.log(data)
          setStore({
            firstname: "",
            lastname: "",
            email: "",
            password: ""
          })
          getActions().listarUsuarios();
          history.push("/admi_usuario")
        })
      },

      listarUsuarios: () => {
        const store = getStore();
        fetch(urlapi + "/admi_usuario", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(function (response) {
            if (response.ok)
              return response.json()
          })
          .then(function (data) {
            console.log(data);
            setStore({
              user_data: data
            })
          })
      },
  




      deleteUser_Admin: (id) => {
        const store = getStore();
        fetch(urlapi + "/admi_usuario/" + id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(function (response) {
            if (response.ok)
              return response.json()
          })
          .then(function (data) {
            console.log(data);
            getActions().listarUsuarios();
          })
      },


      editUser_Admin: (id) => {
        const store = getStore();
        fetch(urlapi + "/update_user/" + id ,{
          method: "PUT",
          body: JSON.stringify({
            password: store.password
          }),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(function (response) {
            if (response.ok)
              return response.json();
          })
          .then(function (data) {
            console.log(data);
            setStore({
              user_data: data
            });
            getActions().listarUsuarios()
           history.push("/admi_usuario")
          })

      },
      






      handleChange: e => {
        setStore({
          [e.target.name]: e.target.storename,
          [e.target.name]: e.target.contactName,
          [e.target.name]: e.target.companyName,
          [e.target.name]: e.target.contactPhone,
          [e.target.name]: e.target.industry,
          [e.target.name]: e.target.emailContact,
          [e.target.name]: e.target.address,
          [e.target.name]: e.target.city,
        })
      },

      createStoreDetails: (e, history) => {
        e.preventDefault();
        const store = getStore();

        fetch(urlapi + "/settings", {
          method: "POST",
          body: JSON.stringify({
            storeName: store.storeName,
            contactName: store.contactName,
            companyName: store.companyName,
            contactPhone:store.contactPhone,
            industry:store.industry,
            emailContact: store.emailContact,
            address:store.address,
            city:store.city

          }),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(function (response) {
            if (response.ok)
              return response.json();
          })
          .then(function (data) {
            console.log(data);
            getActions().listarSenderDetails();
            history.push("/settings/entrepreneur_details")
          })

      },

      listarSenderDetails: () => {
        const store = getStore();
        fetch(urlapi + "/settings", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(function (response) {
            if (response.ok)
              return response.json();
          })
          .then(function (data) {
            console.log(data);
            setStore({ allSenderDetails: data })
          })
      },




      //    createUserSettings: (e,history) => {
      //    const store = getStore();
      //  fetch(urlapi + "/navbar/settings/users", {
      //  method: "POST",
      // body: JSON.stringify({
      // email: store.email,
      // firstName: store.firstName,
      // lastName: store.lastName,
      // newPassword: store.newPassword,
      // confirmPassword: store.confirmPassword
      // }),
      // headers: {

      // "Content-Type": "application/json"
      // }
      // })

      // .then(function (response) {
      // if (response.ok)
      // return response.json();
      //  })
      //.then(function (data) {
      // console.log(data);
      //getActions().listarUsuarios();
      // history.push("/login")
      //   })
      // },


      editBillingDetails: (history) => {
        const store = getStore();
        fetch("http://127.0.0.1:5000/billingdetails", {
          method: "PUT",
          body: JSON.stringify({
            cardNumber: store.cardNumber,
            cvv: store.cvv,
            month: store.month,
            year: store.year
          }),
          headers: {
            "Content Type": "application/json"
          }
        })
          .then(function (response) {
            if (response.ok)
              return response.json();
          })
          .then(function (data) {
            console.log(data);
            setStore({
              cardNumber: "",
              cvv: "",
              month: null,
              year: null,
            })
            history.push("/billingDetails")
          })
      },


      createBillingDetails: (e,history) => {
        e.preventDefault();
        const store = getStore();
        fetch(urlapi + "/billingdetails", {
          method: "POST",
          body: JSON.stringify({
            cardNumber: store.cardNumber,
            cvv: store.cvv,
            month: store.month,
            year: store.year
          }),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(function (response) {
            if (response.ok)
              return response.json();
          })
          .then(function (data) {
            console.log(data);
   
            getActions().listar_BillingDetails();
            history.push("/billingdetails/detailCards")
          })
      },


      listar_BillingDetails: () => {
        const store = getStore();
        fetch(urlapi + "/billingdetails/detailCards",{
          method:"GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(function(response){
          if(response.ok)
          return response.json();
        })
        .then(function(data){
          console.log(data)
          setStore({
            allList_BillingDetails: data
          })
        })
      },



      createEmployee : (e,history) => {
        e.preventDefault();
        const store = getStore();
        fetch(urlapi + "/settings/users", {
          method: "POST",
          body: JSON.stringify({
            employee_email: store.employee_email,
            employee_firstName:store.employee_firstName,
            employee_lastName:store.employee_lastName,
            employee_password:store.employee_password
          }),
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
          getActions().allEmployees();
          history.push("/settings/users/all")
        })
      },

    
  

      allEmployees: () => {
        const store = getStore()
        fetch(urlapi + "/settings/users/all", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(function (response) {
            if (response.ok)
              return response.json()
          })
          .then(function (data) {
            console.log(data);
            setStore({
              listAllEmployees: data
            })
          })

      },



      createOrder: (e, history) => {
        e.preventDefault();
        const store = getStore();
        fetch(urlapi + "/orders", {
          method: "POST",
          body: JSON.stringify({
            client_name: store.client_name,
            streetAddress: store.streetAddress,
            commune: store.commune,
            city: store.city,
            invoice_id: Math.round((Math.random() * 1000000)),
            office_id: Math.round((Math.random() * 1000000)),
            products: store.products,
            courrier: store.courrier,
            client_email: store.client_email,
            cellphone: store.cellphone,
            user_email: store.user_email,
            confirmed: false
          }),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(function (response) {
            if (response.ok)
              return response.json();
          })
          .then(function (data) {
            console.log(data);
            getActions().listarOrdenes();
            history.push("/orders")
          })
      },

      listarOrdenesConfirmadas: () => {
        const store = getStore();
        fetch(urlapi + '/tracking', {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(function (response) {
            if (response.ok)
              return response.json();
          })
          .then(function (data) {
            console.log(data);
            setStore({
              confirmedorders: data
            })
          })
      },

      listarOrdenes: () => {
        const store = getStore();
        fetch(urlapi + '/orders', {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(function (response) {
            if (response.ok)
              return response.json();
          })
          .then(function (data) {
            console.log(data);
            setStore({
              allorders: data
            })
          })
      },



      deleteOrder: (invoice_id) => {
        const store = getStore();
        fetch(urlapi + "/orders/" + invoice_id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(function (response) {
            if (response.ok)
              return response.json()
          })
          .then(function (data) {
            console.log(data);
            getActions().listarOrdenes();
          })
      },


      confirmOrder: (invoice_id) => {
        const store = getStore();
        fetch(urlapi + "/orders/" + invoice_id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(function (response) {
            if (response.ok)
              return response.json()
          })
          .then(function (data) {
            console.log(data);
            getActions().listarOrdenes();
          })
      },

      createInvoice: (e, history) => {
        e.preventDefault();
        const store = getStore();
        fetch(urlapi + "/invoices", {
          method: "POST",
          body: JSON.stringify({
            invoice_id: store.invoice.id,
            invoiceDate: store.invoiceDate,
            invoiceStatus: store.invoiceStatus,
            invoiceService: store.invoiceService,
            invoiceAmount: store.invoiceAmount
          }),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(function (response) {
            if (response.ok)
              return response.json();
          })
          .then(function (data) {
            console.log(data)
            getActions().allInvoices();
            history.push("/invoices")
          })
      },

      listarInvoices: () => {
        const store = getStore();
        fetch(urlapi + "/invoices", {
          method: "GET",
          headers: {
            "Content Type": "application/json"
          }
        })
          .then(function (response) {
            if (response.ok)
              return response.json();
          })
          .then(function (data) {
            console.log(data);
            setStore({
              allInvoices: data
            })
          })
      },




      seleccionarInvoice: (invoice) => {
        const store = getStore();
        console.log(invoice)
        setStore({
          invoice_id: invoice.id,
          invoiceDate: invoice.date,
          invoiceStatus: invoice.status,
          invoiceService: invoice.service,
          invoiceAmount: invoice.amount
        })

      },

      eliminarInvoice: (invoice) => {
        const store = getStore();
        fetch("reqres/api/invoices/" + invoice.id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(function (response) {
            if (response.ok)
              return response.json()
          })
          .then(function (data) {
            console.log(data);
            getActions().allInvoices();
          })
      },

      eliminarProducto: (producto) => {
        const store = getStore();
        fetch(store.path + '/api/data_productos/' + producto.id, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(resp => resp.json())
          .then(data => {
            console.log(data)
            getActions().listarProductos();
          })

      },




      handleChange: e => {
        e.preventDefault()
        setStore({
          [e.target.name]: e.target.value
        })
      },




      listarPedidos: () => {
        const store = getStore();
        fetch(store.path + "/orders", {
          method: "GET",
          headers: {
            "Content Type": "application/json"
          }
        })
          .then(function (response) {
            if (response.ok)
              return response.json();
          })
          .then(function (data) {
            console.log(data)
            setStore({
              pedidos: data
            })
          })
      },
 

      deleteEmployedUser: () => {
        const store = getStore();
        fetch(urlapi + "/admi_Usuario", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(function (response) {
            if (response.ok)
              return response.json();
          })
          .then(function (data) {
            console.log(data)
            getActions().listAllEmployeds();
          })
      },

      deleteOrder: (invoice_id) => {
        const store = getStore();
        fetch(urlapi + "/orders/" + invoice_id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(function (response) {
            if (response.ok)
              return response.json()
          })
          .then(function (data) {
            console.log(data);
            getActions().listarOrdenes();
          })
      },


      editSenderDetails: (history) => {
        const store = getStore();
        fetch(urlapi + "/detalles_Emprendedor", {
          method: "PUT",
          body: JSON.stringify({
            storeName: store.storeName,
            contactName: store.contactName,
            companyName: store.companyName,
            contactPhone: store.contactPhone,
            industry: store.industry,
            emailContact: store.emailContact,
            address: store.address,
            city: store.city
          }),
          headers: {
            "Content Type": "application/json"
          }
        })
          .then(function (response) {
            if (response.ok)
              return response.json();
          })
          .then(function (data) {
            console.log(data)
            getActions().listarSenderDetails();
          })
      },


      listarProductos: () => {
        const store = getStore();
        fetch(store.path + "/api/data_productos", {
          method: "GET",
          headers: {
            "Content Type": "application/json"
          }
        })
          .then(function (response) {
            if (response.ok)
              return response.json();
          })
          .then(function (data) {
            console.log(data);
            setStore({
              productos: data
            })
          })

      },



      //   seleccionarProducto: (producto) => {
      //   console.log(producto);
      // setStore({
      // id: producto.id,
      // nombreProducto: producto.nombre,
      // precioProducto: producto.precio,
      // descripcionProducto: producto.descripcionProducto
      // })
      // },


      // seleccionarOrder: (order, id) => {

      //   console.log(order)
      //  setStore({

      //  id: order.id,
      // name: order.name,
      // lastname: order.lastname,
      // email: order.email,
      // city: order.city,
      // state: order.state,
      //postCode: order.postCode,


      //})
      //},

      //seleccionarPedido: (pedido) => {
      //console.log(pedido)
      // setStore({
      // id: pedido.idPedido,
      // numeroPedido: pedido.numeroPedido,
      // descripcionPedido: pedido.descripcionPedido
      //  })
      // }




    }
  }
}
export default getState;
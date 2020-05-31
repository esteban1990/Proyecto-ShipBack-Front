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
            idUsuario:null,
            allUsers:{},
            // variables del producto
            pedidos:[],
            numeroPedido:null,
            idPedido:null,
            descripcionPedido:{},
            productos:{}
          



    },
    actions: {

      login: async(params) => {
        console.log(params)
        if(params!==undefined && params.name!== "" && params.lastname!=="" && params.password!==""){
          const user = {
          name : params.name,
          lastname: params.lastname,
          email : params.email,
          password : params.password
          }
          setStore({
            allUsers : user
          })
          localStorage.setItem("user",JSON.stringify(user))
        }
      },



      revalidateUser: (user) => {
        if (user !== undefined) {
          setStore({
            allUsers: user
          });
        }
      },



      createUser: (history) => {
        const store= getStore();
        const data = {
          name: store.name,
          lastname: store.lastname,
          email: store.email,
          password: store.password,
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
            nameCompany:"",
            direction:"",
            city:"",
            phone:"",
            idUsuario:0

          });
          history.push("/users")
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


      editarPedido: (history) => {
        const store = getStore();
        const data = {
          numeroPedido : store.nombreProducto,
          idPedido : store.precioProducto,
          descripcionProducto : store.descripcionProducto

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
            nombreProducto:"",
            precioProducto:"",
            descripcionProducto:""
          })
          getActions().listarProductos();
          history.push("/productos")
        })
      },



    }
  }
}
export default getState;
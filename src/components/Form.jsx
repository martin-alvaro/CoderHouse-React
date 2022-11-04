import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useContext } from "react"
import {useState } from "react"
import { Context } from "../context/CartContext"
import { baseDeDatos } from "../services/firebase"
import { Link } from "react-router-dom"

const Form = () => {
    const [nombre,setNombre] = useState('')
    const [apellido,setApellido] = useState('')
    const [ordenId, setOrden] = useState('')
    const [correo1, setCorreo1] = useState('')
    const [correo2, setCorreo2] = useState('')
    const[cargando, setCargando] = useState(false)
    const [telefono, setTelefono] = useState("");
    const {carrito, precioTotal, borrar, unidadesTotales} = useContext(Context)

    
    const submit = (e)=>{
        setCargando(true)
       e.preventDefault()
        
       
       const ordenDeCompra = {
            comprador:{nombre, apellido},
            items:carrito,
            total: precioTotal(),
            dia: serverTimestamp()
        }


        const orden = collection(baseDeDatos, 'ordenes')
        addDoc(orden, ordenDeCompra)
        .then((respuesta)=>{
            setOrden(respuesta.id)
            borrar()

        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{
            setCargando(false)
        })
    }

     const cambioNombre = (e) =>{
        setNombre(e.target.value)
     }

     const cambioApellido = (e) =>{
        setApellido(e.target.value)
     }

     
  const cambioCorreo1= (e) => {
    setCorreo1(e.target.value);
  };

  const cambioCorreo2 = (e) => {
    setCorreo2(e.target.value);
  };
  const cambioTelefono = (e) => {
    setTelefono(e.target.value);
  };



     if (ordenId){
        return(
            <div style={{textAlign:"center",marginTop:'70px'}}>
                <h2>Muchas gracias por su compra</h2>
                <h3 style={{marginBottom:"30px"}}>Tu numero de seguimiento es:<p style={{color:"red"}}>{ordenId}</p></h3>
                <Link to= "/">
                    <button className="volveAlInicio">Volver al inicio</button>
                </Link>
            </div>
        )        
     }

    return (
        <main>
            <div className="container-form">
                <div style={{fontWeight: 650}}>
                    <p style={{fontSize:'28px', marginBottom:"15px"}}>Detalles de la compra</p>
                    <p style={{fontSize:"22px", marginBottom:"15px"}}>Total a pagar: $ {precioTotal()}</p>
                    <p style={{fontSize:"19px"}}>Cantidad de productos: {unidadesTotales()} </p>
                </div>
                
                <form className="form" onSubmit={submit} action="">
                    <div>
                        <label style={{marginBottom:'10px'}}>Nombre</label>
                        <input type="text" name="nombre" placeholder="Ingresar nombre" onChange={cambioNombre} value={nombre} required/>
                        <label style={{marginBottom:'10px'}}>Apellido</label>
                        <input type="text" name="apellido" placeholder="Ingresar Apellido" onChange={cambioApellido} value={apellido} required/>
                        <label style={{marginBottom:'10px'}}>Correo Electrónico</label>
                        <input type="email" value={correo1} onChange={cambioCorreo1} placeholder="Ingresar mail" required></input>
                        <label style={{marginBottom:'10px'}}>Repetir Correo Electrónico</label>
                        <input type="email" value={correo2} onChange={cambioCorreo2} placeholder="Ingrese nuevamente su correo" required style={{margin:'0'}}></input>
                        <p style={correo1 !== correo2 || (correo1 === "" && correo2 === "")
                                    ? { color: "red", marginBottom:'15px'}
                                    : { color: "green"}
                         }>{correo1 !== correo2 || (correo1 === "" && correo2 === "")
                         ? "Los Correos deben ser iguales"
                         : "Los correos coinciden"}
                         </p>
                         <label style={{marginTop:'10px'}}>Teléfono</label>
                         <input type='number' onChange={cambioTelefono} value={telefono} placeholder='Ingresar Teléfono'
                required/>
                    </div>
                    <button style={{marginTop:'10px'}}  disabled={((correo1 !== correo2) || (correo1 === "" && correo2 === "") || (nombre === "") || (apellido === "") || (telefono === ""))}>{cargando ? "Finalizando Compra..." : "Finalizar Compra"}</button>
                                                                
                </form>
            </div>
        </main>
    )
}

export default Form
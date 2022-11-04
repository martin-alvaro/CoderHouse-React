import { useContext } from "react"
import { Context } from "../context/CartContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { faHouse } from '@fortawesome/free-solid-svg-icons'

const Cart = ()=>{

    const {carrito, borrar,removeItem,precioTotal} = useContext(Context)



    if (carrito.length === 0){
        return(
            <div style={{display:"flex", justifyContent:'center', alignItems:'center', height:'80vh'}}>
                <Link to="/" style={{color:'green', fontSize:'21px'}}><h2>No hay ningun producto cargado, vuelva al inicio<FontAwesomeIcon icon={faHouse} style={{marginLeft:'10px'}}/></h2></Link>
            </div>
        )
    }

    return(
        <div className="tbla">

            <h1>Realizar compra</h1>
            
            <table className="tabla-carrito">
                    <thead>
                        <tr className="fila">
                            <td>Imagen</td>
                            <td>Nombre</td>
                            <td>Precio</td>
                            <td>Cantidad</td>
                            <td>Subtotal</td>
                        </tr>
                    </thead>
            
            {carrito.map((prod) =>(                   
                        <tbody key={prod.id}>
                            <tr className="fila2">
                                <td><img src={prod.img} alt={prod.nombre} /></td>
                                <td>{prod.nombre}</td>
                                <td>${prod.precio}</td>
                                <td>{prod.cantNum}</td>
                                <td>${prod.precio * prod.cantNum}</td>
                                <td><FontAwesomeIcon icon={faTrashAlt} style={{color:"red", cursor:'pointer'}} onClick={()=> removeItem(prod.id)}/></td>
                            </tr>
                        </tbody>
                    
            ))} 
                        <tfoot>
                            <tr style={{height:'70px', fontSize:'20px'}}>
                                <td colSpan={2}>Total:${precioTotal()}</td>
                                <td colSpan={2}><FontAwesomeIcon icon={faTrash} style={{color:"red", cursor:'pointer'}} onClick={borrar}/></td>
                                <td colSpan={2}><Link to= '../checkout'><button className="alCheckout">Continuar con la compra</button></Link></td>
                            </tr>
                        </tfoot>
                        </table>
        </div>
    )
}

export default Cart
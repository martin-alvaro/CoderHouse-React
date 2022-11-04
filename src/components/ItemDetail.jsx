import { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Context } from '../context/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({item})=>{

    const [unidades , setUnidades] = useState(0)

    const {additem} = useContext(Context)

    const onAdd = (numero) =>{
        additem(item, numero)
        setUnidades(numero)
        toast.info(`Agregaste ${numero} productos al carrito`)
    }

    return(
        <div className='contenedor-detalle'>
            <ToastContainer/>
            <img src={item.img} alt={item.nombre}/>
            <div className='info'>
                <h2 className='nombre-detalle'>{item.nombre}</h2>
                <p className='texto-detalle'>{item.descripcion}</p>
                {unidades === 0 ? (
                <ItemCount onAdd={onAdd} stock={item.stock} initial={1}/>
                ) : (
                    <div className='alCarrito'>
                        <Link to="/cart">Ir al carrito<FontAwesomeIcon icon={faCartShopping} /></Link>
                    </div>
                )}

            </div>
        </div>
    )
}

export default ItemDetail


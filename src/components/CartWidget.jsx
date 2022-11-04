import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { Context } from '../context/CartContext';


function CartWidget(){
    const {unidadesTotales} = useContext(Context)
    const tUnidades = unidadesTotales()

    if(tUnidades === 0){
        return(
            <div className="carritoW">
                <FontAwesomeIcon icon={faCartShopping} />
            </div>
        )
    }
    
    return(
        <div className="carritoW">
            <FontAwesomeIcon icon={faCartShopping} />
            <span className='numeroCarrito'>{unidadesTotales()}</span>
        </div>

    )
}

export default CartWidget; 
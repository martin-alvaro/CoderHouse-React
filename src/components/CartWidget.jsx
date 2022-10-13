import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


function CartWidget(){
    return(
        <div className="carrito">
        <FontAwesomeIcon icon={faCartShopping} />
        <span className='numeroCarrito'>0</span>
        </div>

    )
}

export default CartWidget; 
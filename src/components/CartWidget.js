import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


function CartWidget(){
    return(
        <div className="carrito">
        <FontAwesomeIcon icon={faCartShopping} />
        </div>
    )
}

export default CartWidget; 
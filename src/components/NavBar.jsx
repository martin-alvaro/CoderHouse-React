import CartWidget from './CartWidget';
import {Link,NavLink} from 'react-router-dom'

function NavBar(){
    return(
        <nav>
            <Link to="/">
                <h1 style={{"color":"#DFDFDE"}}>Complejo 22</h1>
            </Link>
            <ul>
                <Link className='link' to="./">Inicio</Link>
                <li className='link select' >Productos
                    <ul className='catalogo'>
                        <NavLink to="/category/camisetas">Camisetas</NavLink>
                        <NavLink to="/category/shorts">Shorts</NavLink>
                        <NavLink to="/category/botines">Botines</NavLink>
                    </ul>
                </li>
                <Link className='link' to={''}>Contactos</Link>
                
                
            </ul>  
            <Link to={"/cart"}>
                <CartWidget/>
            </Link>
        </nav>
    )
}

export default NavBar;
import Lista from './Lista'
import CartWidget from './CartWidget.js';
function NavBar(){
    return(
        <nav>
        <h1 style={{"color":"#DFDFDE"}}>Complejo 22</h1>
        <ul>
            <Lista/>
        </ul>    
        <CartWidget/>
        </nav>
    )
}

export default NavBar;
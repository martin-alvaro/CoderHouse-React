function Lista (){
    const items= ['Inicio','Producto','Contactos']
    return(
        items.map(item=> <li><a href="./">{item}</a></li>)
    )
}

export default Lista
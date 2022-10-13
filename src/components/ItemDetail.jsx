import ItemCount from './ItemCount'

const ItemDetail = ({item})=>{
    return(
        <div className='contenedor-detalle'>
            <img src={item.img} alt={item.nombre}/>
            <div className='info'>
                <h2 className='nombre-detalle'>{item.nombre}</h2>
                <p className='texto-detalle'>{item.descripcion}</p>
                <ItemCount stock={item.stock} initial={1}/>
            </div>
        </div>
    )
}

export default ItemDetail
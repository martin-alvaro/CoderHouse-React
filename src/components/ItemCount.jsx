import { useState } from "react"


const ItemCount = (prop) =>{
   
    const [count , setCount] = useState(prop.initial)

    const sumar =()=>{
            setCount(count + 1)
    }

    const restar =()=>{
        setCount(count - 1)
    }
    
    return (
        <div  className="containerCount">
            <div className="count">
                <button className="mas" disabled={count === prop.stock} onClick={sumar}>+</button>
                <p className="contador">{count}</p>
                <button className="menos" disabled={count === prop.initial} onClick={restar}>-</button>
            </div>
            <button className="add">Agregar al carrito</button>
        </div>
    )

}

export default ItemCount 
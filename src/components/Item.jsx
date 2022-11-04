import React from "react"
import { Link } from "react-router-dom"

const Item = ({prod})=>{
    return (
        <article>
            <div className="card">
                <img src={prod.img} alt={prod.nombre}/>
                <div>
                    <h2>{prod.nombre}</h2>
                    <h3>${prod.precio}</h3>
                    <div className="detalle">
                        <Link to={`/item/${prod.id}`}>Mas detalles</Link>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Item
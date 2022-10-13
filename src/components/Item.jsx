import React from "react"
import { Link } from "react-router-dom"

const Item = ({prod})=>{
    return (
        <article>
            <div className="card">
                <img
                    src={prod.img}
                    alt={prod.nombre}
                />
                <div >
                    <h2>{prod.nombre}</h2>
                    <h4>${prod.precio}</h4>
                    <div className="detalle">
                        <Link to={`/item/${prod.id}`}>Mas detalles</Link>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Item
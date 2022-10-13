import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { products } from './mock/productosMock'
import Saludo from './Saludo'
import { useParams } from 'react-router-dom'


const ItemListContainer =()=>{
  
    const [items, setItems] = useState([])

    const {categoryName} = useParams()

    useEffect(()=>{
        const LLamarProductos =()=>{
        
            return new Promise ((res,rej)=>{
                const productosFiltrados = products.filter((prod)=> prod.categoria ===categoryName)
                
                const prod = categoryName ? productosFiltrados : products
                setTimeout(()=>{
                    res(prod)
                }, 300)
            })
        }
        LLamarProductos()
        .then ((res)=>{
            setItems(res)
        })
        .catch((error)=>{
            console.log(error)
        })
        
    }, [categoryName])



    return (
        <main>
            <div>
                <Saludo greeting='Complejo 22'/>
                <ItemList items={items}/>
            </div>
        </main>
    )
}

export default ItemListContainer
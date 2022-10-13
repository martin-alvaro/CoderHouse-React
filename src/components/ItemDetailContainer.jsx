import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { products } from './mock/productosMock'
import { useParams } from 'react-router-dom'

const ItemDetailContainer =()=>{
  
    const [item, setItem] = useState({})
    

    const {id} = useParams()

    useEffect(() => {
        const traerProducto = () => {
            return new Promise((res, rej) => {
                const producto = products.find(
                    (prod) => prod.id === Number(id)
                );
                console.log(id)

                setTimeout(() => {
                    res(producto);
                }, 300);
            });
        };
        traerProducto()
            .then((res) => {
                setItem(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);
   
    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer
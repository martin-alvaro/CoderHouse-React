import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import Saludo from './Saludo'
import { useParams } from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader";
import {collection, query, where} from 'firebase/firestore'
import {baseDeDatos} from '../services/firebase'
import { getDocs } from 'firebase/firestore'

const ItemListContainer =()=>{
  
    const [items, setItems] = useState([])
    const [cargando , setCargando] = useState(true)
    const {categoryName } = useParams()
 

    useEffect(()=>{
        const coleccionDeProductos = collection(baseDeDatos, 'productos')
        const com = categoryName
       
        ? query(coleccionDeProductos, where("categoria", "==", categoryName))
        : coleccionDeProductos;
  
      getDocs(com)
        .then((respuesta) => {
          const productos = respuesta.docs.map((prod) => {
            return {
              id: prod.id,
              ...prod.data(),
            };
          });
          setItems(productos);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setCargando(false);
        });

        return () => setCargando(true)
    }, [categoryName])


    if (cargando){
        
        return (
            <div>
                <Saludo greeting='Bienvenido a Complejo 22'/>
                <div style={{display:'flex', justifyContent:'center',height:'47vh', alignItems:'center'}}>
                    <ClipLoader color="#36d7b7" size={100} />
                </div>
            </div>
            )
    }

    return (
        <main>
            <Saludo greeting='Bienvenido a Complejo 22'/>
            <div>
                 <ItemList items={items}/>
            </div>
        </main>
    )
}

export default ItemListContainer



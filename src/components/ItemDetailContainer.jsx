import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader";
import { collection, doc, getDoc } from 'firebase/firestore';
import { baseDeDatos } from '../services/firebase';

const ItemDetailContainer =()=>{
  
    const [item, setItem] = useState({})
    const [cargando , setCargando] = useState(true)
    const {id} = useParams()

    
    useEffect(() => {
        const coleccionDeProducto = collection(baseDeDatos, 'productos')
        const com = doc(coleccionDeProducto,id)
        
        getDoc(com)
        .then((respuesta)=>{
            setItem({
                id:respuesta.id,
                ...respuesta.data()
            })
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{
            setCargando(false)
        })
        return () => setCargando(true);
    }, [id]);
   
   

    return(
        <div>
            {cargando
            ?
            <div style={{display:'flex', justifyContent:'center',height:'50vh', alignItems:'center'}}>
                <ClipLoader color="#36d7b7" size={100}/>
            </div>
            :
             <ItemDetail item={item}/>
            }
        </div>
    )

    
}

export default ItemDetailContainer


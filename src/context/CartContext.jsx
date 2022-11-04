import { createContext, useState} from "react";

export const Context = createContext()

const Proveedor = ({children})=>{
const [carrito , setcart] = useState([])




const additem = (item , cantNum) =>{
    const product =({...item, cantNum})
    
    if(enElCarrito(product.id) ){
        sCantidad(product)
    }else{
        setcart([...carrito, product])
    }
    
}

const sCantidad = (agregado)=>{
    const repetido = carrito.map((itemCart)=>{
        if (itemCart.id === agregado.id){
            const suma = {
                ...itemCart,
                cantNum: itemCart.cantNum + agregado.cantNum
            }
            return suma
        }else {
            return itemCart
        }
    })
    setcart(repetido)
}


const unidadesTotales = ()=>{
    let contador = 0
    const replica = [...carrito]
    replica.forEach((prod)=>{
        contador += prod.cantNum
    })
    return contador
}



const precioTotal = () => {
    let acumulador = 0;
    const copia = [...carrito];
    copia.forEach((prod) => {
      acumulador += prod.cantNum * prod.precio;
    });
    return acumulador;
  };

  const productoCantidad = (id) => {
    const product = carrito.find((prod) => prod.id === id);
    return product?.cantidad;
};

const borrar = () =>{
    setcart([])
}

const removeItem = (id) => setcart(carrito.filter((prod)=> prod.id !== id))

const enElCarrito = (id) => carrito.some((prod) => prod.id === id)




    return(
        
        <Context.Provider value={{carrito , additem, borrar, removeItem, unidadesTotales, precioTotal,productoCantidad}}>
            {children}
        </Context.Provider>
    )
}

export default Proveedor
import { createContext, useState } from "react";

const CarritoContexto = createContext () 

const CarritoProvider = ({ children }) => {
    const [carritoProductos, setCarritoProductos ] = useState([])

    const agregarAlCarrito = (producto) => {
        setCarritoProductos(carritoProductos => [...carritoProductos, producto])
    }

    const data = {
        carritoProductos, 
        agregarAlCarrito
    }

    return(
        <CarritoContexto.Provider value={ data }>
            {children}            
        </CarritoContexto.Provider> 
    )
}

export default CarritoProvider
export { CarritoContexto }
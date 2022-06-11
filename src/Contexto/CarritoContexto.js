import { createContext, useState } from "react";

const CarritoContexto = createContext () 

const CarritoProvider = ({ children }) => {
    const [carritoProductos, setCarritoProductos ] = useState([])

    const agregarAlCarrito = (producto) => {
        setCarritoProductos(carritoProductos => [...carritoProductos, producto])
    }

    const eliminarProducto = (id) => {
       const borrarProducto = carritoProductos.find(item => item.id !== id); 
       let indexOfProducto = carritoProductos.indexOf(borrarProducto)
       carritoProductos.splice((indexOfProducto), 1)
        setCarritoProductos(carritoProductos => [...carritoProductos])
    }

    const vaciarCarrito = () => { 
        setCarritoProductos([]) 
    }

    const data = {
        carritoProductos, 
        agregarAlCarrito, 
        eliminarProducto, 
        vaciarCarrito
    }

    return(
        <CarritoContexto.Provider value={ data }>
            {children}            
        </CarritoContexto.Provider> 
    )
}

export default CarritoProvider
export { CarritoContexto }
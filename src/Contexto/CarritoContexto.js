import { toast } from "react-toastify";
import { createContext, useState } from "react";

const CarritoContexto = createContext () 

const CarritoProvider = ({ children }) => {
    const [carritoProductos, setCarritoProductos ] = useState([])

    const agregarAlCarrito = (producto) => {
        let productoAgregado = carritoProductos.find(itemAgregado => itemAgregado.id  === producto.id)
        { !productoAgregado ? 
                setCarritoProductos(carritoProductos => [...carritoProductos, producto])
            : 
            toast(`PEROO ${producto.nombre} ya está en el carrito`, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })
        }
    }

    const contadorCarrito = () => {
        
    }

    const eliminarProducto = (producto) => {
       setCarritoProductos(carritoProductos.filter(item => item.id !== producto.id))
    }

    const vaciarCarrito = () => { 
        setCarritoProductos([]) 
    }


    const precioTotal = () => {
        return carritoProductos.reduce((acu, producto) => (acu + (producto.contador * producto.precio) ), 0)
    }

    const data = {
        carritoProductos, 
        agregarAlCarrito, 
        eliminarProducto, 
        vaciarCarrito, 
        precioTotal
    }

    return(
        <CarritoContexto.Provider value={ data }>
            {children}            
        </CarritoContexto.Provider> 
    )
}

export default CarritoProvider
export { CarritoContexto }
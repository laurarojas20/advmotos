import { toast } from "react-toastify";
import { createContext, useState } from "react";

const CarritoContexto = createContext () 

const CarritoProvider = ({ children }) => {
    const [carritoProductos, setCarritoProductos ] = useState([])

    const agregarAlCarrito = (producto) => {
        let productoAgregado = carritoProductos.find(itemAgregado => itemAgregado.id  === producto.id)
        let yaEstaElProdu = carritoProductos.includes(productoAgregado)
        { !yaEstaElProdu ? 
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

    const eliminarProducto = (id) => {
       const borrarProducto = carritoProductos.find(item => item.id !== id); 
       let indexOfProducto = carritoProductos.indexOf(borrarProducto)
       carritoProductos.splice((indexOfProducto), 1)
        setCarritoProductos(carritoProductos => [...carritoProductos])
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